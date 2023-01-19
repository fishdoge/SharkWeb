<template>
  <div class="z-10">
    <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/鯊魚網站-PC版/素材/00主頁面-購物車.png')]" />
    <div id="title" class="absolute lg:pl-7 pl-4 text-white text-left lg:bottom-8 font-black mt-24 bottom-14">
      <h1 class="lg:leading-10 lg:text-6xl leading-5 text-4xl pb-2 font-thin"><b class="font-black">MYM</b> ETANOMICS</h1>
      <h2 class="text-left md:leading-10 lg:text-6xl text-3xl font-normal">SharkTank</h2>
      <p class="relative pb-2 text-white text-sm leading-4 text-left font-normal realtive">A collection of 5000 sharks gathered to navigate the world of Metanomics through<br>meaningful social impact activities</p>
      <!-- <br>meaningful social impact activities -->
      <router-link
        to="/readMore"
        type="button"
        class="px-2 py-1 mt-1 lg:text-lg text-sm bg-gray-900 bg-opacity-30 rounded-lg border-2 border-teal-700 font-light ">
        Read Full Story <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </router-link>
    </div>
    <!-- <div id="timer" class="fixed w-fit left-[55.4%] top-[44%] text-white font-bold">10:58 :PM</div> -->
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data() {
    return {
    }
  },
  methods: {
    generateRandomNDigits(n) {
      return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n))
    }
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
