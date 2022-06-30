import type { App } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/'
import 'virtual:windi.css'
import '@/styles/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

export const setupApp = (app: App) => {
  app.use(router)
  app.use(createPinia())
  app.mount('#app')
}
