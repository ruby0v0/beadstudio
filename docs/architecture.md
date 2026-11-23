# 架构

## 包边界

```text
apps/mini（Taro 页面 / 平台适配）
        ↓
packages/ui（组件）
        ↓
packages/core（纯 TS，零 Taro / 零 wx）
        ↑
packages/palettes（色卡数据与 schema）
```

`packages/core` 不依赖小程序 API，可在 Node 中直接单元测试。

## 图纸模型

`PatternDocument` 是图纸的 JSON 表示：

- `schemaVersion`：结构版本
- `cols` / `rows`：网格尺寸
- `paletteId` / `paletteVersion`：色卡标识
- `colors`：图纸使用的色号
- `cells`：每格在 `colors` 中的索引
- `meta`：标题、创建时间、来源

## 图像处理流程

1. 选图与 EXIF 方向处理
2. 逐级降采样到目标网格
3. 预处理：白底合成、亮度/对比度/饱和度
4. 量化：固定色卡最近色 / 中位切分 + k-means
5. 后处理：低频色合并、孤立点清理
6. 渲染：网格、色号、图例、用量
7. 导出：分块 RGBA → Canvas → PNG

## 平台适配

Canvas、相册、文件、分享等平台能力通过 `apps/mini/src/adapters` 隔离，页面不直接调用 `wx.*`。
