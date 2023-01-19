<template>
  <div>
    <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/鯊魚網站-PC版/素材/01主頁面-三軸式分頁.png')]" />
    <!-- Timer -->
    <!-- <div>
      <p class="text-white">{{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</p>
    </div> -->
    <div class="relative top-[-2rem] lg:ml-20 ml-10 mr-10 mt-10 text-white">
      <div class="lg:text-7xl pb-5 text-4xl"><b>MYM</b><span class="font-thin">ETANOMICS</span></div>
      <p class="lg:w-1/2 lg:max-h-full max-w-xl h-[60vh] overflow-y-scroll pl-2 whitespace-pre-line text-white leading-8 text-lg font-normal">{{ this.post[0].content }}</p>
    </div>

    <div class="flex flex-1 flex-row pl-5 lg:pl-12 relative bottom-0 mb-12">
      <button @click="$router.push('/')" class="px-4 py-1 text-lg bg-opacity-20 bg-gray-900 rounded-lg border-opacity-40 border-2 border-cyan-400 z-50 text-white">
        BACK
      </button>
      <!-- <router-link to="/" type="button" >Back</router-link> -->
    </div>
    <!-- <Anchor :data="data"
    ></Anchor> -->
  </div>
</template>

<script>
// import SwiperPost from '@/components/HomeReadMore/SwiperPost.vue'
// import Anchor from '@/components/AnchorSidebar.vue'

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination])
const date = new Date()
export default {
  components: {
    // Anchor
  },
  data() {
    return {
      post: [
        {
          content: `SharkTank is a coalition of 5000 MYMetaSharks with the collective drive to navigate the economics of the metaverse in meaningful and impactful ways.

The advent of blockchain technology ushers in unprecedented possibilities to collaborate, create, and build.

As the keystone species in the MYMetanomics ecosystem, our mission is to use blockchain technology to create an environment where innovation and creativity can generate a positive social impact on everyone.

Join the wave that is paving a new way to engage with art, culture, business, and, most importantly, each other.

Check out our events page to learn more about our social impact activities.

The advent of blockchain technology ushers in unprecedented possibilities to collaborate, create, and build.

As the keystone species in the MYMetanomics ecosystem, our mission is to use blockchain technology to create an environment where innovation and creativity can generate a positive social impact on everyone.

Join the wave that is paving a new way to engage with art, culture, business, and, most importantly, each other.
          `
        }
      ],
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      },
      timer: undefined
    }
  },
  methods: {
    generateRandomNDigits(n) {
      return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n))
    },
    setDateTime() {
      const date = new Date()
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      }
    }
  },
  mounted() {
    const swiper = new Swiper('.mySwiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '"></span>'
        }
      }
    })
    return {
      swiper
    }
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}
.mySwiper .swiper-slide {
  background-color: rgba(255, 255, 255 / 0%);
  display: flex;
}

/* .btn :hover {
  background-color: rgba(255, 255, 255, 15%);
} */
.mySwiper .swiper-pagination-bullet {
  padding: 0px 25px;
  border-radius: 0;
  width: 7.5rem;
  height: 3px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
}

.mySwiper .swiper-pagination-bullet-active {
  position: relative;
  bottom: -2px;
  height: 7px;
  color:#fff;
  background: #5bd9ef;
}
/* .swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  background-color: #FFF;
} */
</style>
