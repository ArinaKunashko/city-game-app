import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/router'
import store from './stote/store'

createApp(App)
.use(router)
.use(store)

.mount('#app')

