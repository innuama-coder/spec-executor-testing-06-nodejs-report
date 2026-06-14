# AGENTS.md

## Current Task

Implement the Node.js report summary CLI described by PRD/HLD/LLD.

## Source Of Truth

- `PROMPT.md`
- `docs/PRD.md`
- `docs/HLD.md`
- `docs/LLD.md`

## Allowed Scope

- `bin/report-summary.mjs`
- `test/self-test.mjs`
- `docs/DELIVERY.md`

## Forbidden Scope

- Do not edit `tasks/development`.
- Do not add npm dependencies.

## Completion Criteria

Self-test and fixed acceptance test pass. `docs/DELIVERY.md` contains a standalone line `执行结果：通过`.

## Required Verification

Run `node test/self-test.mjs`.
Run `node test/acceptance.mjs`.
