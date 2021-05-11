import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store'
import router from './router'
import ElementPlus from 'element-plus'

import './index.css'
import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)

app.use(store, key)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
