<template>
  <!--
    TODO: 把FishActionSlide元件轉為gsap
    TODO: 排版細修
    TODO: @/components/GamePage/GameSlide.vue 有相同的 code (script)，可以合併。
    TODO: @/components/Playground/FishClassSlide.vue 有相同的 code (script)，可以合併。
    TODO: @/components/EventPage/EventSlide.vue 有相同的 code (script)，可以合併。
  -->
  <div class="bg-[red] h-[75vh] w-[20px] absolute right-10 top-[17%]"></div>
  <div class="absolute right-10 top-[20%]">
    <section id="FishActionSlide" class="" style="">
      <div class="absolute right-0" style="background-color: black;height: 100%;width: 50%;"></div>
      <button class="text-[#fff] text-[50px] absolute right-5 top-[-10vh] rotate-90" @click="prev">&lt;</button>
      <button class="text-[#fff] text-[50px] absolute right-5 top-[65vh] rotate-90" @click="next">></button>

      <!-- <input type="radio" name="FishActionSlide" id="fas1" />
      <input type="radio" name="FishActionSlide" id="fas2" />
      <input type="radio" name="FishActionSlide" id="fas3" checked />
      <input type="radio" name="FishActionSlide" id="fas4" />
      <input type="radio" name="FishActionSlide" id="fas5" /> -->
      <!-- <label for="fas1" id="FishActionSlide1" class=" ">
        <img src="https://fakeimg.pl/70x70/" class="rounded-full" alt="" />
      </label>
      <label for="fas2" id="FishActionSlide2" class=" ">
        <img src="https://fakeimg.pl/70x70/" class="rounded-full" alt="" />
      </label>
      <label for="fas3" id="FishActionSlide3" class=" ">
        <img src="https://fakeimg.pl/70x70/" class="rounded-full" alt="" />
      </label>
      <label for="fas4" id="FishActionSlide4" class=" ">
        <img src="https://fakeimg.pl/70x70/" class="rounded-full" alt="" />
      </label>
      <label for="fas5" id="FishActionSlide5" class=" ">
        <img src="https://fakeimg.pl/70x70/" class="rounded-full" alt="" />
      </label> -->
    </section>
  </div>
</template>

<script>
import t from '@/assets/鯊魚網站-PC版/test.png'

export default {
  name: 'FishActionSlide',
  data() {
    return {
      test: t,
      data: [
        {
          name: 'shark1',
          img: 'https://fakeimg.pl/70x70/'
        }
      ]
    }
  },
  methods: {
    // TODO: 之後要改成雙向綁定
    // next button
    next() {
      // const radioButtons = document.querySelectorAll('input[name="FishActionSlide"]')
      // for (const button of radioButtons) {
      //   if (button.checked) {
      //     console.log(button.id)
      //     if (button.id === 'fas5') {
      //       document.getElementById('fas1').checked = true
      //       break
      //     } else {
      //       document.getElementById('fas' + String(parseInt(button.id.charAt(3)) + 1)).checked = true
      //       break
      //     }
      //   }
      // }
    },
    // prev button
    prev() {
      // const radioButtons = document.querySelectorAll('input[name="FishActionSlide"]')
      // for (const button of radioButtons) {
      //   if (button.checked) {
      //     console.log(button.id)
      //     if (button.id === 'fas1') {
      //       document.getElementById('fas5').checked = true
      //       break
      //     } else {
      //       document.getElementById('fas' + String(parseInt(button.id.charAt(3)) - 1)).checked = true
      //       break
      //     }
      //   }
      // }
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
}

#FishActionSlide label {
  width: 80px;
  height: 100%;
  position: absolute;
  top: 30vh;
  right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
}

#fas1:checked ~ #FishActionSlide4, #fas2:checked ~ #FishActionSlide5,
#fas3:checked ~ #FishActionSlide1, #fas4:checked ~ #FishActionSlide2,
#fas5:checked ~ #FishActionSlide3 {
  transform: translateY(-170px) scale(90%);
  opacity: 80%;
}

#fas1:checked ~ #FishActionSlide5, #fas2:checked ~ #FishActionSlide1,
#fas3:checked ~ #FishActionSlide2, #fas4:checked ~ #FishActionSlide3,
#fas5:checked ~ #FishActionSlide4 {
  transform: translateY(-90px) scale(90%);
  opacity: 90%;
}

#fas1:checked ~ #FishActionSlide1, #fas2:checked ~ #FishActionSlide2,
#fas3:checked ~ #FishActionSlide3, #fas4:checked ~ #FishActionSlide4,
#fas5:checked ~ #FishActionSlide5 {
  transform: translateY(-8px) scale(110%);
}

#fas1:checked ~ #FishActionSlide2, #fas2:checked ~ #FishActionSlide3,
#fas3:checked ~ #FishActionSlide4, #fas4:checked ~ #FishActionSlide5,
#fas5:checked ~ #FishActionSlide1 {
  transform: translateY(90px) scale(90%);
  opacity: 90%;
}

#fas1:checked ~ #FishActionSlide3, #fas2:checked ~ #FishActionSlide4,
#fas3:checked ~ #FishActionSlide5, #fas4:checked ~ #FishActionSlide1,
#fas5:checked ~ #FishActionSlide2 {
  transform: translateY(170px) scale(90%);
  opacity: 80%;
}

</style>
