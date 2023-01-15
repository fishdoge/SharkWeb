<template>
  <!-- <iframe class="absolute top-0" src="https://sharktest.d3fnchx61hwmr6.amplifyapp.com/" :width="sharkPage.width" :height="sharkPage.height"></iframe> -->
  <!--
    TODO: 用 VueGL 去做 3D 物件
    TODO: sharkSlide 下方hr 改掉 改成figma 素材
  -->
  <div>
    <!-- bg -->
    <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/鯊魚網站-PC版/素材/05分圖層.png')]" >

    <!-- Sidebar -->
    <div
      class="
        lg:mt-1 lg:px-8
        overflow-y-auto absolute top-0 pt-20
        max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full
      ">
      <Anchor class="pl-2" :data="sidebar" :iconShow="true"></Anchor>
    </div>

    <!-- 底下的鯊魚種類 -->
    <div id="sharkSlide" class="absolute lg:w-1/2 max-lg:w-full max-lg:bottom-0 md:bottom-4 md:w-full max-lg:pb-5 lg:bottom-12 lg:left-1/4 max-lg:left-0">
      <div class="test_bar2 z-10"></div>
      <div class="swiper sharkSwiper">
        <div class="lg:pl-6 md:pl-3 swiper-wrapper">
          <div
            class="swiper-slide -left-4 bottom-4"
            v-for="(item, key) in sharkName" :key="key"
          >
            <button @click="LoadSharkBtn(item.name)">
              <img :src="item.img" class="relative top-1/2 left-1/2 max-lg:h-10 lg:h-[70px] mt-4 mb-2"/>
            </button>
          </div>
        </div>
        <button class="swiper-button-prev text-white leading-7 max-lg:bottom-0 text-5xl absolute max-lg:left-4 lg:left-0 lg:bottom-4 z-10">
          <font-awesome-icon icon="angle-left" />
        </button>
        <button class="swiper-button-next text-white leading-7 max-lg:bottom-0 text-5xl absolute max-lg:right-4 lg:right-0 lg:bottom-4 z-10">
          <font-awesome-icon icon="angle-right" />
        </button>
      </div>
    </div>

    <!-- 右邊的鯊魚動作 -->
    <div id="actionSlide" class="absolute lg:w-[26rem] max-lg:w-16 max-lg:h-2/3 max-lg:bottom-[20%] lg:h-4/5 lg:bottom-[5%] max-lg:right-3 lg:right-16">
      <div class="test_bar w-1 absolute top-0 right-0 translate-x-1/2 translate-y-0 h-full rounded-[50%] test_bar z-10"></div>
      <div class="h-full swiper actionSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide  max-lg:hover:right-0 lg:hover:-right-8 hover:scale-125 scale-1 flex lg:-right-16" v-for="(item, key) in aniData" :key="key"
          >
            <div class="max-lg:hidden bg-black bg-opacity-30 rounded-l-2xl relative lg:w-full lg:top-2 lg:h-20 lg:-right-5 text-white z-0" :class="[item.isHide ? 'hidden' : '']">
              <div class="w-3/5">
                <div class="font-bold pt-2 pl-2 text-lg">{{ item.title }}</div>
                <div class="font-thin pl-2">{{ item.content }}</div>
              </div>
            </div>
            <button class="absolute float-right lg:right-20"
              @mouseover="item.isHide = false"
              @mouseleave="item.isHide = true"
              @click="playAnim(item.act)">
              <img :id="item.name" :src="item.actionIcon" class="top-1/2 left-1/2 rounded-full lg:h-[70px] lg:mt-3"/>
            </button>
          </div>
        </div>
        <button class="swiper-button-prev text-white max-lg:text-lg lg:text-[50px] absolute right-6 max-lg:top-0 lg:-top-4 z-10">^</button>
        <button class="swiper-button-next text-white max-lg:text-lg lg:text-[50px] absolute right-6 max-lg:bottom-0 lg:-bottom-4 z-10">v</button>
      </div>
    </div>

    <div>
      <!-- <iframe
        id="iframe"
        src="/src/webGL/index_shark.html"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="100%"
      ></iframe> -->
      <canvas id="unity-canvas" class="max-w-full w-full max-h-full absolute top-0"></canvas>
    </div>
    <!-- <ClassSlide></ClassSlide>
    <ActionSlide></ActionSlide> -->
</div>
</template>

<script>
import Anchor from '@/components/AnchorSidebar.vue'
import ActionImg from '@/assets/鯊魚網站-PC版/test.png'
import ActionImg1 from '@/assets/網站-PC版/icon/1呼吸.png'
import ActionImg2 from '@/assets/網站-PC版/icon/2慢游.png'
import ActionImg3 from '@/assets/網站-PC版/icon/3疾游.png'
import ActionImg4 from '@/assets/網站-PC版/icon/4戰鬥姿勢.png'
import ActionImg5 from '@/assets/網站-PC版/icon/5攻擊-1.png'
import ActionImg6 from '@/assets/網站-PC版/icon/6攻擊-2.png'
import ActionImg7 from '@/assets/網站-PC版/icon/7攻擊-3.png'
import ActionImg8 from '@/assets/網站-PC版/icon/8受傷.png'
import ActionImg9 from '@/assets/網站-PC版/icon/9死亡.png'
import ActionImg10 from '@/assets/網站-PC版/icon/10施法.png'
import ActionImg11 from '@/assets/網站-PC版/icon/11遠程射擊.png'
import ActionImg12 from '@/assets/網站-PC版/icon/12自我施法.png'
import ActionImg13 from '@/assets/網站-PC版/icon/13打招呼.png'
import ActionImg14 from '@/assets/網站-PC版/icon/14高興.png'
import ActionImg15 from '@/assets/網站-PC版/icon/15難過.png'
import ActionImg16 from '@/assets/網站-PC版/icon/16生氣.png'
import ActionImg17 from '@/assets/網站-PC版/icon/17跳舞.png'

import SharkImg01 from '@/assets/3D/01初始鯊-正式2-灰.png'
import SharkImg02 from '@/assets/3D/02機械鯊-正式3-長版.png'
import SharkImg03 from '@/assets/3D/03紅龍鯊-正式3.png'
import SharkImg04 from '@/assets/3D/04幽靈鯊-正式2.png'
import SharkImg05 from '@/assets/3D/05彊屍鯊-正式1.png'
import SharkImg06 from '@/assets/3D/06獨角鯊-正式2.png'
import SharkImg07 from '@/assets/3D/07絨毛鯊-正式1.png'
import SharkImg08 from '@/assets/3D/08武士鯊-正式1.png'
import SharkImg09 from '@/assets/3D/09水鑽鯊-正式2.png'
import SharkImg10 from '@/assets/3D/10鱷魚鯊-正式2.png'
import SharkImg11 from '@/assets/3D/11梅杜鯊-正式2.png'
import SharkImg12 from '@/assets/3D/12小丑魚鯊-正式1.png'
import SharkImg13 from '@/assets/3D/13撲克小丑鯊-正式3.png'
// 少了14
import SharkImg15 from '@/assets/3D/15橘郡貓鯊-正確.png'
import SharkImg16 from '@/assets/3D/16蜜蜂鯊-正確.png'
import SharkImg17 from '@/assets/3D/17錦鋰鯊-正確.png'
import SharkImg18 from '@/assets/3D/18木乃伊鯊-正確.png'
import SharkImg19 from '@/assets/3D/19拼圖鯊-正確.png'
import SharkImg20 from '@/assets/3D/20畢卡索鯊-正式.png'
import SharkImg21 from '@/assets/3D/21斑馬鯊-正確.png'
import SharkImg22 from '@/assets/3D/22花豹鯊-正式.png'
import SharkImg23 from '@/assets/3D/23長頸鹿鯊-正確.png'
import SharkImg24 from '@/assets/3D/24外星-正式.png'
import SharkImg25 from '@/assets/3D/25牛仔鯊-正確.png'
import SharkImg26 from '@/assets/3D/26岩鯊-正式.png'
import SharkImg27 from '@/assets/3D/27仙人掌鯊-正式.png'
import SharkImg28 from '@/assets/3D/28病毒鯊-正式.png'
import SharkImg29 from '@/assets/3D/29猛毒鯊-正確.png'
import SharkImg30 from '@/assets/3D/30 自由女神鯊-正確.png'
import SharkImg31 from '@/assets/3D/31 天使鯊-正確.png'
import SharkImg32 from '@/assets/3D/32 迷彩鯊-正確.png'
import SharkImg33 from '@/assets/3D/33 藍迷彩鯊-正確.png'
import SharkImg34 from '@/assets/3D/34 紅迷彩鯊-正確.png'
import SharkImg35 from '@/assets/3D/35 法老鯊-正確.png'
// 少36
import SharkImg37 from '@/assets/3D/37派對鯊-正確.png'
// 少38
import SharkImg39 from '@/assets/3D/39印地安鯊-正式.png'
import SharkImg40 from '@/assets/3D/40弗萊迪鯊-正式.png'
import SharkImg41 from '@/assets/3D/41黑帝斯鯊-正式.png'
import SharkImg42 from '@/assets/3D/42南瓜鯊-正式.png'
import SharkImg43 from '@/assets/3D/43貝殼鯊-正確.png'
import SharkImg44 from '@/assets/3D/44 烏蘇爾鯊-正確.png'
import SharkImg101 from '@/assets/3D/101 巨鯊素體-正確.png'
import SharkImg102 from '@/assets/3D/102 巨鯊-美式足球巨鯊-正確.png'
import SharkImg103 from '@/assets/3D/103 巨鯊-獸人巨鯊-正確.png'
import SharkImg104 from '@/assets/3D/104 牛人巨鯊-正確.png'
import SharkImg105 from '@/assets/3D/105 伊利丹-正確.png'
import SharkImg106 from '@/assets/3D/106 黑龍巨鯊-正確.png'
import SharkImg107 from '@/assets/3D/107 暗精靈巨鯊-正確.png'
import SharkImg108 from '@/assets/3D/108鋼鐵人巨鯊-正確.png'
import SharkImg109 from '@/assets/3D/109蝙蝠俠巨鯊-正確.png'
import SharkImg110 from '@/assets/3D/110美國隊長-正確.png'
import SharkImg111 from '@/assets/3D/111雷神索爾鯊-正確.png'
import SharkImg112 from '@/assets/3D/112薩諾斯鯊-正確.png'
import SharkImg113 from '@/assets/3D/113女超人鯊-正確.png'
import SharkImg114 from '@/assets/3D/114紅心皇后鯊-正確.png'
import SharkImg115 from '@/assets/3D/115皮卡丘鯊-正確.png'
import SharkImg116 from '@/assets/3D/116巴斯光年鯊-正確.png'
import SharkImg117 from '@/assets/3D/117喬巴鯊-正確.png'

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination])
// import ClassSlide from '@/components/Playground/FishClassSlide.vue'
// import ActionSlide from '@/components/Playground/FishActionSlide.vue'

export default {
  components: {
    Anchor
    // ClassSlide,
    // ActionSlide
  },
  data() {
    return {
      unityInstance: null,
      aniData: [
        {
          actionIcon: ActionImg1,
          isHide: true,
          title: 'Idle',
          act: 'idle',
          content: 'Chillin’ like a villain'
        },
        {
          actionIcon: ActionImg2,
          isHide: true,
          title: 'Swim',
          act: 'walk',
          content: 'Cruisin’ through the waters of the metaverse'
        },
        {
          actionIcon: ActionImg3,
          isHide: true,
          title: 'Burst',
          act: 'run',
          content: 'Living life in the fast lane'
        },
        {
          actionIcon: ActionImg4,
          isHide: true,
          title: 'Attack Stance',
          // 這個act 沒有動作
          atc: 'attack_idle',
          content: 'Get ready to fight!'
        },
        {
          actionIcon: ActionImg5,
          isHide: true,
          title: 'Shark Bite',
          act: 'attack_01',
          content: 'Take a chunk out of your opponent!'
        },
        {
          actionIcon: ActionImg6,
          isHide: true,
          title: 'Tail Whip',
          act: 'attack_02',
          content: 'Strike fast light lightning'
        },
        {
          actionIcon: ActionImg7,
          isHide: true,
          title: 'Death Roll',
          act: 'attack_03',
          content: 'Show your opponent you mean business with this heavy attack'
        },
        {
          actionIcon: ActionImg8,
          isHide: true,
          title: 'Injury',
          act: 'hurt',
          content: 'Ouch!'
        },
        {
          actionIcon: ActionImg9,
          isHide: true,
          title: 'K.O.',
          act: 'death',
          content: 'You have been defeated! Try again!'
        },
        {
          actionIcon: ActionImg10,
          isHide: true,
          title: 'Spellcast Stance',
          act: 'cast_loop',
          content: 'Target acquired'
        },
        {
          actionIcon: ActionImg11,
          isHide: true,
          title: 'Spellcast ',
          act: 'cast_attack',
          content: 'Shoot a curse or two at your opponent'
        },
        {
          actionIcon: ActionImg12,
          isHide: true,
          title: 'Cast Buff',
          act: 'cast_buff',
          content: 'Cast a buff on yourself to get a boost!'
        },
        {
          actionIcon: ActionImg13,
          isHide: true,
          title: 'Greeting',
          act: 'hallo',
          content: 'Hello there neighbor!'
        },
        {
          actionIcon: ActionImg14,
          isHide: true,
          title: 'Laugh',
          act: 'happy',
          content: 'Laughter is the best medicine '
        },
        {
          actionIcon: ActionImg15,
          isHide: true,
          title: 'Sad',
          act: 'sad',
          content: 'Feeling a little blue? '
        },
        {
          actionIcon: ActionImg16,
          isHide: true,
          title: 'Angry',
          act: 'angry',
          content: 'Grrrrr! You don’t want to see me mad!'
        },
        {
          actionIcon: ActionImg17,
          isHide: true,
          title: 'Dance',
          act: 'dance',
          content: 'Dance like nobody’s watching!'
        }
      ],
      sharkName: [
        {
          img: SharkImg01,
          name: 'shark01'
        },
        {
          img: SharkImg02,
          name: 'shark02'
        },
        {
          img: SharkImg03,
          name: 'shark03'
        },
        {
          img: SharkImg04,
          name: 'shark04'
        },
        {
          img: SharkImg05,
          name: 'shark05'
        },
        {
          img: SharkImg06,
          name: 'shark06'
        },
        {
          img: SharkImg07,
          name: 'shark07'
        },
        {
          img: SharkImg08,
          name: 'shark08'
        },
        {
          img: SharkImg09,
          name: 'shark09'
        },
        {
          img: SharkImg10,
          name: 'shark10'
        },
        {
          img: SharkImg11,
          name: 'shark11'
        },
        {
          img: SharkImg12,
          name: 'shark12'
        },
        {
          img: SharkImg13,
          name: 'shark13'
        },
        // {
        //   img: SharkImg14,
        //   name: 'shark14'
        // },
        {
          img: SharkImg15,
          name: 'shark15'
        },
        {
          img: SharkImg16,
          name: 'shark16'
        },
        {
          img: SharkImg17,
          name: 'shark17'
        },
        {
          img: SharkImg18,
          name: 'shark18'
        },
        {
          img: SharkImg19,
          name: 'shark19'
        },
        {
          img: SharkImg20,
          name: 'shark20'
        },
        {
          img: SharkImg21,
          name: 'shark21'
        },
        {
          img: SharkImg22,
          name: 'shark22'
        },
        {
          img: SharkImg23,
          name: 'shark23'
        },
        {
          img: SharkImg24,
          name: 'shark24'
        },
        {
          img: SharkImg25,
          name: 'shark25'
        },
        {
          img: SharkImg26,
          name: 'shark26'
        },
        {
          img: SharkImg27,
          name: 'shark27'
        },
        {
          img: SharkImg28,
          name: 'shark28'
        },
        {
          img: SharkImg29,
          name: 'shark29'
        },
        {
          img: SharkImg30,
          name: 'shark30'
        },
        {
          img: SharkImg31,
          name: 'shark31'
        },
        {
          img: SharkImg32,
          name: 'shark32'
        },
        {
          img: SharkImg33,
          name: 'shark33'
        },
        {
          img: SharkImg34,
          name: 'shark34'
        },
        {
          img: SharkImg35,
          name: 'shark35'
        },
        // {
        //   img: SharkImg36,
        //   name: 'shark36'
        // },
        {
          img: SharkImg37,
          name: 'shark37'
        },
        // {
        //   img: SharkImg38,
        //   name: 'shark38'
        // },
        {
          img: SharkImg39,
          name: 'shark39'
        },
        {
          img: SharkImg40,
          name: 'shark40'
        },
        {
          img: SharkImg41,
          name: 'shark41'
        },
        {
          img: SharkImg42,
          name: 'shark42'
        },
        {
          img: SharkImg43,
          name: 'shark43'
        },
        {
          img: SharkImg44,
          name: 'shark44'
        },
        {
          img: SharkImg101,
          name: 'shark101'
        },
        {
          img: SharkImg102,
          name: 'shark102'
        },
        {
          img: SharkImg103,
          name: 'shark103'
        },
        {
          img: SharkImg104,
          name: 'shark104'
        },
        {
          img: SharkImg105,
          name: 'shark105'
        },
        {
          img: SharkImg106,
          name: 'shark106'
        },
        {
          img: SharkImg107,
          name: 'shark107'
        },
        {
          img: SharkImg108,
          name: 'shark108'
        },
        {
          img: SharkImg109,
          name: 'shark109'
        },
        {
          img: SharkImg110,
          name: 'shark110'
        },
        {
          img: SharkImg111,
          name: 'shark111'
        },
        {
          img: SharkImg112,
          name: 'shark112'
        },
        {
          img: SharkImg113,
          name: 'shark113'
        },
        {
          img: SharkImg114,
          name: 'shark114'
        },
        {
          img: SharkImg115,
          name: 'shark115'
        },
        {
          img: SharkImg116,
          name: 'shark116'
        },
        {
          img: SharkImg117,
          name: 'shark117'
        }
      ],
      sidebar: [
        {
          name: 'ALL SHARKS',
          dropDownOpen: true,
          dropDown: [
            'shark', 'shark', 'shark', 'shark', 'shark'
          ]
        }
      ]
    }
  },
  methods: {
    playAnim(anim) {
      this.unityInstance.SendMessage('GameManager', 'playAnim', anim)
    },
    LoadSharkBtn(PrefabName) {
      this.unityInstance.SendMessage('GameManager', 'LoadSharkBtn', PrefabName)
    }
  },
  computed: {
    sharkPage() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  mounted() {
    createUnityInstance(
      document.querySelector('#unity-canvas'),
      {
        dataUrl: 'Build/_webgl.data',
        frameworkUrl: 'Build/_webgl.framework.js',
        codeUrl: 'Build/_webgl.wasm',
        streamingAssetsUrl: 'SharkAssetBundles',
        productName: 'Shark',
        productVersion: '1.0'
      },
      progress => {
        this.progress = progress
      }
    ).then(unity => {
      this.unityInstance = unity
      console.log('unity is ready')
    })
    const sharkSwiper = new Swiper('.sharkSwiper', {
      loop: false,
      slidesPerView: 5,
      slideToClickedSlide: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    const actionSwiper = new Swiper('.actionSwiper', {
      direction: 'vertical',
      slidesPerView: 5,
      slideToClickedSlide: true,
      initialSlide: 2,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    return {
      sharkSwiper,
      actionSwiper
    }
  }
}
</script>

<style>
.test_bar{
  background:linear-gradient(transparent, #2EDFDF, transparent );
}

.test_bar2{
  width: 100%;
  background:linear-gradient(0.25turn,transparent, #2EDFDF, transparent );
  position:absolute;
  bottom: 1rem;transform: translate(0,0);
  border-radius: 50%;
  height: 3px;
}
.sharkSwiper .swiper-slide-active, .swiper-slide-duplicate-active {
  transform: scale(1.3);
  /* left: 20px; */
}

.actionSwiper .swiper-slide {
  opacity: 0.4;
  filter: alpha(opacity=100);
  transform: scale(.75)
}

.actionSwiper .swiper-slide:hover {
  @apply lg:scale-125 max-lg:scale-100 lg:right-[-2rem] right-0
  /* transform: scale(1.2);
  right: -2rem; */
}

.actionSwiper .swiper-slide-next {
  opacity: 0.7;
  filter: alpha(opacity=100);
}

.actionSwiper .swiper-slide-prev {
  opacity: 0.7;
  filter: alpha(opacity=100);
}

.actionSwiper .swiper-slide-active, .swiper-slide-duplicate-active {
  @apply lg:scale-125 max-lg:scale-100 lg:right-[-2rem] right-0 opacity-100
}
</style>
