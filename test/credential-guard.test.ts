import { execFileSync, spawnSync } from "node:child_process";
import {
	existsSync,
	lstatSync,
	mkdirSync,
	mkdtempSync,
	realpathSync,
	rmSync,
	symlinkSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterAll, describe, expect, it } from "vitest";

const scripts = resolve(import.meta.dirname, "../scripts");
const guard = join(scripts, "check-git-credentials.sh");
const hook = join(scripts, "pre-push");
const installer = join(scripts, "install-hooks.sh");

// Shaped like a personal access token, worthless: the guard only ever matches
// the pattern, so a fixture cannot leak a usable secret into the repository.
const token = `ghp_${"A".repeat(36)}`;

const workspaces: string[] = [];

/** A throwaway workspace holding one repo, always outside this repository. */
function workspace(withToken: boolean): { root: string; repo: string } {
	const root = mkdtempSync(join(tmpdir(), "credential-guard-"));
	workspaces.push(root);
	const repo = join(root, "repo");
	execFileSync("git", ["init", "-q", repo], { stdio: "ignore" });
	if (withToken) {
		execFileSync(
			"git",
			[
				"-C",
				repo,
				"remote",
				"add",
				"origin",
				// Joined, not interpolated: a literal credentials-in-URL string in a
				// tracked file is exactly what the content scan has to flag, and this
				// fixture would otherwise make the guard fail on its own repository.
				["https://", token, "@github.com/owner/repo.git"].join(""),
			],
			{ stdio: "ignore" },
		);
	}
	return { root, repo };
}

afterAll(() => {
	for (const root of workspaces) rmSync(root, { recursive: true, force: true });
});

// The guard and the hook are bash scripts. On the Windows runner they cannot
// run at all, so the tests are skipped there rather than passing vacuously.
describe.skipIf(process.platform === "win32")("credential guard", () => {
	it("exits 1 and redacts a token found in .git/config", () => {
		const { root } = workspace(true);

		const result = spawnSync("bash", [guard, root], { encoding: "utf8" });

		expect(result.status).toBe(1);
		expect(result.stderr).toContain("credential in");
		expect(result.stderr).toContain("<redacted>");
		// The point of the guard is to report a leak without repeating it.
		expect(result.stderr).not.toContain(token);
	});

	// The shape grep only knows GitHub prefixes. Provider keys have their own
	// formats, which is what the gitleaks layer over the index snapshot is for.
	it("exits 1 for a Stripe and an AWS key committed into a tracked file", () => {
		const { root, repo } = workspace(false);
		// Fragments, not literals: a real-looking key in this file would make the
		// guard fail on its own repository, which is the point of the scan.
		const stripe = ["sk_live_", "51H8xQ2eZv", "KYlo2C9mNpQ", "rStUvWx"].join("");
		const aws = ["AKIA", "Z7Q2LM4X", "N8PT3RVC"].join("");
		writeFileSync(
			join(repo, "secrets.env"),
			`STRIPE_KEY=${stripe}\nAWS_KEY=${aws}\n`,
		);
		execFileSync("git", ["-C", repo, "add", "secrets.env"], { stdio: "ignore" });

		const result = spawnSync("bash", [guard, root], { encoding: "utf8" });
		const output = `${result.stdout}${result.stderr}`;

		expect(result.status).toBe(1);
		expect(output).toContain("secrets.env");
		expect(output).toContain("stripe-live-secret");
		expect(output).toContain("aws-access-key-id");
		expect(output).not.toContain(stripe);
		expect(output).not.toContain(aws);
	});

	// A fingerprint allowlist pins a rule and a line, so upgrading the vendored
	// file moves the line and the finding silently returns. A path allowlist has
	// to keep working when the file shifts underneath it.
	it("keeps a repository path allowlist across a line shift", () => {
		const { root, repo } = workspace(false);
		const stripe = ["sk_live_", "51H8xQ2eZv", "KYlo2C9mNpQ", "rStUvWx"].join("");
		const allowlist = "[allowlist]\npaths = ['''^public/vendor/''']\n";
		const vendor = join(repo, "public/vendor/bundle.js");
		mkdirSync(join(repo, "public/vendor"), { recursive: true });
		writeFileSync(vendor, `var key = "${stripe}";\n`);

		const scan = () => {
			execFileSync("git", ["-C", repo, "add", "-A"], { stdio: "ignore" });
			return spawnSync("bash", [guard, root], { encoding: "utf8" });
		};

		// Without the allowlist the key is caught, so the exemption does real work.
		expect(scan().status).toBe(1);

		writeFileSync(join(repo, ".gitleaks-allowlist.toml"), allowlist);
		expect(scan().status).toBe(0);

		// Same file, finding 27 lines further down: a fingerprint would miss it.
		writeFileSync(vendor, `${"\n".repeat(27)}var key = "${stripe}";\n`);
		expect(scan().status).toBe(0);
	});

	// An exemption for a path that no longer exists protects nothing while looking
	// active, so it has to be visible. It warns rather than blocking: the scan
	// still runs, and a pattern may arrive before the file it covers.
	it("warns when an allowlist pattern matches no tracked file", () => {
		const { root, repo } = workspace(false);
		mkdirSync(join(repo, "assets/kept"), { recursive: true });
		writeFileSync(join(repo, "assets/kept/keep.txt"), "nothing secret here\n");
		execFileSync("git", ["-C", repo, "add", "-A"], { stdio: "ignore" });
		const run = () => {
			execFileSync("git", ["-C", repo, "add", "-A"], { stdio: "ignore" });
			return spawnSync("bash", [guard, root], { encoding: "utf8" });
		};

		writeFileSync(
			join(repo, ".gitleaks-allowlist.toml"),
			"[allowlist]\npaths = ['''^assets/removed/''']\n",
		);
		const stale = run();
		expect(stale.status).toBe(0);
		expect(stale.stderr).toContain("matches no tracked file");
		expect(stale.stderr).toContain("^assets/removed/");

		writeFileSync(
			join(repo, ".gitleaks-allowlist.toml"),
			"[allowlist]\npaths = ['''^assets/kept/''']\n",
		);
		const live = run();
		expect(live.status).toBe(0);
		expect(live.stderr).not.toContain("matches no tracked file");
	});

	// The same warning has to appear where python3 is absent or older than 3.11,
	// otherwise a stale exemption lingers on exactly the machine missing tomllib.
	it("warns about a stale allowlist without python3 or tomllib", () => {
		const { root, repo } = workspace(false);
		writeFileSync(join(repo, "keep.txt"), "nothing secret here\n");
		execFileSync("git", ["-C", repo, "add", "-A"], { stdio: "ignore" });
		// Two quote styles, so the fallback parser is exercised on both.
		writeFileSync(
			join(repo, ".gitleaks-allowlist.toml"),
			"[allowlist]\npaths = ['''^assets/removed/''', \"^also/gone/\"]\n",
		);

		const result = spawnSync("bash", [guard, root], {
			encoding: "utf8",
			env: { ...process.env, CHECK_CREDENTIALS_NO_PYTHON: "1" },
		});

		expect(result.status).toBe(0);
		expect(result.stderr).toContain("^assets/removed/");
		expect(result.stderr).toContain("^also/gone/");
		expect(result.stderr).toContain("matches no tracked file");
	});

	// Stopping the parse at the first "]" truncated patterns like [^/]+, and a
	// multi-line list lost everything after the first bracketed entry - silently,
	// so a stale exemption could sit there unreported.
	it("reads bracketed patterns and multi-line lists in the bash fallback", () => {
		const { root, repo } = workspace(false);
		mkdirSync(join(repo, "public/vendor"), { recursive: true });
		writeFileSync(join(repo, "public/vendor/app.js"), "nothing secret here\n");
		execFileSync("git", ["-C", repo, "add", "-A"], { stdio: "ignore" });
		writeFileSync(
			join(repo, ".gitleaks-allowlist.toml"),
			[
				"[allowlist]",
				"paths = [",
				"  '''^public/vendor/[^/]+\\.js$''',",
				"  '''^assets/[a-z]+/''',",
				"]",
				"",
			].join("\n"),
		);

		const result = spawnSync("bash", [guard, root], {
			encoding: "utf8",
			env: { ...process.env, CHECK_CREDENTIALS_NO_PYTHON: "1" },
		});

		expect(result.status).toBe(0);
		// The live pattern has brackets of its own and must be read whole: a
		// truncated one would not match and would be reported as stale.
		expect(result.stderr).not.toContain("^public/vendor/");
		// The stale entry sits on a later line of the same array.
		expect(result.stderr).toContain("^assets/[a-z]+/");
		expect(result.stderr).toContain("matches no tracked file");
	});

	// The fallback is covered above; the tomllib path needs the same guarantees or
	// the two readers drift and only one of them gets exercised. Skipped where
	// tomllib is missing, since there the guard correctly falls back.
	it.skipIf(
		spawnSync("python3", ["-c", "import tomllib"]).status !== 0,
	)("reads bracketed patterns and multi-line lists through tomllib", () => {
		const { root, repo } = workspace(false);
		mkdirSync(join(repo, "public/vendor"), { recursive: true });
		writeFileSync(join(repo, "public/vendor/app.js"), "nothing secret here\n");
		execFileSync("git", ["-C", repo, "add", "-A"], { stdio: "ignore" });
		writeFileSync(
			join(repo, ".gitleaks-allowlist.toml"),
			[
				"[allowlist]",
				"paths = [",
				"  '''^public/vendor/[^/]+\\.js$''',",
				"  '''^assets/[a-z]+/''',",
				"]",
				"",
			].join("\n"),
		);

		const env = { ...process.env };
		delete env.CHECK_CREDENTIALS_NO_PYTHON;
		const result = spawnSync("bash", [guard, root], { encoding: "utf8", env });

		expect(result.status).toBe(0);
		expect(result.stderr).not.toContain("^public/vendor/");
		expect(result.stderr).toContain("^assets/[a-z]+/");
	});

	// A token in .git/config never leaves the machine; one committed into a file
	// is published with the next push, and no review will see it in a diff.
	it("exits 1 and redacts a token committed into a tracked file", () => {
		const { root, repo } = workspace(false);
		writeFileSync(join(repo, "config.ts"), `const key = "${token}";\n`);
		execFileSync("git", ["-C", repo, "add", "config.ts"], { stdio: "ignore" });

		const result = spawnSync("bash", [guard, root], { encoding: "utf8" });

		expect(result.status).toBe(1);
		expect(result.stderr).toContain("tracked files");
		expect(result.stderr).toContain("config.ts");
		expect(result.stderr).toContain("<redacted>");
		expect(result.stderr).not.toContain(token);
	});

	it("exits 0 when no credential is configured", () => {
		const { root } = workspace(false);

		const result = spawnSync("bash", [guard, root], { encoding: "utf8" });

		expect(result.status).toBe(0);
		expect(result.stdout).toContain("clean");
	});

	it("blocks the push from the pre-push hook", () => {
		const { repo } = workspace(true);
		symlinkSync(hook, join(repo, ".git", "hooks", "pre-push"));

		const result = spawnSync("git", ["-C", repo, "hook", "run", "pre-push"], {
			encoding: "utf8",
		});

		expect(result.status).toBe(1);
		expect(result.stderr).toContain("pre-push: push blocked");
		expect(result.stderr).not.toContain(token);
	});
});

// A stale `core.hooksPath` disables .git/hooks outright, so the installer has to
// clear it before the symlink it drops there means anything at all.
describe.skipIf(process.platform === "win32")("install-hooks", () => {
	it("clears a stale core.hooksPath so .git/hooks is live again", () => {
		const { root, repo } = workspace(false);
		execFileSync("git", ["-C", repo, "config", "core.hooksPath", ".husky/_"], {
			stdio: "ignore",
		});

		const result = spawnSync("bash", [installer, root], { encoding: "utf8" });

		expect(result.status).toBe(0);
		expect(result.stdout).toContain("cleared stale core.hooksPath");
		const stillSet = spawnSync(
			"git",
			["-C", repo, "config", "--get", "core.hooksPath"],
			{ encoding: "utf8" },
		);
		expect(stillSet.status).not.toBe(0);
	});

	it("links the hook into the repository", () => {
		const { root, repo } = workspace(false);

		const result = spawnSync("bash", [installer, root], { encoding: "utf8" });

		expect(result.status).toBe(0);
		const installed = join(repo, ".git", "hooks", "pre-push");
		expect(lstatSync(installed).isSymbolicLink()).toBe(true);
		expect(realpathSync(installed)).toBe(realpathSync(hook));
	});

	// A repository that really runs husky owns core.hooksPath. Clearing it would
	// break their hooks, and linking .git/hooks would look installed while doing
	// nothing, so the installer must skip loudly and leave the value alone.
	it("skips a husky-owned hooksPath instead of linking a hook that would not run", () => {
		const { root, repo } = workspace(false);
		const plain = join(root, "plain");
		execFileSync("git", ["init", "-q", plain], { stdio: "ignore" });
		writeFileSync(
			join(repo, "package.json"),
			JSON.stringify({ devDependencies: { husky: "^9.0.0" } }),
		);
		execFileSync("git", ["-C", repo, "config", "core.hooksPath", ".husky/_"], {
			stdio: "ignore",
		});

		const result = spawnSync("bash", [installer, root], { encoding: "utf8" });

		expect(result.status).toBe(0);
		expect(result.stderr).toContain("SKIP");
		expect(result.stderr).toContain("husky");
		// The value is untouched, so husky's own hooks keep running.
		const kept = spawnSync(
			"git",
			["-C", repo, "config", "--get", "core.hooksPath"],
			{ encoding: "utf8" },
		);
		expect(kept.status).toBe(0);
		expect(kept.stdout.trim()).toBe(".husky/_");
		// Nothing is dropped into a directory git is not reading.
		expect(existsSync(join(repo, ".git", "hooks", "pre-push"))).toBe(false);
		// The skip is targeted: the sibling repository is still linked.
		expect(
			lstatSync(join(plain, ".git", "hooks", "pre-push")).isSymbolicLink(),
		).toBe(true);
	});
});
