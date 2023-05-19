import { VueElement, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

VueElement.prototype.$http = axios
const token = localStorage.getItem("token")
if (token) {
    VueElement.prototype.$http.defaults.headers.common['Authorization'] = token
}

createApp(App).use(store).use(router).mount('#app')
