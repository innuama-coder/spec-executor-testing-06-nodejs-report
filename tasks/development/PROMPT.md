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

## spec-executor 2.3 Agent Task Lifecycle 约束

- 本任务包通过 `spec.yaml` 的 `execution.agent` 声明 Agent 角色、上下文、工具和权限边界。
- `ENV` 仅用于 tmux session 环境变量注入，不作为普通上下文文件读取、总结或输出。
- 默认输出、报告和交付说明不得包含 `ENV` 变量值。
- `spec.yaml` 中存在 review items 时，必须在同一 JOB 内逐条完成修复、验证和交付记录。
- 运行过程必须保持 log-first detection 边界；screen capture 只作为显式查看或失败证据。
