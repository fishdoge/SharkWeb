<template>
  <div>
    <!--
      PROBLEM: 網頁很卡
      TODO: 優化
      TODO: PLAY點進去後的頁面
      TODO: Anchor 元件不要以 in_data 形式匯入，改用 props
    -->
    <!-- background -->
    <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/鯊魚網站-PC版/素材/06分圖層-1.png')]" />
    <ComingSoon />
    <!-- <div class="fixed team-content w-[100%] h-[100vh] top-0 z-[-1]" style="background: rgba(255, 255, 255, 0.2);box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter: blur(5px);-webkit-backdrop-filter: blur(5px);"></div> -->
    <!-- <div class="absolute mt-16 w-full h-4/5 bg-red-600">
      <div class="h-full swiper gameSwiper">
        <div class="mt-6 swiper-wrapper">
          <div class="swiper-slide" v-for="(item, key) in event" :key="key" :style="`
          background-image: url(${item.img});
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: 50%;
          background-size: cover;
          `">

          </div>
        </div>
      </div>
    </div> -->
    <!-- components -->
    <!-- <GameSlide></GameSlide> -->
    <!-- <div class="lg:mt-1 lg:px-8 lg:w-64 overflow-y-auto absolute top-0 pt-14 max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full">
      <Anchor :data="data" :iconShow="true"></Anchor>
    </div> -->
  </div>
</template>

<script>
import TestImg from '@/assets/鯊魚網站-PC版/test.png'
// import GameSlide from '@/components/GamePage/GameSlide.vue'
// import Anchor from '@/components/AnchorSidebar.vue'
import ComingSoon from '../components/ComingSoon.vue'

import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
Swiper.use([Navigation])

export default {
  components: {
    // GameSlide,
    // Anchor,
    ComingSoon
  },
  data() {
    return {
      data: [
        {
          name: 'ALL GAMES',
          dropDownOpen: true,
          dropDown: [

          ]
        },
        {
          name: 'VIDEO',
          dropDownOpen: true,
          dropDown: [
          ]
        }
      ],
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
      ]
    }
  },
  mounted() {
    const eventSwiper = new Swiper('.gameSwiper', {
      loop: true,
      watchSlidesProgress: true,
      slidesPerView: 5,
      centeredSlides: true,
      loopedSlides: 10,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })

    return {
      eventSwiper
    }
  }
}
</script>

<style>
.gameSwiper .swiper-slide {
  text-align: center;
  font-size: 18px;

  height: 30rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  border-radius: 3rem;
  border: 5px solid rgba(87, 206, 208, 0.5);
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  transition: 300ms;
  transition: transform 0.3s ease;
  perspective: 1000px;
  transform-style: preserve-3d;
  -webkit-box-reflect: below 0 linear-gradient(transparent,rgba(0,0,0,0.5));
}

.gameSwiper .swiper-slide-next {
  transform: translate3d(-5vw, -10px, -100px) rotateY(-25deg);
  z-index: 50;
}

.gameSwiper .swiper-slide-prev{
  transform: translate3d(5vw, 0, -100px) rotateY(45deg);
  z-index: 50;
}

.gameSwiper .swiper-slide-active {
  transform: translate3d(0, 0, 100px) rotateY(0deg);
  z-index: 99;
}
</style>
