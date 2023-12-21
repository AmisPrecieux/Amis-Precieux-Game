import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource/noto-sans/100.css';
import '@fontsource/noto-sans/200.css';
import '@fontsource/noto-sans/300.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/600.css';
import '@fontsource/noto-sans/700.css';
import '@fontsource/noto-sans/800.css';
import '@fontsource/noto-sans/900.css';
import axios from 'axios'


const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(router)
app.mount('#app')
