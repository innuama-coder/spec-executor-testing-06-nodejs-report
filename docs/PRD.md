# PRD - Node.js 报告摘要 CLI

## 目标

提供一个无依赖 CLI，将 JSON 报告转换为 Markdown 摘要。

## 功能需求

| ID | 需求 |
| --- | --- |
| FR-001 | 支持从文件路径读取 JSON。 |
| FR-002 | 输出标题、状态、通过/失败数量。 |
| FR-003 | 支持 `--self-test`。 |
| FR-004 | 输入非法时返回非零退出码并输出可读错误。 |
| FR-005 | Markdown 摘要必须至少包含 `# <title>`、`Status: <status>`、`Passed: <n>` 和 `Failed: <n>`。 |

## 验收

`node test/self-test.mjs` 与固定验收脚本 `node test/acceptance.mjs` 必须通过。
