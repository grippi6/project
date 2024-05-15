import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/Main.css'
import router from './router' // <---
createApp(App).use(router).mount('#app')


