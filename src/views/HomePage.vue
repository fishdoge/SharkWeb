<!--
  TODO: 已經在 main.js 匯入 gsap 了，解決不用再重複 import 的問題(效能低落)。
 -->
<template>
  <div class="z-[1]">
    <img class="bg-img fixed w-[100%] h-[100vh]" :style="`background-image: url(${bg_img}); position:fixed`" />
    <div id="title" class="bottom-text">
      <h1><b>MYM</b> ETANOMICS</h1>
      <h2>SharkTank</h2>
      <p class="text-gray-400">A collection of 5000 sharks gathered to navigate the world of Metanomics through</p>
      <p class="h-5 text-gray-400">meaningful social impact activities</p>
      <router-link
        to="/readMore"
        type="button"
        class="px-4 py-1 text-lg bg-gray-900 bg-opacity-60 rounded-lg border-2 border-teal-700 font-light">
        >
        Read Full Story
      </router-link>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/鯊魚網站-PC版/素材/00主頁面-購物車.png'
import { gsap } from 'gsap'

export default {
  data() {
    return {
      bg_img: bg
    }
  },
  methods: {

  },
  mounted() {
    // test
    const t1 = gsap.timeline({ nullTargetWarn: false })
    t1.set('h1', { duration: 0, opacity: 0 })
    t1.set('h2', { duration: 0, opacity: 0 })
    t1.to('h2', { duration: 0.5, opacity: 1 }, '+=1')
    t1.to('h1', { duration: 1, opacity: 1 }, '<1')
  }
}
</script>

<style>
.bottom-text {
  position: absolute;
  left: 2%;
  bottom: 10%;
  color: white;
  text-align: center;
  font-weight: 900;
  margin-top: 100px;
  text-align: left;
}
h1 {
  line-height: 50px;
  font-size: 350%;
  font-weight: 100;
}
h2 {
  text-align: left;
  line-height: 50px;
  font-size: 250%;
}
p {
  position: relative;
  font-size: 25%;
  text-align: left;
  /* font-weight: 100; */
}
b {
  font-weight: 900;
}
</style>
