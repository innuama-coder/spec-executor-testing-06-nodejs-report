# LLD - Node.js 报告摘要 CLI

## 命令

```bash
node bin/report-summary.mjs report.json
node bin/report-summary.mjs --self-test
```

## 输入

```json
{
  "title": "Nightly",
  "status": "passed",
  "checks": [{"name": "unit", "status": "passed"}]
}
```

## 输出

Markdown 文本必须使用稳定字段，便于验收脚本解析：

```text
# Nightly
Status: passed
Passed: 1
Failed: 0
```

非法输入必须向 stderr 输出可读错误，并以非零退出码结束。
