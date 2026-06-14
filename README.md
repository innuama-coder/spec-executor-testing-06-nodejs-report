# spec-executor-testing-06-nodejs-report

Node.js 开发型独立测试仓库。该仓库用于验证 spec-executor 是否能够驱动执行者完成一个无依赖 Node.js CLI：读取 JSON 任务报告并输出 Markdown 摘要。

## 目录

- `docs/PRD.md`
- `docs/HLD.md`
- `docs/LLD.md`
- `docs/DELIVERY.md`
- `bin/report-summary.mjs`
- `test/self-test.mjs`
- `test/acceptance.mjs`
- `tasks/development/`

## 运行

```bash
spec-executor run --spec tasks/development/spec.yaml --workspace ./workspace
```
