# CLAUDE.md

## Assignment

完成 Node.js 开发任务：根据 PRD/HLD/LLD 实现报告摘要 CLI，并补齐 self-test。

## Context To Load

- `docs/PRD.md`
- `docs/HLD.md`
- `docs/LLD.md`
- `bin/report-summary.mjs`
- `test/self-test.mjs`

## Constraints

- 不新增 npm 依赖。
- 不修改 task package。

## Acceptance Criteria

- `node test/self-test.mjs` 通过。
- `node test/acceptance.mjs` 通过。
- CLI 支持文件输入和 `--self-test`。
- 更新 `docs/DELIVERY.md`，并写入独立一行 `执行结果：通过`。

## Verification Method

运行 `node test/self-test.mjs`。

## Handoff

说明实现、验证和错误处理。
