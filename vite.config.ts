import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@types', replacement: fileURLToPath(new URL('./src/types', import.meta.url)) }
    ]
  },
  plugins: [
    vue(),
    Components({
      dts: './src/components.d.ts'
    }),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.png$/ // .png
      ],
      imports: ['vue', 'pinia', '@vueuse/core'],
      dirs: ['./src/stores/**', './src/utils/**', './src/types/**']
    })
  ]
})
