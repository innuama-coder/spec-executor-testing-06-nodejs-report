import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const run = (args) =>
  spawnSync(process.execPath, ["bin/report-summary.mjs", ...args], {
    encoding: "utf8",
  });

const dir = join(tmpdir(), `report-summary-self-test-${process.pid}`);
mkdirSync(dir, { recursive: true });

const reportPath = join(dir, "sample.json");
writeFileSync(
  reportPath,
  JSON.stringify({
    title: "Self Test",
    status: "passed",
    checks: [
      { name: "unit", status: "passed" },
      { name: "lint", status: "passed" },
      { name: "integration", status: "failed" },
    ],
  }),
);

const summary = run([reportPath]);
assert.equal(summary.status, 0, summary.stderr || summary.stdout);
assert.equal(
  summary.stdout,
  "# Self Test\nStatus: passed\nPassed: 2\nFailed: 1\n",
);

const selfTest = spawnSync(process.execPath, ["bin/report-summary.mjs", "--self-test"], {
  encoding: "utf8",
});

assert.equal(selfTest.status, 0, selfTest.stderr || selfTest.stdout);
assert.match(selfTest.stdout, /^# Self Test/m);
assert.match(selfTest.stdout, /^Status: passed/m);
assert.match(selfTest.stdout, /^Passed: 1/m);
assert.match(selfTest.stdout, /^Failed: 1/m);

const invalid = run([join(dir, "missing.json")]);
assert.notEqual(invalid.status, 0, "missing file should fail");
assert.ok(invalid.stderr.trim().length > 0, "missing file should print a readable error");
