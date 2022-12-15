<template>
  <div>
    <!--
      PROBLEM: 網頁很卡
      TODO: 優化
      TODO: PLAY點進去後的頁面
      TODO: Anchor 元件不要以 in_data 形式匯入，改用 props
    -->
    <!-- background -->
    <img class="bg-img fixed w-[100%] h-[100vh] z-[-1]" :style="`background-image: url(${bg_img});position:fixed`" />
    <div class="fixed team-content w-[100%] h-[100vh] top-0 z-[-1]" style="background: rgba(255, 255, 255, 0.2);box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter: blur(5px);-webkit-backdrop-filter: blur(5px);"></div>
    <!-- components -->
    <GameSlide></GameSlide>
    <Anchor :in_data="[
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
  </div>
</template>

<script>
import bg from '@/assets/鯊魚網站-PC版/素材/06分圖層-1.png'
import GameSlide from '@/components/GamePage/GameSlide.vue'
import Anchor from '@/components/AnchorSidebar.vue'

export default {
  components: {
    GameSlide,
    Anchor
  },
  data() {
    return {
      bg_img: bg
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
