import { spawnSync } from "node:child_process";

const result = spawnSync(process.execPath, ["bin/report-summary.mjs", "--self-test"], {
  encoding: "utf8",
});

if (result.status !== 0) {
  console.error(result.stderr || result.stdout);
  process.exit(result.status || 1);
}

