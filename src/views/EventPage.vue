<template>
  <!--
    TODO: 新增 GSAP 動畫
    TODO: 可以左右拖拉
    TODO: 新增大標題
    TODO: 新增 Sidebar (用 component 去做，不用再寫一次，只要把資料傳進去就好)
    TODO: 下面的 Read More(用 component 去做，因為是同一個頁面)
    TODO: Anchor 元件不要以 in_data 形式匯入，改用 props
    TODO: 置中對齊圖片
  -->
  <div>
    <!-- BG and Sidebar -->
    <div>
      <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/背景3.png')] " />
      <!-- <EventSlide></EventSlide> -->
      <div
      class="lg:mt-1 lg:px-8 lg:w-64
        overflow-y-auto absolute top-0 pt-[3.625rem]
        max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full
      ">
        <Anchor :data="sideBar" :iconShow="true"></Anchor>
      </div>

      <!-- Normal Page -->
      <div :class="[readMore ? 'hidden' : '']">
        <div class="pt-12 text-[90px] text-[white] flex justify-center items-center">
          <span class="font-[1000]">MYM</span>
          <span class="font-light">ETANOMICS</span>
        </div>
        <div>
          <div class="w-[100%] h-full swiper eventSwiper">
            <div class="mt-12 mb-20 swiper-wrapper">
              <div class="swiper-slide" v-for="(item, key) in event" :key="key">
                <img :id="item.name" :src="item.img" class="img-circle left-28 relative h-[380px]"/>
              </div>
            </div>
            <div class="pr-[10%] mt-8 swiper-pagination"></div>
          </div>
          <!-- <hr class="relative bottom-[1.65rem] left-[29%] w-[41%] border-white"/> -->
        </div>
        <div class="text-[1.2rem] text-center text-[white] flex justify-center align-middle flex-col">
        <div class="max-w-[45vw] m-auto">
          A collection of 5000 sharks gathered to navigate the world of Metanomics through<br>meaningful social impact activities
        </div>
        <button
          @click="showReadMore()"
          type="button"
          class="m-[0_auto] px-4 py-1 text-lg bg-gray-900 bg-opacity-60 rounded-lg border-2 border-teal-700 font-light">
          Read More <font-awesome-icon :icon="['fas', 'chevron-right']"/>
        </button>
      </div>
      </div>

      <!-- Read More Page -->
      <div :class="[readMore ? '' : 'hidden']">
        <EventReadMore></EventReadMore>
        <div class="bottom-4 left-[10rem] md:bottom-16 md:left-20 absolute text-white btn">
          <button @click="showReadMore()" class="px-4 py-1 text-lg bg-gray-900 bg-opacity-60 rounded-lg border-2 border-cyan-500">
            Back
          </button>
          <!-- <router-link to="/" type="button" >Back</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import bg from '@/assets/鯊魚網站-PC版/素材/06分圖層-1.png'
import EventReadMore from '@/components//EventPage/EventReadMore.vue'
import TestImg from '@/assets/網站-PC版/素材/金edit.png'
// import EventSlide from '@/components/EventPage/EventSlide.vue'
import Anchor from '@/components/AnchorSidebar.vue'

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination])

export default {
  components: {
    Anchor,
    EventReadMore
  },
  data() {
    return {
      // bg_img: bg,
      event: [
        {
          name: 'event',
          img: TestImg
        },
        {
          name: 'event',
          img: TestImg
        },
        {
          name: 'event',
          img: TestImg
        },
        {
          name: 'event',
          img: TestImg
        },
        {
          name: 'event',
          img: TestImg
        }
      ],
      sideBar: [
        {
          name: 'SHARKTANK',
          dropDownOpen: true,
          dropDown: [
            'sharktank',
            'sharktank',
            'sharktank',
            'sharktank',
            'sharktank',
            'sharktank',
            'sharktank'
          ]
        },
        {
          name: 'ANGKOR ART',
          dropDownOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'ARTEL',
          dropDownOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'SEA GAMES',
          dropDownOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'POWER NODES',
          dropDownOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'AGRICULTURE NFT',
          dropDownOpen: false,
          dropDown: [
            'sharktank'
          ]
        }
      ],
      readMore: false
    }
  },
  methods: {
    showReadMore() {
      this.readMore = !this.readMore
    }
  },
  mounted() {
    const eventSwiper = new Swiper('.eventSwiper', {
      loop: true,
      slidesPerView: 3,
      allowTouchMove: false,
      slideToClickedSlide: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 3000
      }
    })

    return {
      eventSwiper
    }
  }
}
</script>

<style>
.eventSwiper .swiper-slide {
  opacity: 0;
  filter:alpha(opacity=100);
}

.eventSwiper .swiper-slide-next, .swiper-slide-duplicate-next {
  opacity: 1;
  right: -15%;
}

.eventSwiper .swiper-slide-prev, .swiper-slide-duplicate-prev {
  opacity: 1;
  left: -15%;
}

.eventSwiper .swiper-slide-active, .swiper-slide-duplicate-active {
  opacity: 1;
  transform: scale(1.2);
}

.eventSwiper .swiper-pagination-bullet {
  border-radius: 50%;
  margin-left: 10%!important;
  width: 20px;
  height: 20px;
  opacity: 1;
  background: #5bd9ef;
}

.eventSwiper .swiper-pagination-bullet-active {
  background: rgba(255, 255, 255, 100);
}
</style>
