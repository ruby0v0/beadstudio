# 架构

## 边界

```text
apps/mini（Taro 页面 / 平台适配）
        ↓
packages/ui（组件）
        ↓
packages/core（纯 TS，零 Taro / 零 wx）
        ↑
packages/palettes（色卡数据与 schema）
```

`packages/core` 不依赖任何小程序 API，因此可以在 Node 中直接单元测试，也可以被未来的桌面端复用。

## 图纸模型

`PatternDocument` 是跨端交换格式：

- `schemaVersion`：从 1 开始，破坏性变更时递增
- `cols` / `rows`：网格尺寸
- `paletteId` / `paletteVersion`：色卡身份
- `colors`：本图纸实际使用的色号
- `cells`：每格在 `colors` 中的索引
- `meta`：标题、创建时间、来源

小程序首版负责生成这个模型并导出 PNG；桌面端未来负责编辑同一个模型。

## 图像管线（待实现）

1. 选图与 EXIF 方向处理
2. 逐级降采样到目标网格
3. 预处理：白底合成、亮度/对比度/饱和度
4. 量化：固定色卡最近色 / 中位切分 + k-means
5. 后处理：低频色合并、孤立点清理
6. 渲染：网格、色号、图例、用量
7. 导出：分块 RGBA → Canvas → PNG

## 平台适配

Canvas、相册、文件、分享等能力通过 `apps/mini/src/adapters` 隔离。页面不直接调用 `wx.*`，为后续支付宝/抖音端预留替换点。
