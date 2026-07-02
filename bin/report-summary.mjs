#!/usr/bin/env node

import { readFileSync } from "node:fs";

const SELF_TEST_REPORT = {
  title: "Self Test",
  status: "passed",
  checks: [
    { name: "unit", status: "passed" },
    { name: "lint", status: "failed" },
  ],
};

function validateReport(report) {
  if (!report || typeof report !== "object" || Array.isArray(report)) {
    throw new Error("Report must be a JSON object.");
  }

  if (typeof report.title !== "string" || report.title.length === 0) {
    throw new Error("Report title must be a non-empty string.");
  }

  if (typeof report.status !== "string" || report.status.length === 0) {
    throw new Error("Report status must be a non-empty string.");
  }

  if (!Array.isArray(report.checks)) {
    throw new Error("Report checks must be an array.");
  }
}

function summarize(report) {
  validateReport(report);

  const passed = report.checks.filter((check) => check?.status === "passed").length;
  const failed = report.checks.filter((check) => check?.status === "failed").length;

  return [
    `# ${report.title}`,
    `Status: ${report.status}`,
    `Passed: ${passed}`,
    `Failed: ${failed}`,
    "",
  ].join("\n");
}

function readReport(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in ${path}: ${error.message}`);
    }

    throw new Error(`Unable to read ${path}: ${error.message}`);
  }
}

function main(argv) {
  if (argv.length !== 1) {
    throw new Error("Usage: node bin/report-summary.mjs <report.json|--self-test>");
  }

  const report = argv[0] === "--self-test" ? SELF_TEST_REPORT : readReport(argv[0]);
  process.stdout.write(summarize(report));
}

try {
  main(process.argv.slice(2));
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
