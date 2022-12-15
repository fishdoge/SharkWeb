<template>
  <img class="bg-img" :style="`background-image: url(${bg_img});`">
  <div class="pb-9 lg:p-9 lg:h-[calc(100vh-2vh-3.625rem-40px)] h-[calc(100vh-2vh-40px)]">
    <!-- This is Team -->
    {{ a }}
    <div class="flex relative h-full flex-col lg:flex-row">
      <button
        v-show="showNum == -1"
        class="absolute top-0 lg:left-[9rem] z-30 flex items-center justify-center h-full lg:px-4 cursor-pointer group focus:outline-none left-0"
        data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 text-white lg:text-6xl text-3xl">
          <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        v-show="showNum == -1"
        type="button"
        class="absolute top-0 lg:right-[0] z-30 flex items-center justify-center h-full lg:px-4 cursor-pointer group focus:outline-none right-0"
        data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 text-white lg:text-6xl text-3xl">
          <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
          <!-- <font-awesome-icon :icon="['fas', 'filter']"/> -->
          <!-- icon="fa-sharp fa-solid fa-filter" -->
          <span class="sr-only">Next</span>
        </span>
      </button>
      <SideBar v-show="showNum == -1"></SideBar>
      <div class="flex flex-col px-9 lg:flex-wrap h-full max-lg:pb-8 md:pb-0 lg:w-[calc(100%-256px)] lg:pr-6 md:justify-around max-lg:justify-between sm:w-full">
        <!-- This is FishBar Container -->
        <FishCard
          v-show="(showNum == -1 || showNum == key)"
          v-for="(item, key) in fishCardData"
          :item="item"
          :num= "key"
          :key="key"
          @changeStatus="haha">
        </FishCard>
        <!-- @click="openModel(item,key)" -->
      </div>
    </div>
  </div>
</template>

<script>
import FishCard from '@/components/TeamPage/FishCard.vue'
import SideBar from '@/components/TeamPage/SideBar.vue'
import bg from '@/assets/鯊魚網站-PC版/素材/05分圖層.png'
// import { ref } from 'vue'

export default {
  components: {
    FishCard,
    SideBar
  },
  data() {
    return {
      bg_img: bg,
      showNum: -1,
      fishCardData: [
        {
          name: 'Jonathan Kuo',
          title: 'Business Development',
          story: 'A collection of 5000 Sharks gather to navigate the workd of Metanomics throught',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'Doug Ying',
          title: 'Business Development',
          story: 'story',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'Mini Tsai',
          title: 'Business Development',
          story: 'story',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'Mini Tsai',
          title: 'Business Development',
          story: 'story',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'Jonathan Kuo',
          title: 'Business Development',
          story: 'story',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'Doug Ying',
          title: 'Business Development',
          story: 'story',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        }
      ]
    }
  },
  methods: {
    haha(val) {
      this.showNum = val.open ? val.num : -1
    }
  }
}
</script>
<style>

</style>
