<template>
  <img class="bg-img" :style="`background-image: url(${bg_img});  position:fixed;`">
  <div class="pb-9 lg:p-9 lg:h-[calc(100vh-2vh-3.625rem-40px)] h-[calc(100vh-2vh-40px)] flex flex-col lg:flex-row">
    <!-- This is Team -->
    <div v-show="showNum == -1" class="lg:w-64 max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full">
      <Anchor :data="sidebar"></Anchor>
    </div>
    <div class="relative lg:flex-1 max-lg:h-full">
      <button
        v-show="showNum == -1"
        class="absolute top-0 lg:left-[-6rem] z-10 flex items-center justify-center h-full lg:px-4 cursor-pointer group focus:outline-none left-0 py-auto"
        data-carousel-prev>
        <span @click="prev()" class="inline-flex items-center justify-center w-8 h-8 text-white lg:text-6xl text-3xl">
          <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        v-show="showNum == -1"
        type="button"
        class="absolute top-0 lg:right-[0] z-10 flex items-center justify-center h-full lg:px-4 cursor-pointer group focus:outline-none right-0"
        data-carousel-next>
        <span @click="next" class="inline-flex items-center justify-center w-8 h-8 text-white lg:text-6xl text-3xl">
          <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
          <!-- <font-awesome-icon :icon="['fas', 'filter']"/> -->
          <!-- icon="fa-sharp fa-solid fa-filter" -->
          <span class="sr-only">Next</span>
        </span>
      </button>
      <div class="flex flex-col px-9 lg:flex-wrap h-full max-lg:pb-8 md:pb-0 lg:w-[calc(100%-256px)] lg:pr-6 md:justify-around max-lg:justify-between sm:w-full">
        <!-- This is FishBar Container -->
        <FishCard
          v-show="(showNum == -1 || showNum == key)"
          v-for="(item, key) in fishCardData"
          :item="item"
          :num= "key"
          :key="key"
          @changeStatus="changeStatus">
        </FishCard>
        <!-- @click="openModel(item,key)" -->
      </div>
    </div>
  </div>
</template>

<script>
import FishCard from '@/components/TeamPage/FishCard.vue'
import Anchor from '@/components/AnchorSidebar.vue'
import bg from '@/assets/鯊魚網站-PC版/素材/05分圖層.png'
export default {
  components: {
    FishCard,
    Anchor
  },
  data() {
    return {
      bg_img: bg,
      showNum: -1,
      fishCardData: [
        {
          name: 'JL Shark',
          title: 'Development',
          story: 'Director of vibes and resident visionary. Here to shake up the metaverse!',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'KJ Shark',
          title: 'Development',
          story: 'The one who always has your back. Practical, grounded, and with the biggest heart',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'DY Shark',
          title: 'Development',
          story: 'The glue that holds everyone together. Will fight KJ for the spot of biggest heart',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'LH Shark',
          title: ' Marketing Lead',
          story: 'The hype man for all things Metanomics',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'NL Shark',
          title: 'Lead Content Editor ',
          story: 'Oversees all content with her discerning eyes',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        },
        {
          name: 'MT Shark',
          title: 'Art Design Lead',
          story: 'Fashionably late, but always looking fly',
          img: 'https://sharkoutlawsquad.com/_next/static/images/shark-justice-3-1867050b1f698d049c8587d29124ada5.jpg',
          open: false
        }
      ],
      sidebar: [
        {
          name: 'TEAM',
          dropDownOpen: false,
          dropDown: [
            'shark', 'shark', 'shark', 'shark', 'shark'
          ]
        },
        {
          name: 'PARTNER',
          dropDownOpen: false,
          dropDown: [
            'shark', 'shark', 'shark', 'shark', 'shark'
          ]
        }
      ]
    }
  },
  methods: {
    changeStatus(val) {
      this.showNum = val.open ? val.num : -1
    },
    next() {
      console.log('next')
    },
    prev() {
      console.log('prev')
    }
  }
}
</script>
