<template>
  <div>
    <button
      class="card block px-2 mr-1 my-1 mb-3 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[rgba(150,150,150,0.5)] border border-transparent shadow-sm rounded hover:bg-gray-600  text-xs py-1"
      :href="href">
      {{text}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'ModalIcon',
  props: {
    text: String,
    href: String
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
