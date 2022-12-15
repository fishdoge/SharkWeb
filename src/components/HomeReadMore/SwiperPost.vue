<template>
  <div>
    <h1 v-html="post_title"></h1>
    <h4 v-html="post_content" class="text-white"></h4>
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
