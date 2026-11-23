import path from 'node:path'
import type { UserConfigExport } from '@tarojs/cli'
import { defineConfig } from '@tarojs/cli'
import { type UserDefinedOptions, WeappTailwindcss } from 'weapp-tailwindcss/vite'
import devConfig from './dev'
import prodConfig from './prod'

const isWebTarget = process.env.TARO_ENV === 'h5'

const tailwindcssOptions: UserDefinedOptions = {
  rem2rpx: !isWebTarget,
  generator: {
    target: isWebTarget ? 'web' : 'weapp',
    webCompat: isWebTarget ? true : undefined,
    styleOptions: isWebTarget ? undefined : { px2rpx: true },
  },
  cssOptions: isWebTarget
    ? {
        rem2rpx: false,
        px2rpx: false,
        cssSelectorReplacement: { root: false, universal: false },
      }
    : undefined,
}

export default defineConfig<'vite'>(async (merge) => {
  const baseConfig: UserConfigExport<'vite'> = {
    projectName: 'beadstudio',
    date: '2026-11-22',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2,
    },
    sourceRoot: 'src',
    // Keep the mini program output at dist/ (WeChat DevTools reads it) and H5 separate.
    outputRoot: process.env.TARO_ENV === 'h5' ? 'dist-h5' : 'dist',
    plugins: [],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {},
    },
    framework: 'react',
    compiler: {
      type: 'vite',
      vitePlugins: [
        WeappTailwindcss({
          ...tailwindcssOptions,
          tailwindcssBasedir: process.cwd(),
          cssEntries: [path.resolve(__dirname, '../src/app.css')],
        }),
      ],
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: false,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      postcss: {
        autoprefixer: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: false,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    },
  }

  if (process.env.NODE_ENV === 'development') {
    return merge({}, baseConfig, devConfig)
  }
  return merge({}, baseConfig, prodConfig)
})
