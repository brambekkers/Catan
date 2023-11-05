import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import store from './stores'

createApp(App).use(store).mount('#app')
