import { execFileSync, spawnSync } from "node:child_process";
import {
	lstatSync,
	mkdtempSync,
	realpathSync,
	rmSync,
	symlinkSync,
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
				`https://${token}@github.com/owner/repo.git`,
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
});
