import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSignOutAlt)


const app = createApp(App)
const pinia = createPinia()
app.config.globalProperties.$axios = axios

app.use(router)
app.use(pinia)
app.mount('#app')
