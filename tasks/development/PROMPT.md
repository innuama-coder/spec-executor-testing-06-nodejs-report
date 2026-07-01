# PROMPT.md

## 任务目标

根据工作文档实现 Node.js 报告摘要 CLI。

## 必读上下文

1. `docs/PRD.md`
2. `docs/HLD.md`
3. `docs/LLD.md`
4. `bin/report-summary.mjs`
5. `test/self-test.mjs`

## 交付物

- `bin/report-summary.mjs`
- `test/self-test.mjs`
- `docs/DELIVERY.md`

## 验收标准

- `node test/self-test.mjs` 通过。
- `node test/acceptance.mjs` 通过。
- 不引入 npm 依赖。
- `docs/DELIVERY.md` 中包含独立一行 `执行结果：通过`。
- 不修改 `tasks/development`。

## Handoff

最终回复包含修改摘要、验证命令和结果。
