import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const script = join(__dirname, "..", "scripts", "check-guard-pin.sh");
const pinned = "a".repeat(40);
const moved = "b".repeat(40);

// A caller file in the shape the repositories actually carry, so the sed
// expressions are exercised against real YAML rather than a convenient string.
function caller(workflowRef: string, guardRef: string | null): string {
	const lines = [
		"name: Secret scan",
		"",
		"on: [push, pull_request]",
		"",
		"jobs:",
		"  secret-scan:",
		"    name: secret scan",
		`    uses: TouchFlows/buzzcasting-storage/.github/workflows/secret-scan.yml@${workflowRef}`,
	];
	if (guardRef !== null) {
		lines.push("    with:", `      guard-ref: ${guardRef}`);
	}
	return `${lines.join("\n")}\n`;
}

function check(content: string, main: string) {
	const dir = mkdtempSync(join(tmpdir(), "guard-pin-"));
	const file = join(dir, "secret-scan.yml");
	writeFileSync(file, content);
	return spawnSync("bash", [script, file, main], { encoding: "utf8" });
}

describe("guard pin", () => {
	it("passes when the pin is the guard's main", () => {
		const result = check(caller(pinned, pinned), pinned);
		expect(result.status).toBe(0);
		expect(result.stdout).toContain("current");
	});

	it("fails when the guard has moved on, and says how to bump", () => {
		const result = check(caller(pinned, pinned), moved);
		expect(result.status).toBe(1);
		expect(result.stderr).toContain("pinned aaaaaaa");
		expect(result.stderr).toContain("main is bbbbbbb");
		expect(result.stderr).toContain("gh api repos/TouchFlows/buzzcasting-storage/commits/main");
	});

	// The two references moving apart is worse than either being old: the
	// workflow would run old logic against new scripts.
	it("fails when the workflow ref and the guard ref disagree", () => {
		const result = check(caller(pinned, moved), pinned);
		expect(result.status).toBe(2);
		expect(result.stderr).toContain("must match");
	});

	it("fails when the scan is pinned to a branch or not pinned at all", () => {
		const branch = check(caller("main", "main"), pinned);
		expect(branch.status).toBe(2);
		expect(branch.stderr).toContain("does not pin");

		const missing = check(caller(pinned, null), pinned);
		expect(missing.status).toBe(2);
		expect(missing.stderr).toContain("does not pass guard-ref");
	});
});
