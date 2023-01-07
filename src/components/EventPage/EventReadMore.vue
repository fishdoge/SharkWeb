<template>
  <div>
    <div class="swiper mySwiper">
      <div class="h-[40rem] ml-5 swiper-wrapper">
        <div v-for="(item, key) in post" :key="key" class="swiper-slide">
          <SwiperPost
            :post_title="item.title"
            :post_content="item.content"
            class="lg:ml-20 mt-20 w-[40%] text-white relative">
          </SwiperPost>
          <div class="w-1/2 mt-28 pl-6">
            <img :src="item.img" class="rounded-[5rem]"/>
          </div>
        </div>
        <img src=""/>
      </div>
      <button class="swiper-button-prev text-white text-5xl absolute left-0 bottom-1/2 z-10">&lt;</button>
      <button class="swiper-button-next text-white text-5xl absolute right-0 bottom-1/2 z-10">></button>
      <!-- 這邊的tailwind會被 swiper 套件蓋過去 所以用style -->
      <div class="swiper-pagination lg:ml-[40%] md:ml-[30%] sm:ml-0 fixed bottom-16" style="width: 25rem;" />
    </div>
  </div>
</template>

<script>
import SwiperPost from '@/components/HomeReadMore/SwiperPost.vue'
import TestImg from '@/assets/鯊魚網站-PC版/test.png'

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination])

export default {
  components: {
    SwiperPost
  },
  data() {
    return {
      post: [
        {
          title: `<b>MYM</b> ETANOMICS
          `,
          content: `A collection of 5000 sharks gathered to navigate the world of <br>
        Metanomics through <br>
        meaningful social impact activities <br>
        A collection of 5000 sharks gathered to navigate the wprld of <br>
        Metanomics through <br>
        meaningful social impact activities <br>`,
          img: TestImg
        },
        {
          title: 'page2',
          content: '456',
          img: TestImg
        },
        {
          title: 'page3',
          content: '789',
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
      ]
    }
  },
  mounted() {
    const swiper = new Swiper('.mySwiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
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
