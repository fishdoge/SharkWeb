<template>
  <!--
    TODO: 把slide元件轉為gsap
    TODO: 排版細修
    TODO: @/components/GamePage/GameSlide.vue 有相同的 code (script)，可以合併。
    TODO: @/components/Playground/FishClassSlide.vue 有相同的 code (script)，可以合併。
    TODO: @/components/Playground/FishActionSlide.vue 有相同的 code (script)，可以合併。
  -->
  <div class="overflow-hidden">

    <div class="pt-0 text-6xl text-white flex justify-center items-center">
      <span class="font-[1000]">MYM</span>
      <span style="font-weight: lighter;">ETANOMICS</span>
    </div>

    <section id="slide">
      <input type="radio" name="slide" id="s1">
      <input type="radio" name="slide" id="s2">
      <input type="radio" name="slide" id="s3" checked>
      <input type="radio" name="slide" id="s4">
      <input type="radio" name="slide" id="s5">
      <label for="s1" id="slide1" class="img-circle rounded-full ">
        <img :src="test" class="w-[300px]" alt="" />
      </label>
      <label for="s2" id="slide2" class="img-circle rounded-full ">
        <img :src="test" class="w-[300px]" alt="" />
      </label>
      <label for="s3" id="slide3" class="img-circle rounded-full ">
        <img :src="test" class="w-[300px]" alt="" />
      </label>
      <label for="s4" id="slide4" class="img-circle rounded-full ">
        <img :src="test" class="w-[300px]" alt="" />
      </label>
      <label for="s5" id="slide5" class="img-circle rounded-full ">
        <img :src="test" class="w-[300px]" alt="" />
      </label>
    </section>
    <div class=" text-[1.2rem] text-center text-[white] flex justify-center align-middle flex-col">
      <div style="max-width:45vw; margin: 0 auto;">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, eveniet delectus. Laboriosam eius,
      </div>
      <button class="bg-[rgba(0,0,0,.15)] px-6 py-1 rounded-lg" style="margin: 0 auto;border: 1px solid rgba(76,216,239,.3);">
        read more >
      </button>
      <!-- <div>
      </div> -->
    </div>
  </div>
</template>

<script>
import t from '@/assets/網站-PC版/素材/金edit.png'

export default {
  name: 'EventSlide',
  data() {
    return {
      test: t
    }
  },
  methods: {
    next() {
      const radioButtons = document.querySelectorAll('input[name="slide"]')
      for (const button of radioButtons) {
        if (button.checked) {
          console.log(button.id)
          if (button.id === 's5') {
            document.getElementById('s1').checked = true
            break
          } else {
            document.getElementById('s' + String(parseInt(button.id.charAt(1)) + 1)).checked = true
            break
          }
        }
      }
    },
    // prev button
    prev() {
      const radioButtons = document.querySelectorAll('input[name="gameSlide"]')
      for (const button of radioButtons) {
        if (button.checked) {
          console.log(button.id)
          if (button.id === 's1') {
            document.getElementById('s5').checked = true
            break
          } else {
            document.getElementById('s' + String(parseInt(button.id.charAt(1)) - 1)).checked = true
            break
          }
        }
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.next()
    }, 3000)
  }
}

</script>

<style>

[type = radio] {
  /* display: none; */
  visibility: hidden;
}

#slide {
  height: 30vw;
  position: relative;
}

#slide label {
  margin: auto;
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
  overflow: hidden;
  /* border: 5px solid rgba(245, 245, 220, 0.5); */
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, .3));
}

#s1:checked ~ #slide4, #s2:checked ~ #slide5,
#s3:checked ~ #slide1, #s4:checked ~ #slide2,
#s5:checked ~ #slide3 {
  transform: translate(-150vh ,-10%) scale(75%);
  visibility: hidden;
}

#s1:checked ~ #slide5, #s2:checked ~ #slide1,
#s3:checked ~ #slide2, #s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
  transform: translate(-95vh ,-10%) scale(75%);
}

#s1:checked ~ #slide1, #s2:checked ~ #slide2,
#s3:checked ~ #slide3, #s4:checked ~ #slide4,
#s5:checked ~ #slide5 {
  transform: scale(110%);
}

#s1:checked ~ #slide2, #s2:checked ~ #slide3,
#s3:checked ~ #slide4, #s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
  transform: translate(95vh ,-10%) scale(75%);
}

#s1:checked ~ #slide3, #s2:checked ~ #slide4,
#s3:checked ~ #slide5, #s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  transform: translate(150vh ,-10%) scale(75%);
  visibility: hidden;
}

section::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 50%;
  background-color: rgb(76, 216, 239);
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%);
}

#s1::before,#s2::before,
#s3::before,#s4::before,#s5::before {
  content: "";
  visibility:visible;
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 9999px;
  background-color: rgb(76,216,239);
  bottom: 4vh;
  left: 50%;
  transform: translate(-50%,1);
}
#s1::before {
  transform: translate(-25vw);
}

#s2::before {
  transform: translate(-13vw);
}

#s3::before {
  transform: translate(0);
}

#s4::before {
  transform: translate(13vw);
}

#s5::before {
  transform: translate(25vw);
}

#s1:checked:before,
#s2:checked:before,
#s3:checked:before,
#s4:checked:before,
#s5:checked:before{
  background-color: white;
}

</style>
