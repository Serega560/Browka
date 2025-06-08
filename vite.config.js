import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'
import { imagetools } from 'vite-imagetools';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    imagetools(),
    svgLoader(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
      symbolId: 'icon-[name]',
    }),
  ],
  base: '/Browka/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
