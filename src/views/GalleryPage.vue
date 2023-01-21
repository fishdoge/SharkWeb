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
    <!-- This is 相簿 -->
    <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/鯊魚網站-PC版/素材/02分圖層-1.png')]" />

    <!-- 左變sidebar -->
    <div class="pb-9 lg:pl-9 lg:h-[calc(100vh-2vh-3.625rem-40px)] h-[calc(100vh-2vh-40px)] flex flex-col lg:flex-row">
    <!-- This is Team -->
      <div class="max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full">
        <Anchor v-show="true" :data="sidebar" :titleShow="true" class="overflow-scroll-auto"></Anchor>
      </div>

    <div class="relative lg:flex-1 max-lg:h-full lg:flex lg:flex-col">
      <!-- Tab -->
      <div class="bg-[#252525] bg-opacity-70 rounded-md lg:rounded-xl w-[240px] h-[30px] lg:w-[440px] lg:h-[56px] z-10 ml-6">
        <div>
          <ul class="flex flex-1">
            <li class="lg:p-[6px] p-[3px] hover:cursor-pointer">
              <div
                @click="activeTabOne"
                class="flex flex-1 lg:w-[208px] w-[114px] lg:h-[44px] h-[24px] text-white text-sm lg:text-3xl rounded-md lg:rounded-xl justify-center items-center"
                :class="[tab === 1 ? 'bg-[#00DBFF]' : '']"
              >
                <p class="text-center">
                  SHARKTANK
                </p>
              </div>
            </li>
            <li class="lg:p-[6px] p-[3px] hover:cursor-pointer">
              <div
                @click="activeTabTwo"
                class="flex flex-1 lg:w-[208px] w-[114px] lg:h-[44px] h-[24px] text-white text-sm lg:text-3xl rounded-md lg:rounded-xl justify-center items-center"
                :class="[tab === 2 ? 'bg-[#00DBFF]' : '']"
              >
                <p class="text-center">
                  ANGKOR ART
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- card-group -->
      <!-- FishCard 的 css gap-3 ，在展開左邊的 sidebar 時會有跟著展開的bug 把gap 改成固定 px 可以解決-->
      <div class="overflow-y-scroll overflow-x-hidden w-[fit-content] h-full"
        :class="{ hidden: tab === 2 }">
        <div
          class="
          relative
          grid
          grid-cols-[repeat(2,45%)]
          md:grid-cols-[repeat(2,245px)]
          md:gap-12
          max-sm:gap-8
          max-sm:px-4 md:px-24
          lg:gap-[3%] lg:grid-cols-[repeat(5,17%)]
          pt-9 lg:px-0
          z-0
          justify-center
          ">
          <!-- card生成 -->
          <FishCard @click="CardClick(item.name, item.tag, item.content, item.img)" v-for="(item, key) in data" :key="key" :img="item.img"
            :card_name="item.name" :id="item.id" class="hover:scale-[1.05] hover:drop-shadow-2xl hover:shadow-[white] ">
          </FishCard>
        </div>
      </div>

    </div>
  </div>

  </div>

  <!-- modal -->
  <div class="modal z-[10] fixed top-0 w-[100%] h-[100vh] justify-center bg-[rgba(0,0,0,0.4)]"
    style="display: none; align-items: center;"
    @click="ModalClick()">
    <div
      class="z-[11] px-[10] py-[10] w-[70%] h-[65%] shadow-[0_6px_20px_0_rgba(66,_118,_217,_0.2),_0_6px_20px_0_rgba(66,_118,_217,_0.19)] border-[#4276D9] rounded-[60px]"
      style="background:radial-gradient(#4276D9,black);box-shadow: 0 6px 20px 0 rgba(66, 118, 217, 0.2), 0 6px 20px 0 rgba(66, 118, 217, 0.19);border-color: #4276D9; border:solid rgba(66, 118, 217, 0.19);">
      <div class="flex lg:justify-end lg:pt-5 max-md:flex-col lg:flex-row">
        <div class="lg:w-[45%] lg:pr-[10%] lg:pt-[5%]">
          <div class="modal-title my-5 lg:text-3xl max-md:w-full max-md:flex max-md:justify-center">
            <span class="text-white font-bold"># {{ card_content.title }}</span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <ModalIcon v-for="(item, key) in card_content.tag" :key="key" :text="item" :href="item"></ModalIcon>
          </div>
          <!-- <div class="modal-content lg:my-8 max-md:px-8">{{ card_content.content }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FishCard from '@/components/Gallery/FishCard.vue'
import Anchor from '@/components/AnchorSidebar.vue'
import ModalIcon from '@/components/Gallery/ModalIcon.vue'
import material1 from '@/assets/鯊魚網站-PC版/test.png'

export default {
  components: {
    FishCard,
    Anchor,
    ModalIcon
  },
  data() {
    return {
      modal_switch: true,
      card_content: {
        title: '',
        tag: [],
        content: '',
        img: ''
      },
      sidebar: [
        {
          name: 'BODY',
          isCheckbox: true,
          navbarOpen: false,
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
          name: 'HEAD ACCESSORY',
          isCheckbox: true,
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'EYE ACCESSORY',
          isCheckbox: true,
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'MOUTH ACCESSORY',
          isCheckbox: true,
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'NECK ACCESSORY',
          isCheckbox: true,
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'HAND ACCESSORY',
          isCheckbox: true,
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'BACKGROUND',
          isCheckbox: true,
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        }
      ],
      data: [
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        },
        {
          name: 'SHARK',
          id: '0000',
          tag: ['test1', 'test2', 'test3'],
          content: 'test1',
          img: material1
        }
      ],
      tab: 1
    }
  },
  mounted() {
    // this.gsap.to(this.$refs.wrapper, {
    //   yPercent: -200,
    //   ease: 'none',
    //   scrollTrigger: {
    //     scroller: this.$refs.wrapper,
    //     trigger: this.$refs.wrapper,
    //     pin: true,
    //     // pinType: 'transform',
    //     scrub: 0,
    //     // snap: 1 / (this.$refs.cards.length - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     end: () => '+=' + this.$refs.container.offsetWidth
    //   }
    // })
  },
  methods: {
    ModalClick() {
      document.getElementsByClassName('modal')[0].style.display = 'none'
    },
    CardClick(name, tag, content, img) {
      document.getElementsByClassName('modal')[0].style.display = 'flex'
      this.card_content.title = name
      this.card_content.tag = tag
      this.card_content.content = content
      this.card_content.img = img
    },
    activeTabOne() {
      this.tab = 1
    },
    activeTabTwo() {
      this.tab = 2
    }
  }
}
</script>

<style>

</style>
