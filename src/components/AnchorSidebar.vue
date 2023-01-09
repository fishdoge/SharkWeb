<template>
  <aside
    :class="[sidebarOpen ? 'max-lg:h-[100vh] max-lg:w-[100vw] max-lg:fixed top-0 max-lg:left-0 max-lg:bg-slate-400 max-lg:pt-0 z-30' : '' , 'lg:w-full']"
    aria-label="Sidebar">

    <!-- 三條線的東西(有些頁面才有) -->
    <button :class="[sidebarOpen ? 'max-lg:absolute max-lg:right-0 max-lg:p-4' : '','p-2 lg:py-0 lg:pb-[10%]', classShow('lg', iconShow)]" @click="setSideBar()" data-dropdown-toggle="dropdownId">
      <svg class="lg:block max-lg:hidden" width="32" height="32">
        <line x1="2" x2="32" y1="10" y2="10" style="stroke:rgb(255,255,255);stroke-width:2" />
        <line x1="2" x2="25" y1="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2" />
        <line x1="2" x2="32" y1="30" y2="30" style="stroke:rgb(255,255,255);stroke-width:2" />
      </svg>
      <!-- <font-awesome-icon  icon="fa-solid fa-filter" /> -->
      <font-awesome-icon :icon="sidebarOpen ? ['fas','x'] : ['fas','filter']" class="lg:hidden max-lg:block text-white text-2xl"/>
    </button>

    <div data-dropdown-toggle="dropdownId" :class="[sidebarOpen ? 'max-lg:mt-16' : `max-lg:hidden ${iconShow ? 'lg:hidden' : 'block'}` , '']">
      <h1 :class="['text-2xl font-bold text-white p-1 pt-5', classShow('lg', titleShow)]">FILTER</h1>
      <hr>
      <div class=" bg-gray-50 rounded mb-10 bg-transparent " :class="[sidebarOpen ? 'bg-gray-50 rounded mb-10' : '']">
        <ul class="space-y-2">
          <li>
            <button type="submit"
              class="p-2.5 ml-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 pl-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <hr />

            <!-- 把條目送進來 -->
            <div class="p-1" v-for="(item, key) in data" :key="key">
              <button
                id="dropdownCheckboxButton"
                data-dropdown-toggle="dropdownDefaultCheckbox"
                class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center flex items-center w-full justify-between"
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
                  <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownCheckboxButton">
                    <li v-for="(check_box_item, key) in item.dropDown" :key="key">
                      <div class="flex items-center">
                        <input v-if="item.isCheckbox" :id="item.name + `-checkbox-item-1` + key" type="checkbox" value="" class="w-4 h-4 rounded border-white focus:ring-blue-500 focus:ring-2 bg-transparent">
                        <button for="checkbox-item-1" class="ml-2 text-sm font-medium text-white dark:text-gray-300">{{check_box_item}}</button>
                      </div>
                    </li>
                  </ul>
                </div>
                <hr />
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
    setSideBar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    classShow(device, isShow) {
      return `${device}:${isShow ? 'block' : 'hidden'}`
    }
  }
}
</script>
