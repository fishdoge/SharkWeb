<template>
  <!-- This is FishCard -->
  <div :class="[item.open ? 'absolute top-0 left-0 w-[100%] h-full' : 'h-[30%]', '']">
    <!-- This is item.open background image -->
    <div v-show="item.open" :class="[item.open ? 'fixed top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] z-[-10]' : '' , '']"></div>
    <!-- FishCard content -->
    <!-- :class="[item.open ? '' : '' , '']" -->
    <div :class="[item.open ? 'relative flex z-10 h-full lg:flex-row flex-col' : 'flex lg:mr-[6rem] h-full max-lg:justify-center' , '']">
      <!-- FishCard img btn -->
      <button @click="openModel(item,num)" :class="[item.open ? 'lg:w-1/2 w-full lg:p-0 p-9' : 'h-full flex justify-start max-lg:items-center' , '']">
        <!-- This is head image -->
        <img :class="[item.open ? 'rounded-[10%] lg:h-full lg:w-[50vw] w-full border-4 border-[#57CED0]' : 'div_shadow h-full rounded-3xl border-2 border-[#57CED0] min-md:max-w-[230px] lg:max-h-none min-md:max-h-[230px] lg:max-w-none ' , '']" :src="item.img" alt="">
      </button>

      <!-- title and story name content -->
      <div :class="[item.open ? 'lg:w-1/2 lg:flex-none flex-1 w-full text-white px-9 relative lg:block flex justify-center' : 'pl-8' , '']">

        <div :class="[item.open ? 'lg:py-12 lg:pt-32 w-full' : 'h-[100%] flex flex-col justify-center' , '']">
          <h1 :class="[item.open ? 'text-5xl' : 'text-2xl' , 'text-4xl']">{{item.name}}</h1>
          <hr :class="[item.open ? 'w-60 ml-3 my-8' : 'w-1/2 my-4' , '']">
          <div :class="[item.open ? 'text-gray-400' : '' , '']" >
            <h2 :class="[item.open ? 'text-gray-400 text-5xl leading-loose' : 'text-xl' , 'text-white font-normal']">
              {{item.title}}
            </h2>
            <div v-show="item.open" :class="[item.open ? 'text-4xl leading-loose' : 'text-4xl leading-loose' , '']">
              {{item.story}}
            </div>
          </div>
        </div>
        <button
          @click="closeModel(item, num)"
          v-show="item.open"
          class="absolute bottom-0 border rounded-xl px-3 py-1 bg-[rgba(0,0,0,0.2)] border-solid border-cyan-800 border-2 hover:bg-[rgba(78,78,78,0.2)]">
            BACK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FishCard',
  components: {

  },
  emits: ['changeStatus'],
  data() {
    return {

    }
  },
  methods: {
    openModel(item, num) {
      item.open = true
      this.$emit('changeStatus', { num, open: item.open })
    },
    closeModel(item, num) {
      item.open = false
      this.$emit('changeStatus', { num, open: item.open })
    }
  },
  props: {
    item: Object,
    num: Number
  }
}
</script>

<style>
.div_shadow
{
box-shadow: inset 0px 0px 50px 0px #ABABAB,5px 5px 12px 0px #30517E;
-webkit-box-shadow: inset 0px 0px 50px 0px #ABABAB,5px 5px 12px 0px #30517E;
-moz-box-shadow: inset 0px 0px 50px 0px #ABABAB,5px 5px 12px 0px #30517E;
-o-box-shadow: inset 0px 0px 50px 0px #ABABAB,5px 5px 12px 0px #30517E;
}
.bigImg{
  border-radius: 10%;
  border: 4px solid #57CED0
}
</style>
