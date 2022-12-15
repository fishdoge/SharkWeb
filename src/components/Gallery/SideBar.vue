<template>
  <!--
    TODO: rwd icon替換
    TODO: 收合ICON替換
  -->
  <div>
    <button class="text-2xl flex justify-end w-full text-white pr-4 lg:hidden block">
      <!-- This is Sidebar icon by sm screen -->
      <font-awesome-icon :icon="['fas', 'filter']"/>
    </button>
    <aside class="hidden lg:block overflow-y-auto px-8 w-64" aria-label="Sidebar">
      <h1>FILTER</h1>
      <hr>
      <div class=" bg-gray-50 rounded" style="background-color: rgba(0 0 0 / 0%);">
          <ul class="space-y-2">
            <li>
              <button type="submit" class="py-5 ml-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span class="sr-only">Search</span>
              </button>
              <hr>

              <!-- 把條目送進來 -->
              <div v-for="(item, key) in data" :key="key">
                <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-5 text-center inline-flex items-center" type="button" @click="setNavbarOpen(item)" style="width: 100%">
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
                <font-awesome-icon icon="fa-solid fa-minus" :class="[item.navbarOpen ? 'ml-2 w-4 h-4 absolute left-[11.5rem]' : 'hidden']"/>
                <font-awesome-icon icon="fa-solid fa-plus" :class="[item.navbarOpen ? 'hidden' : 'ml-2 w-4 h-4 absolute left-[11.5rem]']"/>
              </button>
                <!-- Dropdown menu -->
                <div id="dropdownDefaultCheckbox" class="z-10 w-48 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" :class="[item.navbarOpen ? 'block rounded shadow-lg' : 'hidden']" style="background-color: rgba(0 0 0 / 0%);">
                    <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                      <!-- 條目中的check box -->
                      <li v-for="(check_box_item, key) in item.dropDown" :key="key">
                        <div class="flex items-center">
                          <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 rounded border-white focus:ring-blue-500 focus:ring-2" style="background-color: rgba(0 0 0 / 0%);">
                          <label for="checkbox-item-1" class="ml-2 text-sm font-medium text-white dark:text-gray-300">{{check_box_item}}</label>
                        </div>
                      </li>
                    </ul>
                </div>
                <hr>
              </div>
            </li>
          </ul>
      </div>
    </aside>
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  data() {
    return {
      data: [
        {
          name: 'SHARKTANK',
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
          name: 'ANGKOR ART',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'ARTEL',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'SEA GAMES',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'POWER NODES',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        },
        {
          name: 'AGRICULTURE NFT',
          navbarOpen: false,
          dropDown: [
            'sharktank'
          ]
        }
      ]
    }
  },
  methods: {
    setNavbarOpen(item) {
      this.data.forEach((element) => {
        if (element !== item) {
          element.navbarOpen = false
        } else {
          item.navbarOpen = !item.navbarOpen
        }
      })
    }
  }
}
</script>

<style>
h1 {
  font-size: 200%;
  /* font-weight: 900; */
  /* margin-bottom: 20px; */
  color: white;
}
</style>
