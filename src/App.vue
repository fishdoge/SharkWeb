<template>
  <!--
    TODO: 修復 navbar 在不同的螢幕尺寸會有不對稱的問題
    TODO: 修復字體的問題
    TODO: 新增底下的 Read Full Story 的按鈕(做一個新的 views 來放置)
    TODO: 調整字體的大小
    TODO: 將最後一個購物車更改為下拉式選單(見 /src/assets/鯊魚網站-PC版/00主頁面-購物車.jpg)
  -->
  <div>
    <!-- Navbar -->
    <nav class="border-gray-200 px-2 sm:px-4 rounded lg:pb-[3.625rem] pt-[2vh] z-[100]">
      <div class="container flex flex-wrap items-center justify-between lg:mx-auto">
        <!-- Left Image and title -->
        <router-link to="/" class="flex items-center">
          <span style="position: absolute; left: 2%; top: 3%;">
            <img src="@/assets/鯊魚網站-PC版/素材/none.png" class="w-[40px] h-[50px] mr-3 logo bg-[url('@/assets/鯊魚網站-PC版/素材/閃電(GIMP).png')] hover:bg-[url('@/assets/鯊魚網站-PC版/素材/閃電(GIMP)shine.png')]"  alt="" />
          </span>
          <!-- <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ SITE_CONFIG.website_name }}</span> -->
        </router-link>
        <button @click="setNavbarOpen" data-collapse-toggle="navbar-default" type="button"
          class="
          items-center p-2 ml-3
          text-sm text-gray-500 rounded-lg
          z-[100] lg:hidden hover:bg-gray-100
          focus:outline-none focus:ring-2
          focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>

        <!-- Right Button with data-->
        <div class="w-full lg:w-auto lg:block" id="navbar-default"
          :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']">
          <ul
            class="
            flex flex-col p-3
            mt-0 lg:mt-4 pl-0 pr-0
            absolute top-[0] right-0 lg:absolute lg:right-[4rem] lg:top-[3%]
            w-[80%] lg:w-[fit-content]
            h-[100vh] lg:h-[fit-content]
            z-[10]
            bg-[rgba(184,208,218,0.95)] lg:bg-[rgba(0,0,0,0)]
            dark:border-gray-700
            lg:flex-row lg:space-x-2 lg:text-sm lg:font-medium lg:border-0
            lg:flex-row lg:space-x-2 lg:text-sm lg:font-medium lg:border-0
          ">

            <!-- 把按鈕全部丟進來 -->

            <!-- offset -->
            <li v-for="(item, key) in data" :key="key" class="
              relative top-[2.65rem] lg:top-0
            ">

              <!-- 如果位置不含 http 也就是網址 -->
              <div v-if="!item.path.includes('http')">
                <div v-if="item.path == ''" class="nav-link">
                  <button type="button" id="dropdownDefault" data-dropdown-toggle="dropdownShoppingCar"
                    class="
                    block
                    transition duration-100 ease-in-out
                    w-[100%]
                    px-2 py-1
                    disabled:cursor-not-allowed
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50
                    border border-transparent shadow-sm rounded
                    hover:bg-gray-600"
                    @click="setShoppingCarOpen(item)">
                    <div v-if="item.name">
                      {{ item.name }}
                    </div>
                    <div v-else-if="item.icon[0]" class="w-[fit-content] text-black lg:text-white">
                      <font-awesome-icon :icon="item.icon"></font-awesome-icon>
                    </div>
                    <div v-else>
                      NO NAME
                    </div>
                  </button>
                  <!-- dropShoppingCar -->
                  <div id="dropdownShoppingCar" :class="[item.shoppingCar ? 'block rounded shadow-lg' : 'hidden']"
                    class="
                      shopping-car
                      border-2 border-cyan-800 rounded-lg
                      z-10
                      bg-black
                      w-[100%]  lg:w-[280%]
                      divide-y divide-gray-100
                      shadow
                      ">
                      <ul class="
                      py-1 w-[fit-content]
                      text-sm text-gray-700
                      dark:text-gray-200"
                      aria-labelledby="dropdownDefault"
                      style="padding-left: 5px;">
                      <li v-for="(dropDownItem, key) in item.dropDown" :key="key"
                        style="padding-top: 5px; padding-bottom: 5px;">
                        <a :href="dropDownItem.path" class="text-white">{{ dropDownItem.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-else class="">
                  <router-link :to="item.path" class="nav-link">
                    <button
                      class="
                        block
                        px-2 py-1
                        mb-4
                        w-[100%]
                        transition duration-100 ease-in-out
                        disabled:opacity-50 disabled:cursor-not-allowed
                        text-black lg:text-white
                        border border-transparent shadow-sm rounded
                        hover:bg-gray-600 "
                      >
                      <div class="w-[fit-content]" v-if="item.name">
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
                <a :href="item.path" target="_blank" class="nav-link">
                  <button
                    class="
                      block
                      w-[100%]
                      px-2 py-1
                      mb-4
                      transition duration-100 ease-in-out
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50
                      disabled:opacity-50 disabled:cursor-not-allowed
                      text-white
                      hover:bg-gray-600
                      border border-transparent shadow-sm rounded
                    "
                    @click="setNavbarOpen(item)">
                    <div v-if="item.name" >
                      {{ item.name }}
                    </div>
                    <div v-else-if="item.icon[0]" class="w-[fit-content] text-black lg:text-white">
                      <font-awesome-icon :icon="item.icon" class=""></font-awesome-icon>
                    </div>
                    <div v-else>
                      NO NAME
                    </div>
                  </button>
                </a>
              </div>
              <!-- <a href="#" class="text-white y-500 border border-transparent shadow-sm rounded hover:bg-blue-600" aria-current="page">Home</a> -->
            </li>

            <!-- <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>

    <router-view ></router-view>

    <!-- transform -->
    <!-- <router-view v-slot="{Component}" class="z-[1]">
      <transition name="fade">
        <component :is="Component"/>
      </transition>
    </router-view> -->
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CONFIG from '@/assets/website_cfg.json'
import SITE_IMG from '@/assets/鯊魚網站-PC版/素材/閃電(GIMP).png'
import SHINE_IMG from '@/assets/鯊魚網站-PC版/素材/閃電(GIMP)shine.png'

export default {
  data() {
    return {
      SITE_CONFIG: CONFIG,
      WEB_SITE_IMG: SITE_IMG,
      WEB_SITE_LOGO_SHINE: SHINE_IMG,
      navbarOpen: false,
      lightningIcon: false,
      data: [
        {
          name: 'NOW MINTING',
          path: '/'
        },
        {
          name: 'GALLERY',
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
          name: 'Team',
          path: '/team'
        },
        {
          path: 'https://google.com',
          icon: ['fab', 'discord']
        },
        {
          path: 'https://google.com',
          icon: ['fab', 'twitter']
        },
        {
          path: 'https://google.com',
          icon: ['fab', 'instagram']
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
    setNavbarOpen() {
      this.navbarOpen = !this.navbarOpen
    },
    setShoppingCarOpen(item) {
      item.shoppingCar = !item.shoppingCar
      this.lightningIcon = item.shoppingCar
    }
  }
}
</script>

<style>
body {
  height: 100%;
  padding: 0px;
  margin: 0%;
}

.bg-img {
  position: absolute;
  top: 0px;
  z-index: -999;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50%;
  background-size: cover;
}

.nav-link button {
  background-color: rgba(109, 189, 221, 0.5);
}

.nav-link:hover button {
  background-color: rgba(109, 189, 221, 0.5);
}

.nav-link:active button {
  background-color: rgba(109, 189, 221, 0.5);
}

.router-link-active button {
  background-color: rgba(109, 189, 221, 0.5);
  /* border-bottom: 1px #FFF solid; */
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

@media (min-width: 1024px) {
  .nav-link button {
  background-color: rgb(0 0 0 / 25%);
}

.nav-link:hover button {
  background-color: rgba(255, 255, 255, 15%);
}

.nav-link:active button {
  background-color: rgba(255, 255, 255, 15%);
}

.router-link-active button {
  background-color: rgba(255, 255, 255, 15%);
  /* border-bottom: 1px #FFF solid; */
  text-decoration-line: underline;
  text-underline-offset: 4px;
}
}

.fade-enter-from,
.fade-leave-to {
  z-index: 1;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.shopping-car {
  width: 5.8rem;
  position: fixed;
  margin-top: 10px;
  box-shadow: 0 0 5px 2px;
}
@media screen and (max-width: 768px) {
  .shopping-car {
    width: 100%;
    position: absolute;
  }
}
</style>
