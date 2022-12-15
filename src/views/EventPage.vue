<template>
  <!--
    TODO: 新增 GSAP 動畫
    TODO: 可以左右拖拉
    TODO: 新增大標題
    TODO: 新增 Sidebar (用 component 去做，不用再寫一次，只要把資料傳進去就好)
    TODO: 下面的 Read More(用 component 去做，因為是同一個頁面)
    TODO: Anchor 元件不要以 in_data 形式匯入，改用 props
  -->
  <div>
    <div>
      <img class="bg-img" :style="`background-image: url(${bg_img}); position:fixed`" />
      <EventSlide></EventSlide>
    </div>
    <Anchor :data="[
        {
          name: 'SHARKTANK',
          navbarOpen: true,
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
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'ARTEL',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'SEA GAMES',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'POWER NODES',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'AGRICULTURE NFT',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        }
      ]"
      ></Anchor>
  </div>
</template>

<script>
import bg from '@/assets/鯊魚網站-PC版/素材/06分圖層-1.png'
import EventSlide from '@/components/EventPage/EventSlide.vue'
import Anchor from '@/components/AnchorSidebar.vue'

export default {
  components: {
    EventSlide,
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
