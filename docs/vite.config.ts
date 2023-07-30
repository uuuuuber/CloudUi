import { defineConfig } from 'vite'
import DefineOption from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [DefineOption()],
})
