<template>
  <!--
    TODO: 用 VueGL 去做 3D 物件
    TODO: sharkSlide 下方hr 改掉 改成figma 素材
  -->
  <div>
    <!-- bg -->
    <img class="fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/鯊魚網站-PC版/素材/05分圖層.png')]" >

    <!-- Sidebar -->
    <div
      class="lg:mt-1 lg:px-8 lg:w-64
        overflow-y-auto relative top-0
        max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full
      ">
      <Anchor :data="sidebar" :iconShow="true"></Anchor>
    </div>

    <!-- 底下的鯊魚種類 -->
    <div id="sharkSlide" class="absolute lg:w-1/2 max-lg:w-full max-lg:bottom-0 md:bottom-4 md:w-full max-lg:pb-5 lg:bottom-12 lg:left-1/4 max-lg:left-0 ">
      <div class="test_bar2"></div>
      <div class="swiper sharkSwiper">
        <div class="lg:pl-6 md:pl-3 swiper-wrapper">
          <div
            class="swiper-slide -left-4"
            v-for="(item, key) in sharkData" :key="key"
          >
            <button>
              <img :id="item.name" :src="item.sharkImg" class="relative top-1/2 left-1/2 max-lg:h-10 lg:h-[70px] mt-4 mb-2"/>
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
      <div class="test_bar w-1 absolute top-0 right-0 translate-x-1/2 translate-y-0 h-full rounded-[50%] test_bar"></div>
      <div class="h-full swiper actionSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide  max-lg:hover:right-0 lg:hover:-right-8 hover:scale-125 scale-1 flex lg:-right-16" v-for="(item, key) in sharkData" :key="key"
          >
            <div class="max-lg:hidden bg-black bg-opacity-30 rounded-l-2xl relative lg:w-full lg:top-2 lg:h-32 lg:-right-5 text-white z-0" :class="[item.isHide ? 'hidden' : '']">
              <div class="font-bold pt-4 pl-4 text-lg">{{ item.title }}</div>
              <div class="pl-4 font-thin">{{ item.content }}</div>
            </div>
            <button class="absolute float-right lg:right-20"
              @mouseover="item.isHide = false"
              @mouseleave="item.isHide = true">
              <img :id="item.name" :src="item.actionIcon" class="top-1/2 left-1/2 rounded-full lg:h-[70px] lg:mt-9"/>
            </button>
          </div>
        </div>
        <button class="swiper-button-prev text-white max-lg:text-lg lg:text-[50px] absolute right-6 max-lg:top-0 lg:-top-4 z-10">^</button>
        <button class="swiper-button-next text-white max-lg:text-lg lg:text-[50px] absolute right-6 max-lg:bottom-0 lg:-bottom-4 z-10">v</button>
      </div>
    </div>
    <!-- <ClassSlide></ClassSlide>
    <ActionSlide></ActionSlide> -->
</div>
</template>

<script>
import Anchor from '@/components/AnchorSidebar.vue'
import SharkImg from '@/assets/鯊魚網站-PC版/test.png'
import SharkImg1 from '@/assets/網站-PC版/icon/1呼吸.png'
import SharkImg2 from '@/assets/網站-PC版/icon/2慢游.png'
import SharkImg3 from '@/assets/網站-PC版/icon/3疾游.png'
import SharkImg4 from '@/assets/網站-PC版/icon/4戰鬥姿勢.png'
import SharkImg5 from '@/assets/網站-PC版/icon/5攻擊-1.png'
import SharkImg6 from '@/assets/網站-PC版/icon/6攻擊-2.png'
import SharkImg7 from '@/assets/網站-PC版/icon/7攻擊-3.png'
import SharkImg8 from '@/assets/網站-PC版/icon/8受傷.png'
import SharkImg9 from '@/assets/網站-PC版/icon/9死亡.png'
import SharkImg10 from '@/assets/網站-PC版/icon/10施法.png'
import SharkImg11 from '@/assets/網站-PC版/icon/11遠程射擊.png'
import SharkImg12 from '@/assets/網站-PC版/icon/12自我施法.png'
import SharkImg13 from '@/assets/網站-PC版/icon/13打招呼.png'
import SharkImg14 from '@/assets/網站-PC版/icon/14高興.png'
import SharkImg15 from '@/assets/網站-PC版/icon/15難過.png'
import SharkImg16 from '@/assets/網站-PC版/icon/16生氣.png'
import SharkImg17 from '@/assets/網站-PC版/icon/17跳舞.png'
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
      sharkData: [
        {
          name: 'shark1',
          sharkImg: SharkImg,
          actionIcon: SharkImg1,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Idle',
          content: 'Chillin’ like a villain'
        },
        {
          name: 'shark2',
          sharkImg: SharkImg,
          actionIcon: SharkImg2,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Swim',
          content: 'Cruisin’ through the waters of the metaverse'
        },
        {
          name: 'shark3',
          sharkImg: SharkImg,
          actionIcon: SharkImg3,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Burst',
          content: 'Living life in the fast lane'
        },
        {
          name: 'shark4',
          sharkImg: SharkImg,
          actionIcon: SharkImg4,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Attack Stance',
          content: 'Get ready to fight!'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg5,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Shark Bite',
          content: 'Take a chunk out of your opponent!'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg6,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Tail Whip',
          content: 'Strike fast light lightning'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg7,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Death Roll',
          content: 'Show your opponent you mean business with this heavy attack'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg8,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Injury',
          content: 'Ouch!'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg9,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'K.O.',
          content: 'You have been defeated! Try again!t'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg10,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Spellcast Stance',
          content: 'Target acquired'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg11,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Spellcast ',
          content: 'Shoot a curse or two at your opponent'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg12,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Cast Buff',
          content: 'Cast a buff on yourself to get a boost!'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg13,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Greeting',
          content: 'Hello there neighbor!'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg14,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Laugh',
          content: 'Laughter is the best medicine '
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg15,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Sad',
          content: 'Feeling a little blue? '
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg16,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Angry',
          content: 'Grrrrr! You don’t want to see me mad!'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg17,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'Dance',
          content: 'Dance like nobody’s watching!'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg6,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'shark5 title',
          content: 'shark5 content'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg7,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'shark5 title',
          content: 'shark5 content'
        },
        {
          name: 'shark5',
          sharkImg: SharkImg,
          actionIcon: SharkImg8,
          action: ['action1', 'action2'],
          isHide: true,
          title: 'shark5 title',
          content: 'shark5 content'
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

  },
  mounted() {
    const sharkSwiper = new Swiper('.sharkSwiper', {
      loop: true,
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
