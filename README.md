# BeadStudio

BeadStudio 是一个把图片转换为拼豆图纸的微信小程序。上传图片、设置网格尺寸和颜色数量，即可生成带网格、色号、图例和用量清单的图纸。

## 功能

- 图片导入与裁剪适配
- 网格尺寸、颜色数量、色卡、抖动等参数
- 网格预览、色号图例、每色颗数统计
- 图纸导出与保存
- 自定义色卡导入

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
apps/mini/           微信小程序
packages/core/       纯 TypeScript 核心：图纸模型、量化、渲染
packages/palettes/   色卡 schema 与通用色卡
packages/ui/         自建 Taro/React 组件
docs/                架构与隐私政策
```

## 文档

- [架构说明](docs/architecture.md)
- [隐私政策](docs/privacy.md)

## 开发

```bash
pnpm install
pnpm dev:weapp      # 构建到 apps/mini/dist/weapp，用微信开发者工具打开
pnpm dev:h5         # 构建到 apps/mini/dist/h5
```

构建产物：

| 目标 | 输出 |
|---|---|
| 微信小程序 | `apps/mini/dist/weapp` |
| H5 | `apps/mini/dist/h5` |

## 脚本

| 命令 | 作用 |
|---|---|
| `pnpm build:weapp` | 微信小程序生产构建 |
| `pnpm build:h5` | H5 生产构建 |
| `pnpm typecheck` | TypeScript 类型检查 |
| `pnpm lint` | Biome 检查 |
| `pnpm test` | Vitest 单元测试 |
| `pnpm format` | Biome 自动修复 |

## 许可

MIT
