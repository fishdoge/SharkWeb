<template>
  <!--
    TODO: 收合問題 除錯
   -->
  <div>
    <aside class="overflow-y-auto px-8 w-64 absolute z-[10] top-0 pt-[3.625rem;]" aria-label="Sidebar">
      <button class="pb-[10%]" @click="setSidebarOpen()" data-dropdown-toggle="dropdownId">
        <svg width="32" height="32">
          <line x1="2" x2="32" y1="10" y2="10" style="stroke:rgb(255,255,255);stroke-width:2" />
          <line x1="2" x2="25" y1="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2" />
          <line x1="2" x2="32" y1="30" y2="30" style="stroke:rgb(255,255,255);stroke-width:2" />
        </svg>
      </button>
      <div data-dropdown-toggle="dropdownId">
        <hr :class="[sidebarOpen ? '' : 'hidden']">
        <div class=" bg-gray-50 rounded mb-10" style="background-color: rgba(0 0 0 / 0%);" :class="[sidebarOpen ? 'bg-gray-50 rounded mb-10' : 'hidden']">
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
                <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox"
                  class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center pl-0"
                  type="button" @click="setNavbarOpen(item)" style="width: 100%">
                  <div v-if="item.name">
                    {{ item.name }}
                  </div>
                  <div v-else-if="item.icon[0]">
                    <font-awesome-icon :icon="item.icon"></font-awesome-icon>
                  </div>
                  <div v-else>
                    NO NAME
                  </div>
                <!-- <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="position: absolute; left: 11.5rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> -->
                  <font-awesome-icon icon="fa-solid fa-minus"
                    :class="[item.navbarOpen ? 'ml-2 w-4 h-4 absolute left-[11.5rem]' : 'hidden']" />
                  <font-awesome-icon icon="fa-solid fa-plus"
                    :class="[item.navbarOpen ? 'hidden' : 'ml-2 w-4 h-4 absolute left-[11.5rem]']" />
                </button>
                <!-- Dropdown menu -->
                <div>
                  <div id="dropdownDefaultCheckbox" :class="[item.navbarOpen ? 'block rounded ' : 'hidden']"
                    class="z-10 w-48 rounded divide-y" style="background-color: rgba(0 0 0 / 0%);">
                    <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownCheckboxButton">
                      <li v-for="(check_box_item, key) in item.dropDown" :key="key">
                        <div class="flex items-center">
                          <label for="checkbox-item-1" class="ml-2 text-sm font-medium text-white dark:text-gray-300">{{
                              check_box_item
                          }}</label>
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
  </div>
</template>

<script>
// import AnchorIcon from '@/assets/鯊魚網站-PC版/logo.svg'
import AnchorIcon from '@/assets/logo.svg'

export default {
  name: 'AnchorSidebar',
  props: {
    in_data: Array
  },
  data() {
    return {
      sidebarOpen: false,
      anchor_icon: AnchorIcon,
      data: this.in_data
    }
  },
  methods: {
    setNavbarOpen(item) {
      item.navbarOpen = !item.navbarOpen
    },
    setSidebarOpen() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script>

<style>
h1 {
  font-size: 200%;
  font-weight: 900;
  /* margin-bottom: 20px; */
  color: white;
}
</style>
