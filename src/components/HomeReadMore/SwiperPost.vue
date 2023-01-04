<template>
  <div class="relative pl-8 top-[-2rem]">
    <div v-html="post_title" class="text-4xl pb-5"></div>
    <p v-html="post_content" class="whitespace-pre-line text-white leading-8 text-lg font-thin"></p>
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
