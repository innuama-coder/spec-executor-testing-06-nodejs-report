# DELIVERY - Node.js 报告摘要 CLI

## 验收用途

本文档用于记录执行者完成 `nodejs-report-summary` 后的交付证据。执行者必须在完成实现后更新“执行记录”，否则验收不通过。

## 交付物

| 交付物 | 验收要点 |
| --- | --- |
| `bin/report-summary.mjs` | 支持 JSON 文件输入和 `--self-test`，输出稳定 Markdown 摘要。 |
| `test/self-test.mjs` | 任务级自测脚本通过。 |
| `docs/DELIVERY.md` | 记录实现摘要、验证命令和执行结果。 |

## 验收命令

```bash
node test/self-test.mjs
node test/acceptance.mjs
```

## 执行记录

实现摘要：实现 Node.js 报告摘要 CLI，支持 JSON 文件输入、`--self-test`、稳定 Markdown 摘要输出和非法输入错误处理；补充任务级自测覆盖正常摘要、自测入口和缺失文件错误。

验证命令：`npm test`；`node test/self-test.mjs`；`node test/acceptance.mjs`；`test -s docs/DELIVERY.md && grep -q "^执行结果：通过$" docs/DELIVERY.md`

ENV 注入状态：已注入；token 变量名：按任务环境配置；token 明文：未记录。

执行结果：通过

## 通过标准

- 两条验收命令均返回 0。
- 文件输入输出包含标题、状态、通过数量和失败数量。
- 非法输入返回非零退出码并输出错误。
- 执行记录中的 `执行结果` 字段必须更新为通过状态。
