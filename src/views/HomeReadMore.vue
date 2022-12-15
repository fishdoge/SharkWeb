<template>
  <div>
    <img class="bg-img" :style="`background-image: url(${bg_img});position:fixed`">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div v-for="(item, key) in post" :key="key" class="swiper-slide">
          <SwiperPost
            :post_title="item.title"
            :post_content="item.content"
            class="ml-20 mt-20 text-white relative">
          </SwiperPost>
        </div>
      </div>
      <div class="swiper-pagination" style="position: fixed; bottom: 3rem;"></div>
    </div>
    <div class="bottom-14 left-20 absolute text-white btn">
      <router-link
        to="/"
        type="button"
        class="px-4 py-1 text-lg bg-gray-900 bg-opacity-60 rounded">
        Back
      </router-link>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/鯊魚網站-PC版/素材/01主頁面-三軸式分頁.png'
import SwiperPost from '@/components/HomeReadMore/SwiperPost.vue'

import { onMounted } from 'vue'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination])

export default {
  setup() {
    let swiper = new Swiper('.mySwiper', {})
    onMounted(() => {
      swiper = new Swiper('.mySwiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '"></span>'
          }
        }
      })
    })
    swiper.on('init', () => {
      console.log('init')
    })
  },
  components: {
    SwiperPost
  },
  data() {
    return {
      bg_img: bg,
      post: [
        {
          title: `<b>MYM</b> ETANOMICS
          `,
          content: `A collection of 5000 sharks gathered to navigate the world of <br>
        Metanomics through <br>
        meaningful social impact activities <br>
        A collection of 5000 sharks gathered to navigate the wprld of <br>
        Metanomics through <br>
        meaningful social impact activities <br>`
        },
        {
          title: 'page2',
          content: '456'
        },
        {
          title: 'page3',
          content: '789'
        }

      ]
    }
  }
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  background-color: rgba(255, 255, 255 / 0%);
  display: flex;
}

.btn :hover {
  background-color: rgba(255, 255, 255, 15%);
}
.swiper-pagination-bullet {
  padding: 0px 25px;
  border-radius: 0;
  width: 11rem;
  height: 3px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
}
.swiper-pagination-bullet-active {
  position: relative;
  bottom: -1px;
  height: 5px;
  color:#fff;
  background: #4bdeff;
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
