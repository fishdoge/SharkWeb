<template>
  <div class="z-10">
    <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/PNG素材/背景1.png')]" />
    <div id="title" class="absolute lg:pl-7 pl-4 text-white text-left lg:bottom-8 font-black mt-24 bottom-14">
      <h1 class="lg:leading-10 lg:text-6xl leading-5 text-4xl pb-2 font-thin"><b class="font-black">MYM</b> ETANOMICS</h1>
      <h2 class="text-left md:leading-10 lg:text-6xl text-3xl font-normal">SharkTank</h2>
      <p class="relative pb-2 text-white text-sm leading-4 text-left font-normal realtive">A collection of 5000 sharks gathered to navigate the world of Metanomics through<br>meaningful social impact activities</p>
      <!-- <br>meaningful social impact activities -->
      <router-link
        to="/readMore"
        type="button"
        class="show-arrow-parent px-2 py-1 mt-1 lg:text-lg text-sm bg-gray-900 bg-opacity-30 rounded-lg border-2 border-teal-700 font-light"
        >
        Read full story <div class="show-arrow float-right"><font-awesome-icon :icon="['fas', 'chevron-right']" /></div>
      </router-link>
    </div>

    <div class="w-72 absolute lg:left-[45%] md:left-[40%] left-[15  %] top-[29%]">
      <img :src="this.TimerImg"/>
      <p class="relative text-white w-fit text-4xl left-16 bottom-[8.6rem]">{{ random }}</p>
      <pre class="relative text-white w-fit text-xl font-bold left-5 bottom-[5.5rem]">{{ NowTime }}</pre>
    </div>
    <!-- <div id="timer" class="fixed w-fit left-[55.4%] top-[44%] text-white font-bold">10:58 :PM</div> -->
  </div>
</template>

<script>
import { gsap } from 'gsap'
import Timer from '@/assets/PNG素材/metameter3.png'

export default {
  data() {
    return {
      TimerImg: Timer,
      NowTime: '',
      random: 10264
    }
  },
  methods: {
    generateRandomNDigits(n) {
      return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n))
    },
    updateTime() {
      const nowTime = new Date()
      const D = nowTime.getDate()
      const MM = nowTime.getMonth() + 1
      const YYYY = nowTime.getFullYear()
      const H = nowTime.getHours()
      const M = nowTime.getMinutes()
      const S = nowTime.getSeconds()
      this.NowTime = `${MM > 9 ? MM : '0' + MM}/${D}/${YYYY - 2000}    ${H > 9 ? H : '0' + H}  ${M > 9 ? M : '0' + M}  ${S > 9 ? S : '0' + S}`
    }
  },
  mounted() {
    // test
    const t1 = gsap.timeline({ nullTargetWarn: false })
    t1.set('h1', { duration: 0, opacity: 0 })
    t1.set('h2', { duration: 0, opacity: 0 })
    t1.to('h2', { duration: 0.5, opacity: 1 }, '+=1')
    t1.to('h1', { duration: 1, opacity: 1 }, '<1')
    this.updateTime()
    setInterval(this.updateTime, 1000)

    // GET random for timer block
    setInterval(() => {
      this.random = Math.floor(Math.random() * 89999 + 10000)
    }, 700)
  }
}
</script>

<style>
.show-arrow-parent {
  opacity: 1;
}

.show-arrow {
  opacity: 1;
}

.show-arrow-parent:hover .show-arrow {
  animation-name: showArrow;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-iteration-count: 1;
}

@keyframes showArrow {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
