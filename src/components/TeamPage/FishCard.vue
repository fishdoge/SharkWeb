<template>
  <!-- This is FishCard -->
  <div :class="{'h-[30%]': !item.open,'absolute top-0 left-0 w-[100%] h-full':item.open}">
    <!-- This is item.open background image -->
    <div v-show="item.open" :class="{'': !item.open,'fixed top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] z-[-10]':item.open}"></div>
    <!-- FishCard content -->
    <div :class="{'flex lg:mr-[6rem] h-full max-lg:justify-center': !item.open,'relative flex z-10 h-full lg:flex-row flex-col ':item.open}">
      <!-- FishCard img btn -->
      <button @click="openModel(item,num)" :class="{'h-full flex justify-start max-lg:items-center': !item.open,'lg:w-1/2 w-full lg:p-0 p-9':item.open}">
        <!-- This is head image -->
        <img :class="{'div_shadow h-full rounded-3xl border-2 border-[#57CED0] min-md:max-w-[230px] lg:max-h-none min-md:max-h-[230px] lg:max-w-none ': !item.open,'rounded-[10%] lg:h-full lg:w-[50vw] w-full border-4 border-[#57CED0]':item.open}" :src="item.img" alt="">
      </button>

      <!-- title and story name content -->
      <div :class="{'pl-8': !item.open,'lg:w-1/2 lg:flex-none flex-1 w-full text-white font-bold px-9 relative lg:block flex justify-center':item.open}">

        <div :class="{'h-[100%] flex flex-col justify-center': !item.open,'lg:py-12 lg:pt-32 w-full':item.open}">
          <h1 :class="{'text-2xl': !item.open,'text-5xl':item.open}">{{item.name}}</h1>
          <hr :class="{'w-1/2 my-4': !item.open,'w-60 ml-3 my-8':item.open}">
          <div :class="{'': !item.open,'text-gray-400':item.open}">
            <h2 :class="{'text-xl': !item.open,'text-gray-400 text-5xl leading-loose':item.open}">
              {{item.title}}
            </h2>
            <div v-show="item.open" :class="{'text-4xl leading-loose': !item.open,'text-4xl leading-loose': item.open}">
              {{item.story}}
            </div>
          </div>
        </div>
        <button
          @click="closeModel(item, num)"
          v-show="item.open"
          class="absolute bottom-0 border rounded-xl px-3 py-1 bg-[rgba(0,0,0,0.2)]"
          style="border:#1A4154 solid">
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
h1{
  font-size: 200%;
  font-weight: 900;
  /* margin-bottom: 20px; */
  color: white;
}

h2{
  font-size: 150%;
  font-weight: 900;
  /* margin-bottom: 20px; */
  color: white;
}
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
