<template>
  <div class="relative top-[-2rem]">
    <div v-html="post_title" class="text-7xl pb-5"></div>
    <p v-html="post_content" class="sm:w-3/5 pl-2 whitespace-pre-line text-white leading-8 text-lg font-normal"></p>
  </div>
</template>

<script>
export default {
  name: 'TeamContent',
  props: {
    // img: String,
    post_title: String,
    post_content: String
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
// const Hahaja = ()=>{
//   alert("haha")
// }
</script>

<style>
h1 {
  line-height: 50px;
  font-size: 450%;
  font-weight: lighter;
}
h4 {
  text-align: left;
  margin-top: 30px;
  line-height: 50px;
  font-size: 125%;
}
b {
  font-weight: 900;
}
</style>
