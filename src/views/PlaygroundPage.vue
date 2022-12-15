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
    <Anchor :in_data="[
      {
        name: 'ALL SHARKS',
        navbarOpen: true,
        dropDown: [
          'shark', 'shark', 'shark', 'shark', 'shark'
        ]
      }
    ]"></Anchor>
    <ClassSlide></ClassSlide>
    <ActionSlide></ActionSlide>
</div>
</template>

<script>
import bg from '@/assets/鯊魚網站-PC版/素材/05分圖層.png'
import Anchor from '@/components/AnchorSidebar.vue'
import ClassSlide from '@/components/Playground/FishClassSlide.vue'
import ActionSlide from '@/components/Playground/FishActionSlide.vue'

export default {
  components: {
    Anchor,
    ClassSlide,
    ActionSlide
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
