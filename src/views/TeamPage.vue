<template>
  <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/鯊魚網站-PC版/素材/05分圖層.png')]" >
  <div class="pt-5 pb-9 lg:pl-9 lg:h-[calc(100vh-2vh-3.625rem-40px)] h-[calc(100vh-2vh-40px)] flex flex-col lg:flex-row">
    <!-- This is Team -->
    <div v-show="showNum == -1" class="lg:w-64 max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full lg:pt-5">
      <Anchor :data="sidebar" :iconShow="false"></Anchor>
    </div>
    <div class="relative lg:flex-1 max-lg:h-full">
      <!-- 左邊 -->
      <button
        :class="['absolute top-0 lg:left-[-2rem] z-40 flex items-center justify-center h-full lg:px-4 cursor-pointer group focus:outline-none left-0 py-auto max-lg:px-5',
          showNum == -1 ? '' : 'lg:hidden'
        ]"
        data-carousel-prev>
        <span @click="prev()" class="inline-flex items-center justify-center w-8 h-8 text-white lg:text-6xl text-3xl">
          &lt;
          <!-- <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon> -->
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <!-- 右邊 -->
      <button
        type="button"
        :class="['absolute top-0 lg:right-[0] z-40 flex items-center justify-center h-full lg:px-4 cursor-pointer group focus:outline-none right-0 max-lg:px-5',
          showNum == -1 ? '' : 'lg:hidden'
        ]"
        data-carousel-next>
        <span @click="next" class="inline-flex items-center justify-center w-8 h-8 text-white lg:text-6xl text-3xl">
          &gt;
          <!-- <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon> -->
          <!-- <font-awesome-icon :icon="['fas', 'filter']"/> -->
          <!-- icon="fa-sharp fa-solid fa-filter" -->
          <span class="sr-only">Next</span>
        </span>
      </button>
      <!-- 中間 -->
      <div class="flex flex-col px-9 max-lg:px-16 max-lg:pt-5 lg:flex-wrap h-full max-lg:pb-8 md:pb-0 lg:w-[calc(100%-256px)] lg:pr-6 md:justify-around max-lg:justify-between sm:w-full">
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
import JLShark from '@/assets/Team/JL Shark.png'
import KJShark from '@/assets/Team/KJ Shark.png'
import DYShark from '@/assets/Team/DY Shark.png'
import LHShark from '@/assets/Team/LH Shark.png'
import NLShark from '@/assets/Team/NL Shark.png'
import MTShark from '@/assets/Team/MT Shark.png'
import MJShark from '@/assets/Team/MJ Shark.png'
import JBShark from '@/assets/Team/JB Shark.png'
import MSShark from '@/assets/Team/MS Shark.png'
import AYShark from '@/assets/Team/AY Shark.png'
import TSShark from '@/assets/Team/TS Shark.png'
import SWShark from '@/assets/Team/SW Shark.png'
export default {
  components: {
    FishCard,
    Anchor
  },
  data() {
    return {
      showNum: -1,
      fishCardData: [
        {
          name: 'JL Shark',
          title: 'Development',
          story: 'Director of vibes and resident visionary. Here to shake up the metaverse!',
          img: JLShark,
          open: false
        },
        {
          name: 'KJ Shark',
          title: 'Development',
          story: 'The one who always has your back. Practical, grounded, and with the biggest heart',
          img: KJShark,
          open: false
        },
        {
          name: 'DY Shark',
          title: 'Development',
          story: 'The glue that holds everyone together. Will fight KJ for the spot of biggest heart',
          img: DYShark,
          open: false
        },
        {
          name: 'LH Shark',
          title: ' Marketing Lead',
          story: 'The hype man for all things Metanomics',
          img: LHShark,
          open: false
        },
        {
          name: 'NL Shark',
          title: 'Lead Content Editor ',
          story: 'Oversees all content with her discerning eyes',
          img: NLShark,
          open: false
        },
        {
          name: 'MT Shark',
          title: 'Art Design Lead',
          story: 'Fashionably late, but always looking fly',
          img: MTShark,
          open: false
        },
        {
          name: 'MJ Shark',
          title: ' Social Media Lead',
          story: 'Here to make sure we are always showing our best side to the world!',
          img: MJShark,
          open: false
        },
        {
          name: 'JB Shark',
          title: 'Lead Content Creator',
          story: 'Artistic and talented across different mediums. She’s always reppin’ hard! ',
          img: JBShark,
          open: false
        },
        {
          name: 'MS Shark',
          title: ' Metaverse Tech Lead',
          story: 'In charge of the fun! First to show up at the party, and last to leave… mostly because the lights won’t stay on without him',
          img: MSShark,
          open: false
        },
        {
          name: 'AY Shark',
          title: 'Web 3 Development',
          story: 'Runs on coffee. Rarely touches grass. Might hiss at the sun',
          img: AYShark,
          open: false
        },
        {
          name: 'TS Shark',
          title: 'Web 3 Development',
          story: 'Just call me the exterminator. Here to make sure all our backend tech is bug free',
          img: TSShark,
          open: false
        },
        {
          name: 'SW Shark',
          title: 'Web3 Development',
          story: 'Do not disturb. Busy coding.',
          img: SWShark,
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
