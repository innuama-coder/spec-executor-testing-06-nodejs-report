import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const dir = join(tmpdir(), `report-summary-${process.pid}`);
mkdirSync(dir, { recursive: true });
const reportPath = join(dir, "nightly.json");
writeFileSync(
  reportPath,
  JSON.stringify({
    title: "Nightly",
    status: "passed",
    checks: [
      { name: "unit", status: "passed" },
      { name: "lint", status: "failed" },
    ],
  }),
);

const ok = spawnSync(process.execPath, ["bin/report-summary.mjs", reportPath], {
  encoding: "utf8",
});
assert.equal(ok.status, 0, ok.stderr || ok.stdout);
assert.match(ok.stdout, /^# Nightly/m);
assert.match(ok.stdout, /^Status: passed/m);
assert.match(ok.stdout, /^Passed: 1/m);
assert.match(ok.stdout, /^Failed: 1/m);

const bad = spawnSync(process.execPath, ["bin/report-summary.mjs", join(dir, "missing.json")], {
  encoding: "utf8",
});
assert.notEqual(bad.status, 0, "missing input should fail");
assert.ok((bad.stderr || bad.stdout).trim().length > 0, "missing input should produce an error");
