import { execFileSync, spawnSync } from "node:child_process";
import {
	existsSync,
	lstatSync,
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
