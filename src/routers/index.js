import { createRouter, createWebHistory } from 'vue-router'

// 定義路由表
const routes = [
  {
    path: '/',
    name: 'MYMETA SHARK',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/home_more',
    name: 'HomeMore',
    component: () => import('@/views/HomeReadMore.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/GalleryPage.vue')
  },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import('@/views/PlaygroundPage.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/views/EventPage.vue')
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('@/views/GamesPage.vue')
  },
  {
    path: '/team',
    name: 'TEAM',
    component: () => import('@/views/TeamPage.vue')
  },
  {
    path: '/readMore',
    name: 'HomeReadMore',
    component: () => import('@/views/HomeReadMore.vue')
  },
  {
    path: '/eventReadMore',
    name: 'EventReadMore',
    component: () => import('@/views/EventReadMore.vue')
  }
]

// 執行路由表
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  },
  routes
})

// 將 name 自動賦予至 head 中的 title
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
