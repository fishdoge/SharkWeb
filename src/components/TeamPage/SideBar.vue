<template>
  <div>
    <!-- This is Sidebar -->
    <button class="text-2xl flex justify-end w-full text-white pr-4 lg:hidden">
      <!-- This is Sidebar icon by sm screen -->
      <font-awesome-icon :icon="['fas', 'filter']"/>
    </button>
    <aside class="max-lg:hidden sm:hidden  lg:block overflow-y-auto pr-8 w-64" aria-label="Sidebar">
      <hr>
      <div class=" bg-gray-50 rounded" style="background-color: rgba(0 0 0 / 0%);">
          <ul class="space-y-2">
            <li>
              <button type="submit" class="py-4 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span class="sr-only">Search</span>
              </button>
              <hr>

              <!-- 把條目送進來 -->
              <div v-for="(item, key) in data" :key="key">
                <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-4 text-center inline-flex items-center" type="button" @click="setNavbarOpen(item)" style="width: 100%">
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
              </button>
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
          name: 'TEAM',
          navbarOpen: false
        },
        {
          name: 'PARTNER',
          navbarOpen: false
        }
      ]
    }
  },
  methods: {
    setNavbarOpen(item) {
      item.navbarOpen = !item.navbarOpen
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
