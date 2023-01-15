import { nextTick, createApp } from 'vue'
import './style.css'
import router from './routers'
import App from './App.vue'
import mitt from 'mitt'

// Flowbite Tailwind
import 'flowbite'

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, CSSPlugin } from 'gsap/all'

// 匯入 font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// 匯入 swiper

library.add(fas, fab, far)

gsap.registerPlugin(CSSPlugin, ScrollTrigger, Draggable, MotionPathPlugin)

const eventBus = mitt()
// 程式開始
const app = createApp(App)

app.mixin({
  created: function() {
    this.gsap = gsap
  }
})

app.config.globalProperties.eventBus = eventBus

// 自動標題(會從 router 裡面的 title 去抓)
router.afterEach((to, from) => {
  nextTick(() => {
    if (to.name) {
      // 帽似是 to.title
      document.title = to.name
    } else {
      document.title = 'This is Shark NFT'
    }
  })
})

// 載入 font awesome
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(gsap)

// 把 console.log 的開發者提示關掉
app.config.productionTip = false

app.mount('#app')
