<template>
  <!--
    TODO: 將左邊的 sidebar 調成透明
    TODO: 將右邊的 card 轉為 component 並自動調整大小
    TODO: 將右邊的 card-group 調整為 自動排列
    TODO: 將左邊的 sidebar 分隔線調整為 一淺灰一白色
    TODO: HOVER特效 點擊特效
    TODO: 彈跳式視窗
    TODO: GSAP 已經在 main.js 引入，不需要重複匯入。
  -->
  <div>
    <img class="bg-img" :style="`background-image: url(${bg_img}); position:fixed`" />
    <!-- This is 相簿 -->
    <div >
      <!-- 左變sidebar -->
      <SideBar class="overflow-scroll-auto"></SideBar>
    </div>
      <!-- card-group -->
      <!-- FishCard 的 css gap-3 ，在展開左邊的 sidebar 時會有跟著展開的bug 把gap 改成固定 px 可以解決-->
    <div class="absolute top-[13vh] lg:left-[25%] grid grid-cols-[repeat(2,1fr)] md:gap-12 max-sm:gap-8 max-sm:px-4 md:px-24 lg:gap-[1rem] lg:grid-cols-[repeat(5,150px)] z-[1] pt-9 lg:px-0">
        <!-- card生成 -->
        <FishCard
          @click="CardClick"
          v-for="(item, key) in data"
          :key="key"
          :img="item.img"
          :card_name="item.name" class="hover:scale-[1.05] hover:drop-shadow-2xl hover:shadow-[white] "
          >
        </FishCard>
      </div>
    <!-- <div class="flex lg:space-x-4">
    </div> -->
    <!-- card-group-end -->
  </div>
  <!-- modal -->
  <div class="modal z-[10]" style="position:fixed;top: 0;width: 100%;height: 100vh;background-color: rgba(0, 0, 0, 0.4);display: none;justify-content: center;align-items: center;color: white;" @click="ModalClick">
    <div class="z-[11] px-[10] py-[10]" style="width:70%;height: 65%;background:radial-gradient(#4276D9,black);border-radius: 60px;box-shadow: 0 6px 20px 0 rgba(66, 118, 217, 0.2), 0 6px 20px 0 rgba(66, 118, 217, 0.19);border-color: #4276D9;border:solid rgba(66, 118, 217, 0.19);">
      <div class="flex justify-end pt-5">
        <div class="w-[45%] pr-[10%] pt-[5%]">
          <div class="modal-title my-5 text-3xl"># dragon shark 04</div>
          <div class="modal-icons flex flex-wrap space-x-1">
            <ModalIcon
              v-for="(item,key) in icon"
              :key="key"
              :text="item.name"
              :href="item.path"
            ></ModalIcon>
          </div>
          <div class="modal-content my-8">a a a a aaaaaaaaaaaaaaaaaa aaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FishCard from '@/components/Gallery/FishCard.vue'
import SideBar from '@/components/Gallery/SideBar.vue'
import ModalIcon from '@/components/Gallery/ModalIcon.vue'
import bg from '@/assets/鯊魚網站-PC版/素材/02分圖層-1.png'
import material1 from '@/assets/鯊魚網站-PC版/test.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref } from 'vue'

// 已經在 main.js 註冊過了
gsap.registerPlugin(ScrollTrigger)

export default {
  setup() {
    const universeStart = ref(null)
    const universe = ref(null)
    const grid = ref(null)
    const triggers = ScrollTrigger.getAll()

    function gsapSet() {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          gsap.to(grid.value, {

          })
        }
      })
    }

    onMounted(() => {
      ScrollTrigger.refresh()
      gsapSet()
    })
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill()
      })
      ScrollTrigger.clearMatchMedia()
    })

    return {
      universeStart,
      universe,
      grid
    }
  },
  components: {
    FishCard,
    SideBar,
    ModalIcon
  },
  data() {
    return {
      modal_switch: false,
      bg_img: bg,
      data: [
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        },
        {
          name: 'test',
          img: material1
        }
      ],
      icon: [
        {
          name: 'NOW MINTING',
          path: '/'
        },
        {
          name: 'GALLERY',
          path: '/gallery'
        },
        {
          name: 'EVENTS',
          path: '/events'
        },
        {
          name: 'GAMES',
          path: '/games'
        },
        {
          name: 'TEAM',
          path: '/team'
        },
        {
          name: 'PLAYGROUND',
          path: '/playground'
        }
      ]
    }
  },
  methods: {
    ModalClick() {
      document.getElementsByClassName('modal')[0].style.display = 'none'
    },
    CardClick() {
      document.getElementsByClassName('modal')[0].style.display = 'flex'
    }
  }
}
</script>

<style>
</style>
