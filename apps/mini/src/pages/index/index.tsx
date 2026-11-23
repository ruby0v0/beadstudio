import { Text, View } from '@tarojs/components'

const features = [
  ['本地处理', '图片不上传，断网也能用'],
  ['参数可调', '尺寸、颜色数、色卡、抖动'],
  ['图纸导出', '网格、图例、用量一次生成'],
]

export default function Index() {
  return (
    <View className="min-h-screen bg-orange-50 px-6 py-8">
      <View className="rounded-2xl bg-white p-5 shadow-sm">
        <Text className="text-[24rpx] uppercase tracking-[4rpx] text-teal-600">BeadStudio</Text>
        <Text className="mt-2 block text-3xl font-bold text-slate-800">拼豆图纸生成器</Text>
        <Text className="mt-2 block text-sm leading-relaxed text-slate-500">
          上传一张图片，生成能照着拼的拼豆图纸。免费、无需登录、图片不出设备。
        </Text>
      </View>

      <View className="mt-4 rounded-2xl bg-white p-5 shadow-sm">
        <Text className="text-sm font-semibold text-slate-700">工作流</Text>
        <View className="mt-3">
          {features.map(([title, detail]) => (
            <View key={title} className="border-b border-slate-100 py-3 last:border-b-0">
              <Text className="block text-sm font-medium text-slate-800">{title}</Text>
              <Text className="mt-1 block text-xs text-slate-500">{detail}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="mt-6 inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-white">
        <Text>选择图片</Text>
      </View>
    </View>
  )
}
