# BeadStudio

把图片变成能照着拼的拼豆图纸。微信小程序，免费、开源、零后端。

> 当前状态：工程骨架（D1）。页面与核心算法正在开发中。

## 技术栈

| 层 | 选择 |
|---|---|
| 框架 | Taro 4.3 + React 18 + TypeScript |
| 构建 | Vite 5.4 |
| 样式 | Tailwind CSS 4 + `weapp-tailwindcss` |
| 状态 | Zustand |
| 校验 | TypeScript + zod |
| 质量 | Biome + Vitest + GitHub Actions |

## 仓库结构

```text
apps/mini/           微信小程序（当前首发端）
packages/core/       纯 TypeScript 核心：图纸模型、量化、渲染
packages/palettes/   色卡 schema 与项目自建通用色卡
packages/ui/         自建 Taro/React 组件
docs/                架构与隐私政策
```

## 开发

```bash
pnpm install
pnpm dev:weapp      # 构建到 apps/mini/dist，用微信开发者工具打开
pnpm dev:h5         # 构建 H5 预览
```

## 脚本

| 命令 | 作用 |
|---|---|
| `pnpm build:weapp` | 微信小程序生产构建 |
| `pnpm build:h5` | H5 生产构建 |
| `pnpm typecheck` | TypeScript 类型检查 |
| `pnpm lint` | Biome 检查 |
| `pnpm test` | Vitest 单元测试 |
| `pnpm format` | Biome 自动修复 |

## 设计原则

- **零后端**：图片解码、缩放、配色、渲染全部在端侧完成，图片不上传。
- **首版只做生成**：小程序不做逐格编辑；编辑能力留给未来桌面端。
- **色卡可插拔**：首版内置项目自建通用色卡，支持用户导入 JSON/CSV；不打包未确认授权的品牌色卡。
- **共享图纸模型**：`PatternDocument` 是版本化 JSON，未来桌面编辑器可直接复用。

## 许可

MIT
