import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mitt from 'mitt'
// import Unity from 'vue-unity-webgl'

const eventBus = mitt()
const app = createApp(App)

app.config.globalProperties.eventBus = eventBus
// app.component('unity', Unity)
app.mount('#app')
