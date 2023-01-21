<template>
  <div>
    <button href="#" class="block max-w-sm bg-white rounded-[15px] shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-[#28004D] p-0 overflow-hidden w-full">
      <img :src="img" :tag="card_name" alt="" class="w-[100%]" />
    </button>
    <p class="text-white text-center">
      {{ card_name }} <br>
      No. {{ id }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FishCard',
  props: {
    img: String,
    card_name: String,
    id: String
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>
