<template>
  <div>
    <img class="bg-img" :style="`background-image: url(${bg_img});position:fixed`">
    <Anchor :data="[
        {
          name: 'ALL GAMES',
          navbarOpen: true,
          dropDown: [

          ]
        },
        {
          name: 'VIDEO',
          navbarOpen: true,
          dropDown: [

          ]
        }
    ]"></Anchor>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div v-for="(item, key) in post" :key="key" class="swiper-slide">
          <SwiperPost
            :post_title="item.title"
            :post_content="item.content"
            class="lg:ml-20 ml-5 mt-20 text-white relative">
          </SwiperPost>
        </div>
      </div>
      <!-- 這邊的tailwind會被 swiper 套件蓋過去 所以用style -->
      <div class="swiper-pagination lg:ml-[35%] md:ml-[25%] sm:ml-0" style="position: fixed; bottom: 4rem; width: 25rem;"/>
    </div>
    <div class="bottom-16 left-20 absolute text-white">
      <button @click="$router.push('/')" class="px-4 py-1 text-lg bg-gray-900 bg-opacity-60 rounded-lg border-2 border-cyan-500">
        Back
      </button>
      <!-- <router-link to="/" type="button" >Back</router-link> -->
    </div>
  </div>
</template>

<script>
import bg from '@/assets/鯊魚網站-PC版/素材/01主頁面-三軸式分頁.png'
import SwiperPost from '@/components/HomeReadMore/SwiperPost.vue'
import Anchor from '@/components/AnchorSidebar.vue'

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
    SwiperPost,
    Anchor
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

/* .btn :hover {
  background-color: rgba(255, 255, 255, 15%);
} */
.swiper-pagination-bullet {
  padding: 0px 25px;
  border-radius: 0;
  width: 7.5rem;
  height: 3px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
}
.swiper-pagination-bullet-active {
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
