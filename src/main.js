import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import pinia from "./store/index"
import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'




createApp(App).use(pinia).use(router).use(ElementPlus, {
  locale: zhCn,
}).mount('#app')
