<template>
  <!--
    TODO: 把FishClassSlide元件轉為gsap
    TODO: 排版細修
    TODO: @/components/EventPage/EventSlide.vue 有相同的 code (script)，可以合併。
    TODO: @/components/Playground/FishClassSlide.vue 有相同的 code (script)，可以合併。
    TODO: @/components/Playground/FishActionSlide.vue 有相同的 code (script)，可以合併。
  -->
  <div style="width:50%;height:20px;position:absolute;bottom: 0;left: 50%;transform: translateX(-50%);" >
    <!-- shadow under -->
    <div style="width:100%;height: 20px;background-color: red; position: absolute;top: -120%;"></div>
    <!-- button -->
    <button class="text-[#fff] text-[50px] absolute left-[3%] top-[-60px]" @click="prev">&lt;</button>
    <button class="text-[#fff] text-[50px] absolute right-[3%] top-[-60px]" @click="next">></button>
    <!-- img -->
    <section id="FishClassSlide" class="" style="">
      <input type="radio" name="FishClassSlide" id="fcs1" />
      <input type="radio" name="FishClassSlide" id="fcs2" />
      <input type="radio" name="FishClassSlide" id="fcs3" checked />
      <input type="radio" name="FishClassSlide" id="fcs4" />
      <input type="radio" name="FishClassSlide" id="fcs5" />
      <label for="fcs1" id="FishClassSlide1" class=" ">
        <img src="https://fakeimg.pl/80x80/" class="" alt="" />
      </label>
      <label for="fcs2" id="FishClassSlide2" class=" ">
        <img src="https://fakeimg.pl/80x80/" class="" alt="" />
      </label>
      <label for="fcs3" id="FishClassSlide3" class=" ">
        <img src="https://fakeimg.pl/80x80/" class="" alt="" />
      </label>
      <label for="fcs4" id="FishClassSlide4" class=" ">
        <img src="https://fakeimg.pl/80x80/" class="" alt="" />
      </label>
      <label for="fcs5" id="FishClassSlide5" class=" ">
        <img src="https://fakeimg.pl/80x80/" class="" alt="" />
      </label>
    </section>
  </div>
</template>

<script>
import t from '@/assets/鯊魚網站-PC版/test.png'

export default {
  name: 'FishClassSlide',
  data() {
    return {
      test: t
    }
  },
  methods: {
    // TODO: 之後要改成雙向綁定
    // next button
    next() {
      const radioButtons = document.querySelectorAll('input[name="FishClassSlide"]')
      for (const button of radioButtons) {
        if (button.checked) {
          console.log(button.id)
          if (button.id === 'fcs5') {
            document.getElementById('fcs1').checked = true
            break
          } else {
            document.getElementById('fcs' + String(parseInt(button.id.charAt(3)) + 1)).checked = true
            break
          }
        }
      }
    },
    // prev button
    prev() {
      const radioButtons = document.querySelectorAll('input[name="FishClassSlide"]')
      for (const button of radioButtons) {
        if (button.checked) {
          console.log(button.id)
          if (button.id === 'fcs1') {
            document.getElementById('fcs5').checked = true
            break
          } else {
            document.getElementById('fcs' + String(parseInt(button.id.charAt(3)) - 1)).checked = true
            break
          }
        }
      }
    }
  }
}

</script>

<style>

[type = radio] {
  display: none;
}

#FishClassSlide {
  position: relative;
  top: -10px;
}

#FishClassSlide label {
  margin: auto;
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
  overflow: hidden;
}

#fcs1:checked ~ #FishClassSlide4, #fcs2:checked ~ #FishClassSlide5,
#fcs3:checked ~ #FishClassSlide1, #fcs4:checked ~ #FishClassSlide2,
#fcs5:checked ~ #FishClassSlide3 {
  transform: translate(-30vh,10%);
}

#fcs1:checked ~ #FishClassSlide5, #fcs2:checked ~ #FishClassSlide1,
#fcs3:checked ~ #FishClassSlide2, #fcs4:checked ~ #FishClassSlide3,
#fcs5:checked ~ #FishClassSlide4 {
  transform: translate(-16vh ,10%);
}

#fcs1:checked ~ #FishClassSlide1, #fcs2:checked ~ #FishClassSlide2,
#fcs3:checked ~ #FishClassSlide3, #fcs4:checked ~ #FishClassSlide4,
#fcs5:checked ~ #FishClassSlide5 {
  transform: scale(120%);
}

#fcs1:checked ~ #FishClassSlide2, #fcs2:checked ~ #FishClassSlide3,
#fcs3:checked ~ #FishClassSlide4, #fcs4:checked ~ #FishClassSlide5,
#fcs5:checked ~ #FishClassSlide1 {
  transform: translate(16vh ,10%);
}

#fcs1:checked ~ #FishClassSlide3, #fcs2:checked ~ #FishClassSlide4,
#fcs3:checked ~ #FishClassSlide5, #fcs4:checked ~ #FishClassSlide1,
#fcs5:checked ~ #FishClassSlide2 {
  transform: translate(30vh ,10%);
}

</style>
