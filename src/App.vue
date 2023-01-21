<template>
  <!--
    TODO: 修復 navbar 在不同的螢幕尺寸會有不對稱的問題
    TODO: 修復字體的問題
    TODO: 新增底下的 Read Full Story 的按鈕(做一個新的 views 來放置)
    TODO: 調整字體的大小
    TODO: 拿掉底下的 CSS
  -->
  <div>
    <!-- Navbar -->
    <nav class="border-gray-200 px-2 sm:px-4 rounded lg:pt-4 pt-2 z-10">
      <div class="flex flex-1 flex-wrap items-center justify-between lg:mx-auto">
        <!-- Left Image and title -->
        <router-link to="/" class="flex items-center lg:ml-3 z-20">
          <span>
            <img
              :src="lightningURL"
              @mouseover="lightningURL = WEB_SITE_LOGO_SHINE" @mouseleave="lightningURL = WEB_SITE_IMG"
              class="w-16"
              alt=""
            />
          </span>
          <!-- <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ SITE_CONFIG.website_name }}</span> -->
        </router-link>
        <!-- navbar threeLines open nav -->
        <button
          @click="setNavbarOpen(true)"
          data-collapse-toggle="navbar-default"
          type="button"
          class="z-20 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-0 dark:text-gray-400 dark:hover:bg-gray-700  dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-10 h-10 text-black">
            <line x1="0" x2="40" y1="13" y2="13" class="stroke-white stroke-2"/>
            <line x1="10" x2="40" y1="26" y2="26" class="stroke-white stroke-2"/>
            <line x1="0" x2="40" y1="39" y2="39" class="stroke-white stroke-2"/>
          </svg>
        </button>

        <!-- Right Button with data-->
        <div class="w-full lg:w-auto lg:block z-30" id="navbar-default"
          :class="[!navbarOpen && 'hidden' , 'block rounded shadow-lg']">
          <ul
            class="flex flex-col p-3 mt-0 pl-0 pr-0 absolute top-0 right-0 w-80
            lg:mt-4 lg:flex-row lg:space-x-2 lg:text-sm lg:font-medium lg:border-0
            lg:absolute lg:right-10 lg:top-6 lg:w-fit lg:h-fit lg:bg-transparent
            max-lg:pt-[2vh] max-lg:item-end
            h-full bg-[rgba(184,208,218,0.95)]
            dark:border-gray-700
            ">

            <!-- 把按鈕全部丟進來 -->

            <!-- offset -->
            <!-- close btn for navbar -->
            <button
              @click="setNavbarOpen(false)"
              type="button"
              class="z-40 p-2 lg:hidden flex justify-end">
              <span class="sr-only">Close main menu</span>
              <font-awesome-icon icon="fa-solid fa-x" class="w-8 h-8 text-black p-2"/>
            </button>
            <li v-for="(item, key) in data" :key="key" class="
            lg:relative lg:top-0
            ">

              <!-- 如果位置不含 http 也就是網址 -->
              <div v-if="!item.path.includes('http')">
                <!-- 購物車 -->
                <div v-if="item.path == ''">
                  <button
                    type="button"
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdownShoppingCar"
                    class="block transition duration-100 ease-in-out w-full
                      px-2 py-1 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 border border-transparent shadow-sm rounded
                      hover:bg-gray-600 bg-[#90bdd6] active:bg-[#90bdd6] lg:bg-gray-800 lg:hover:bg-gray-600 lg:active:bg-gray-800 lg:bg-opacity-60 lg:hover:bg-opacity-40"
                    @click="setShoppingCarOpen(item)">
                    <div v-if="item.name">
                      {{ item.name }}
                    </div>
                    <div v-else-if="item.icon[0]" class="lg:w-fit text-black h-5 lg:text-white flex justify-between max-md:w-full items-center">
                      <span class="lg:hidden">BUY</span>
                      <font-awesome-icon :icon="item.icon" class="max-lg:mr-1.5"></font-awesome-icon>
                    </div>
                    <div v-else>
                      NO NAME
                    </div>
                  </button>
                  <!-- dropShoppingCar -->
                  <div id="dropdownShoppingCar" :class="[item.shoppingCar ? 'block rounded shadow-lg' : 'hidden']"
                    class="mt-2 md:absolute md:w-full lg:border-2 lg:border-cyan-800 lg:rounded-lg lg:bg-opacity-70 lg:bg-black w-full lg:w-24 divide-y divide-gray-100 shadow max-lg:mt-0 max-lg:bg-[#6dbddd80] max-lg:px-8 right-0"
                  >
                    <ul
                      class="py-1 w-fit text-sm text-gray-700 dark:text-gray-200 pl-1 lg:text-right"
                      aria-labelledby="dropdownDefault">
                      <li
                        v-for="(dropDownItem, key) in item.dropDown"
                        :key="key"
                        class="pt-1 pb-1"
                      >
                        <a :href="dropDownItem.path" class="text-white max-lg:text-black">{{ dropDownItem.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 不是網址 -->
                <div v-else>
                  <router-link :to="item.path" class="nav-link">
                    <button
                      class="block px-2 py-1 mb-4 w-full transition duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-black lg:text-white border border-transparent shadow-sm rounded hover:bg-gray-600 bg-[#90bdd6] active:bg-[#90bdd6] lg:bg-gray-800 lg:hover:bg-gray-800 lg:active:bg-gray-800 lg:bg-opacity-60 lg:hover:bg-opacity-40"
                    >
                      <div class="w-fit" v-if="item.name">
                        {{ item.name }}
                      </div>
                      <div v-else-if="item.icon[0]" >
                        <font-awesome-icon :icon="item.icon"></font-awesome-icon>
                      </div>
                      <div v-else>
                        NO NAME
                      </div>
                    </button>
                  </router-link>
                </div>
              </div>
              <!-- 如果位置含 http 也就是網址 -->
              <div v-else>
                <a :href="item.path" target="_blank">
                  <button
                    class="block w-full px-2 py-1 mb-4 transition duration-100 ease-in-out first-letter:focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-white hover:bg-gray-600 border border-transparent shadow-sm rounded
                    bg-[#90bdd6] active:bg-[#90bdd6] lg:bg-gray-800 lg:hover:bg-gray-800 lg:active:bg-gray-800 lg:bg-opacity-60 lg:hover:bg-opacity-40
                    "
                    @click="setNavbarOpen()">
                    <div v-if="item.name" >
                      {{ item.name }}
                    </div>

                    <div v-else-if="item.image" class="w-4 h-5">
                      <div class="lg:hidden inline-block text-black">{{ item.icon[1].toUpperCase() }}</div>
                      <img :src="item.image" class="lg:absolute w-fit lg:top-1 lg:h-5 lg:right-0.5 lg:drop-shadow-[0px_0_rgba(0,0,0,0)] lg:left-[1.5px] right-[-302px] h-6 drop-shadow-[-306px_-25px_rgba(0,0,0,1)] fixed" alt="" />
                    </div>

                    <div v-else-if="item.icon[0]" class="w-fit text-black lg:text-white">
                      <div class="lg:hidden inline-block ">{{ item.icon[1].toUpperCase() }}</div>
                      <font-awesome-icon :icon="item.icon" class="lg:right-0 lg:relative absolute right-4 top-[20%]"></font-awesome-icon>
                    </div>

                    <div v-else>
                      NO NAME
                    </div>

                  </button>
                </a>
              </div>
            </li>
            <div class="absolute bottom-6 pl-4 font-bold text-sm lg:hidden">A collection of 5000 sharks gathered to navigate the world of the Metanomics through</div>
          </ul>
          <!-- <div class="lg:hidden">
            description here
            A collection of 5000 sharks gathered to navigate the Psiletanomics through meaningful social impact activities
          </div> -->
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CONFIG from '@/assets/website_cfg.json'
import SITE_IMG from '@/assets/鯊魚網站-PC版/素材/閃電(GIMP).png'
import SHINE_IMG from '@/assets/閃電ICON發光1.png'
import IG from '@/assets/PNG素材/instagram.png'
import DC from '@/assets/PNG素材/discord.png'
import TW from '@/assets/PNG素材/twitter.png'

export default {
  data() {
    return {
      SITE_CONFIG: CONFIG,
      WEB_SITE_IMG: SITE_IMG,
      WEB_SITE_LOGO_SHINE: SHINE_IMG,
      navbarOpen: false,
      lightningIcon: false,
      lightningURL: SITE_IMG,
      data: [
        {
          name: 'COLLECTIONS',
          path: '/gallery'
        },
        {
          name: 'PLAYGROUND',
          path: '/playground'
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
          path: 'https://discord.gg/mymetanomics',
          icon: ['fab', 'discord'],
          iconUrl: 'src/assets/PNG素材/discord.png',
          image: DC
        },
        {
          path: 'https://twitter.com/mymetanomics',
          icon: ['fab', 'twitter'],
          iconUrl: 'src/assets/PNG素材/twitter.png',
          image: TW

        },
        {
          path: 'https://www.instagram.com/mymetanomics/',
          icon: ['fab', 'instagram'],
          iconUrl: 'src/assets/PNG素材/instagram.png',
          image: IG
        },
        {
          path: '',
          icon: ['fas', 'cart-shopping'],
          shoppingCar: false,
          dropDown: [
            {
              name: 'OPENSEA',
              path: '/'
            },
            {
              name: 'LOOKSRARE',
              path: '/'
            },
            {
              name: 'X2Y2',
              path: '/'
            },
            {
              name: 'BLUR',
              path: '/'
            }
          ]
        }
      ]
    }
  },
  methods: {
    setNavbarOpen(open = null) {
      if (open == null) {
        this.navbarOpen = !this.navbarOpen
        return
      }
      this.navbarOpen = open
    },
    setShoppingCarOpen(item) {
      item.shoppingCar = !item.shoppingCar
      this.lightningIcon = item.shoppingCar
    }
  }
}
</script>

<style>
.router-link-active button {
  background-color: rgba(109, 189, 221, 0.5);
  /* border-bottom: 1px #FFF solid; */
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

@media (min-width: 1024px) {
  .router-link-active button {
    background-color: rgba(255, 255, 255, 15%);
    /* border-bottom: 1px #FFF solid; */
    text-decoration-line: underline;
    text-underline-offset: 4px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
