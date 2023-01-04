<template>
  <!--
    TODO: 新增 GSAP 動畫
    TODO: 用 VueGL 去做 3D 物件
    TODO: 做出 左邊三條線的東西(應該是sidebar)
    TODO: Sidebar 新增下拉式選單(一樣透過 component 去呼叫就行，不用再寫一次，只要把資料傳進去就好)
    TODO: 右邊動畫的部份做出資訊跳出來的效果
    TODO: Anchor 元件不要使用 in_data，而是使用多個 props 傳入
    TODO: sharkSlide 下方hr 改掉 改成figma 素材
  -->
  <div>
    <img class="bg-img" :style="`background-image: url(${bg_img});position:fixed`">
    <!-- sidebar container -->
    <div
      class="lg:mt-1 lg:px-8 lg:w-64
        overflow-y-auto absolute top-0 pt-[3.625rem]
        max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full
      ">
      <Anchor :data="sidebar"></Anchor>
    </div>
    <div id="sharkSlide" class="absolute lg:w-1/2 max-lg:w-full max-lg:bottom-0 md:bottom-4 md:w-full max-lg:pb-5 lg:bottom-12 lg:left-[25%] max-lg:left-0 ">
      <div class="test_bar2"></div>
      <div class="swiper sharkSwiper">
        <div class="lg:pl-6 md:pl-3 swiper-wrapper">
          <div
            class="swiper-slide
            left-[-1rem]"
            v-for="(item, key) in sharkData" :key="key"
          >
            <button>
              <img :id="item.name" :src="item.sharkImg" class="relative top-1/2 left-1/2 max-lg:h-[40px] lg:h-[70px] mt-4 mb-2"/>
            </button>
          </div>
        </div>
        <button class="swiper-button-prev text-[#fff] text-lg max-lg:bottom-0 text-[50px] absolute max-lg:left-4 lg:left-0 lg:bottom-[15px] z-10">&lt;</button>
        <button class="swiper-button-next text-[#fff] text-lg max-lg:bottom-0 text-[50px] absolute max-lg:right-4 lg:right-0 lg:bottom-[15px] z-10">></button>
      </div>
    </div>

    <div id="actionSlide" class="absolute lg:w-[26rem] max-lg:w-[4rem] max-lg:h-[65%] max-lg:bottom-[20%] lg:h-[80%] lg:bottom-[5%] max-lg:right-3 lg:right-16">
      <div class="test_bar w-1 absolute top-0 right-0 translate-x-1/2 translate-y-0 h-full rounded-[50%] test_bar"></div>
      <div class="h-[100%] swiper actionSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide  max-lg:hover:right-0 lg:hover:right-[-2rem] hover:scale-125 scale-1 flex lg:right-[-4rem]" v-for="(item, key) in sharkData" :key="key"
          @mouseover="item.isHide = false"
          @mouseleave="item.isHide = true"
          >
            <div class="max-lg:hidden bg-black bg-opacity-30 rounded-l-2xl relative lg:w-full lg:top-2 lg:h-32 lg:-right-5 text-white z-0" :class="[item.isHide ? 'hidden' : '']">
              <div class="font-bold pt-4 pl-4 text-lg">{{ item.title }}</div>
              <div class="pl-4 font-thin">{{ item.content }}</div>
            </div>
            <button class="absolute float-right lg:right-20">
              <img :id="item.name" :src="item.actionIcon" class="top-1/2 left-1/2 rounded-full lg:h-[70px] lg:mt-[35px]"/>
            </button>
          </div>
        </div>
        <button class="swiper-button-prev text-[#fff] max-lg:text-lg lg:text-[50px] absolute right-6 max-lg:top-0 lg:top-[-15px] z-10">^</button>
        <button class="swiper-button-next text-[#fff] max-lg:text-lg lg:text-[50px] absolute right-6 max-lg:bottom-0 lg:bottom-[-15px] z-10">v</button>
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
          action: ['action1', 'action2'],
          isHide: true,
          title: 'this is the shark title',
          content: 'this is content'
        },
        {
          name: 'shark2',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'this is the shark title',
          content: 'this is content'
        },
        {
          name: 'shark3',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'this is the shark title',
          content: 'this is content'
        },
        {
          name: 'shark4',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'this is the shark title',
          content: 'this is content'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'this is the shark title',
          content: 'this is content'
        }
      ],
      sidebar: [
        {
          name: 'ALL SHARKS',
          dropDownOpen: true,
          dropDown: [
            'shark', 'shark', 'shark', 'shark', 'shark'
          ]
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
      direction: 'vertical',
      slidesPerView: 5,
      slideToClickedSlide: true,
      initialSlide: 2,
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
.test_bar{
  background:linear-gradient(transparent, #2EDFDF, transparent );
}

.test_bar2{
  width: 100%;
  background:linear-gradient(0.25turn,transparent, #2EDFDF, transparent );
  position:absolute;
  bottom: 1rem;transform: translate(0,0);
  border-radius: 50%;
  height: 3px;
}
.sharkSwiper .swiper-slide-active, .swiper-slide-duplicate-active {
  transform: scale(1.3);
  /* left: 20px; */
}

.actionSwiper .swiper-slide {
  opacity: 0.4;
  filter: alpha(opacity=100);
  transform: scale(.75)
}

.actionSwiper .swiper-slide:hover {
  @apply lg:scale-125 max-lg:scale-100 lg:right-[-2rem] right-0
  /* transform: scale(1.2);
  right: -2rem; */
}

.actionSwiper .swiper-slide-next {
  opacity: 0.7;
  filter: alpha(opacity=100);
}

.actionSwiper .swiper-slide-prev {
  opacity: 0.7;
  filter: alpha(opacity=100);
}

.actionSwiper .swiper-slide-active, .swiper-slide-duplicate-active {
  @apply lg:scale-125 max-lg:scale-100 lg:right-[-2rem] right-0 opacity-100
}
</style>
