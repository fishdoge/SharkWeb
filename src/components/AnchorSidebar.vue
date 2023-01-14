<template>
  <aside class="2xl:w-72 xl:w-56 lg:w-44" aria-label="Sidebar">

    <!-- 手機板filter 和 電腦版的收和按鈕 -->
    <button :class="['max-lg:px-3 pt-4 lg:pb-[10%] z-20', classShow('lg', iconShow)]" @click="setSideBar()" data-dropdown-toggle="dropdownId">
      <svg class="lg:block max-lg:hidden w-8 h-8">
        <line x1="2" x2="32" y1="10" y2="10" class="stroke-white stroke-2"/>
        <line x1="2" x2="25" y1="20" y2="20" class="stroke-white stroke-2"/>
        <line x1="2" x2="32" y1="30" y2="30" class="stroke-white stroke-2"/>
      </svg>
      <font-awesome-icon icon="fa-solid fa-filter" class="lg:hidden max-lg:block text-white w-7 h-7"/>
    </button>

    <!-- 手機板打開後的xx -->
    <button class="px-2 lg:pb-[10%] fixed right-0 p-4 top-0 z-40" @click="setSideBar(false)">
      <font-awesome-icon icon="fa-solid fa-x" :class="[sidebarOpen ? 'block' : 'hidden','lg:hidden text-white w-9 h-8']"/>
    </button>

    <div data-dropdown-toggle="dropdownId" :class="[sidebarOpen ? 'max-lg:h-[100vh] max-lg:w-[100vw] max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:backdrop-blur-md max-lg:bg-white/50 max-lg:z-30 max-lg:pt-32' : `max-lg:hidden ${iconShow ? 'lg:hidden' : 'block'}` , '']">
      <h1 :class="['max-lg:text-4xl text-2xl font-bold lg:text-white max-lg:text-black max-lg:font-semibold max-lg:pl-4 max-lg:py-5', classShow('lg', titleShow)]">FILTER</h1>
      <hr class="max-lg:border-black">
      <div class=" bg-gray-50 rounded mb-10 bg-transparent " :class="[sidebarOpen ? 'bg-gray-50 rounded mb-10' : '']">
        <ul class="space-y-2">
          <li>
            <button type="submit"
              class="py-5 lg:py-4 max-lg:ml-4 text-sm font-medium lg:text-white max-lg:text-black max-lg:font-semibold rounded-lg pl-0">
              <svg class="w-9 h-7 max-lg:w-11 max-lg:h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <hr class="max-lg:border-black"/>

            <!-- 把條目送進來 -->
            <div class="" v-for="(item, key) in data" :key="key">
              <button
                id="dropdownCheckboxButton"
                data-dropdown-toggle="dropdownDefaultCheckbox"
                class="lg:text-white max-lg:text-black max-lg:font-semibold text-center flex items-center w-full justify-between font-medium rounded-lg
                focus:text-sky-400
                  max-lg:text-3xl max-lg:py-6 max-lg:pl-4 max-lg:pr-6
                  lg:py-6 lg:text-2xl
                "
                type="button"
                @click="setDropDownOpen(item)"
              >
                <div v-if="item.name">
                  {{ item.name }}
                </div>
                <div v-else>
                  NO NAME
                </div>

                <font-awesome-icon :icon="item.dropDownOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"
                  :class="[item.dropDownOpen ? '' : '' , 'ml-2 w-4 h-4']" />
              </button>

              <!-- Dropdown menu -->
              <div>
                <div id="dropdownDefaultCheckbox" :class="[item.dropDownOpen ? 'block rounded ' : 'hidden']"
                  class="z-10 w-48 rounded divide-y bg-transparent">
                  <ul class="pb-3 pl-4 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownCheckboxButton">
                    <li v-for="(check_box_item, key) in item.dropDown" :key="key">
                      <div class="flex items-center">
                        <input v-if="item.isCheckbox" :id="item.name + `-checkbox-item-1` + key" type="checkbox" value="" class="w-4 h-4 rounded border-white focus:ring-blue-500 focus:ring-2 bg-transparent">
                        <button for="checkbox-item-1" class="ml-2 text-sm font-medium lg:text-white max-lg:text-black max-lg:font-semibold dark:text-gray-300">{{check_box_item}}</button>
                      </div>
                    </li>
                  </ul>
                </div>
                <hr class="max-lg:border-black"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>

</template>

<script>

// import AnchorIcon from '@/assets/鯊魚網站-PC版/logo.svg'
import AnchorIcon from '@/assets/logo.svg'

export default {
  name: 'AnchorSidebar',
  props: {
    data: Array,
    iconShow: {
      type: Boolean,
      default: false
    },
    titleShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sidebarOpen: false,
      anchor_icon: AnchorIcon
    }
  },
  methods: {
    setDropDownOpen(item) {
      item.dropDownOpen = !item.dropDownOpen
    },
    setSideBar(open = null) {
      if (open == null) {
        this.sidebarOpen = !this.sidebarOpen
        return
      }
      this.sidebarOpen = open
    },
    classShow(device, isShow) {
      return `${device}:${isShow ? 'block' : 'hidden'}`
    }
  }
}
</script>
