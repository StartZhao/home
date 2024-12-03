import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './style/style.scss'

const app = createApp(App)
// 设置页面标题
document.title = import.meta.env.VITE_SITE_TITLE || '主页'
// 设置页面图标
document.querySelector('link[rel="icon"]')?.setAttribute('href', import.meta.env.VITE_SITE_LOGO || '/images/favicon.ico')

app.use(store)

app.mount('#app')
