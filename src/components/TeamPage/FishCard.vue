<template>
  <!-- This is FishCard -->
  <div :class="[item.open ? 'absolute lg:-top-10 lg:left-0 top-16 left-18 lg:w-[90%] lg:h-[110%] w-[75%] h-[45%] max-h-[1000px]' : 'lg:h-[180px] h-[200px]', '']">
    <!-- This is item.open background image -->
    <div v-show="item.open" :class="[item.open ? 'fixed top-0 left-0 w-full h-[100vh] lg:bg-[rgba(0,0,0,0.5)] z-0' : '' , '']"></div>
    <!-- FishCard content -->
    <!-- :class="[item.open ? '' : '' , '']" -->
    <div :class="[item.open ? 'relative flex z-10 h-full lg:flex-row flex-col' : 'flex lg:mr-[6rem] h-full max-lg:justify-center' , '']">
      <!-- FishCard img btn -->
      <button @click="openModel(item,num)" :class="[item.open ? 'lg:w-1/2 w-full lg:pt-14 lg:pr-14 lg:pl-14' : 'h-full flex justify-start max-lg:items-center' , '']">
        <!-- This is head image -->
        <img :class="[item.open ? 'rounded-[10%] lg:h-full lg:w-[50vw] w-full border-1 border-[#57CED0]' : 'div_shadow h-full rounded-3xl border-2 border-[#57CED0] min-md:max-w-[230px] lg:max-h-none min-md:max-h-56 lg:max-w-none ' , '']" :src="item.img" alt="">
      </button>

      <!-- title and story name content -->
      <div :class="[item.open ? 'lg:w-1/2 lg:pt-0 pt-16 lg:flex-none flex-1 w-full px-2 max-lg:px-4 relative lg:block flex justify-center max-lg:flex-col' : 'pl-8' , '']">

        <div :class="[item.open ? 'lg:py-12 lg:pt-32 w-full' : 'h-full flex flex-col justify-center' , '']">
          <div :class="[item.open ? 'lg:text-6xl lg:leading-tight max-lg:text-5xl max-lg:leading-tight' : 'text-3xl max-lg:text-3xl max-lg:leading-tight' , 'text-white']">{{ item.name }}</div>
          <hr :class="[item.open ? 'w-60 ml-3 my-8' : 'max-lg:w-28 lg:w-1/2 my-4 h-1 border-t-2' , '']">
          <div :class="[item.open ? 'text-white' : '' , '']" >
            <div :class="[item.open ? 'text-white lg:text-6xl lg:leading-tight max-lg:text-4xl max-lg:leading-snug' : 'text-xl  max-lg:text-xl max-lg:leading-tight' , 'text-white font-normal']">
              {{item.title}}
            </div>
            <div v-show="item.open" :class="[item.open ? 'lg:text-3xl lg:leading-normal max-lg:text-2xl max-lg:leading-relaxed' : 'text-4xl leading-loose' , '']">
              {{item.story}}
            </div>
          </div>
        </div>
        <div class=" max-lg:my-11 lg:absolute lg:bottom-0 max-lg:flex max-lg:justify-center w-full">
          <button
            @click="closeModel(item, num)"
            v-show="item.open"
            class="rounded-xl bg-black bg-opacity-20 px-3 py-1 border-solid border-cyan-800 border-2 hover:bg-gray-800 hover:opacity-80 text-white">
              BACK
          </button>
        </div>
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
