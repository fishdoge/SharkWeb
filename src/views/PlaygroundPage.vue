<template>
  <!--
    TODO: 新增 GSAP 動畫
    TODO: 用 VueGL 去做 3D 物件
    TODO: 做出 左邊三條線的東西(應該是sidebar)
    TODO: Sidebar 新增下拉式選單(一樣透過 component 去呼叫就行，不用再寫一次，只要把資料傳進去就好)
    TODO: 右邊動畫的部份做出資訊跳出來的效果
    TODO: Anchor 元件不要使用 in_data，而是使用多個 props 傳入
  -->
  <div>
    <img class="bg-img" :style="`background-image: url(${bg_img});position:fixed`">
    <Anchor :data="[
      {
        name: 'ALL SHARKS',
        navbarOpen: true,
        dropDown: [
          'shark', 'shark', 'shark', 'shark', 'shark'
        ]
      }
    ]"></Anchor>
    <div id="sharkSlide" class="absolute w-[50%] bottom-12 left-[25%] bg-red-600">
      <div class="swiper sharkSwiper">
        <div class="pl-[60px] swiper-wrapper">
          <div class="swiper-slide" v-for="(item, key) in sharkData" :key="key">
            <button>
              <img :id="item.name" :src="item.sharkImg" class="h-[70px] mt-4 mb-2"/>
            </button>
          </div>
        </div>
        <button class="swiper-button-prev text-[#fff] text-[50px] absolute left-[0] bottom-[-15px] z-10">&lt;</button>
        <button class="swiper-button-next text-[#fff] text-[50px] absolute right-[0] bottom-[-15px] z-10">></button>
      </div>
    </div>

    <div id="actionSlide" class="absolute w-24 h-[80%] bottom-[5%] right-16 bg-red-600">
      <div class="h-[100%] swiper actionSwiper">
        <div class="pl-3 swiper-wrapper">
          <div class="swiper-slide" v-for="(item, key) in sharkData" :key="key">
            <button>
              <img :id="item.name" :src="item.actionIcon" class="rounded-full h-[70px] mt-[35px]"/>
            </button>
          </div>
        </div>
        <button class="swiper-button-prev text-[#fff] text-[50px] absolute left-7 top-[-15px] z-10">^</button>
        <button class="swiper-button-next text-[#fff] text-[50px] absolute left-9 bottom-[-15px] z-10">v</button>
      </div>
    </div>
    <!-- <ClassSlide></ClassSlide>
    <ActionSlide></ActionSlide> -->
</div>
</template>

<script>
import bg from '@/assets/鯊魚網站-PC版/素材/05分圖層.png'
import Anchor from '@/components/AnchorSidebar.vue'
import SharkImg from '@/assets/鯊魚網站-PC版/test.png'

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination])
// import ClassSlide from '@/components/Playground/FishClassSlide.vue'
// import ActionSlide from '@/components/Playground/FishActionSlide.vue'

export default {
  components: {
    Anchor
    // ClassSlide,
    // ActionSlide
  },
  data() {
    return {
      bg_img: bg,
      sharkData: [
        {
          name: 'shark1',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: 'none',
          title: 'this is the shark title',
          content: 'this is content'
        },
        {
          name: 'shark2',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: 'none',
          title: 'this is the shark title',
          content: 'this is content'
        },
        {
          name: 'shark3',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: 'none',
          title: 'this is the shark title',
          content: 'this is content'
        },
        {
          name: 'shark4',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: 'none',
          title: 'this is the shark title',
          content: 'this is content'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: 'none',
          title: 'this is the shark title',
          content: 'this is content'
        }
      ]
    }
  },
  methods: {

  },
  mounted() {
    const sharkSwiper = new Swiper('.sharkSwiper', {
      loop: true,
      slidesPerView: 5,
      slideToClickedSlide: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    const actionSwiper = new Swiper('.actionSwiper', {
      loop: true,
      direction: 'vertical',
      slidesPerView: 5,
      slideToClickedSlide: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    return {
      sharkSwiper,
      actionSwiper
    }
  }
}
</script>

<style>
.sharkSwiper .swiper-slide-active, .swiper-slide-duplicate-active{
  transform: scale(1.3);
  left: 20px;
}
.actionSwiper .swiper-slide{
  opacity:0.7;
  filter:alpha(opacity=100);
}
.actionSwiper .swiper-slide-active, .swiper-slide-duplicate-active{
  opacity:1.0;
  filter:alpha(opacity=100);
}
</style>
