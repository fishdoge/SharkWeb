<template>
  <!-- gameSlide card component -->
  <!--
    TODO: 優化+overflow
    TODO: @/components/EventPage/EventSlide.vue 有相同的 code (script)，可以合併。
    TODO: @/components/Playground/FishClassSlide.vue 有相同的 code (script)，可以合併。
    TODO: @/components/Playground/FishActionSlide.vue 有相同的 code (script)，可以合併。
  -->
  <div>
    <section id="gameSlide" class="mt-[5%]">
      <!-- gameSlide bar manage -->
      <input type="radio" name="gameSlide" id="g1" />
      <input type="radio" name="gameSlide" id="g2" />
      <input type="radio" name="gameSlide" id="g3" checked />
      <input type="radio" name="gameSlide" id="g4" />
      <input type="radio" name="gameSlide" id="g5" />
      <!-- next and prev button -->
      <button class="text-white text-[80px] fixed top-1/4 left-[3%]" @click="prev">&lt;</button>
      <button class="text-white text-[80px] fixed top-1/4 right-[3%]" @click="next">></button>
      <!-- card -->
      <label for="g1" id="gameSlide1">
        <img src="https://fakeimg.pl/300x350/?text=hahahha" alt="" />
        <h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1>
      </label>
      <label for="g2" id="gameSlide2">
        <img src="https://fakeimg.pl/300x350/?text=2" alt="" />
        <h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1>
      </label>
      <label for="g3" id="gameSlide3">
        <img src="https://fakeimg.pl/300x350/?text=3"  alt="" />
        <h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1>
      </label>
      <label for="g4" id="gameSlide4">
        <img src="https://fakeimg.pl/300x350/?text=4" alt="" />
        <h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1>
      </label>
      <label for="g5" id="gameSlide5">
        <img src="https://fakeimg.pl/300x350/?text=5" alt="" />
        <h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1>
      </label>
      <!-- gameSlide card end -->
    </section>
    <!-- play button -->
    <div class="m-0 flex justify-center text-xl text-[#57CED0]">
      <button>
        PLAY
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameSlide',
  data() {
    return {

    }
  },
  methods: {
    // TODO: 之後要改成雙向綁定
    // next button
    next() {
      const radioButtons = document.querySelectorAll('input[name="gameSlide"]')
      for (const button of radioButtons) {
        if (button.checked) {
          console.log(button.id)
          if (button.id === 'g5') {
            document.getElementById('g1').checked = true
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
          if (button.id === 'g1') {
            document.getElementById('g5').checked = true
            break
          } else {
            document.getElementById('s' + String(parseInt(button.id.charAt(1)) - 1)).checked = true
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

#gameSlide {
  height: 30vw;
  position: relative;
  /* perspective 指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。 */
  perspective: 1000px;
  transform-style: preserve-3d;
}

#gameSlide label {
  margin: auto;
  width:fit-content;
  height: fit-content;
  border-radius: 4px;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
  overflow: hidden;
  border-radius: 40px;
  border: 5px solid rgba(87, 206, 208, 0.5);
  -webkit-box-reflect: below 0 linear-gradient(transparent,rgba(0,0,0,0.5));
}

/* 開啟圖片裡的字 */
#g1:checked ~ #gameSlide1 h1,#g2:checked ~ #gameSlide2 h1
#g3:checked ~ #gameSlide3 h1,#g4:checked ~ #gameSlide4 h1
#g5:checked ~ #gameSlide5 h1 {
  display: block;
}

/* 關閉圖片裡的字 */
#g1:checked ~ #gameSlide2 h1,#g1:checked ~ #gameSlide3 h1,#g1:checked ~ #gameSlide4 h1,#g1:checked ~ #gameSlide5 h1,
#g2:checked ~ #gameSlide1 h1,#g2:checked ~ #gameSlide3 h1,#g2:checked ~ #gameSlide4 h1,#g2:checked ~ #gameSlide5 h1,
#g3:checked ~ #gameSlide2 h1,#g3:checked ~ #gameSlide1 h1,#g3:checked ~ #gameSlide4 h1,#g3:checked ~ #gameSlide5 h1,
#g4:checked ~ #gameSlide1 h1,#g4:checked ~ #gameSlide2 h1,#g4:checked ~ #gameSlide3 h1,#g4:checked ~ #gameSlide5 h1,
#g5:checked ~ #gameSlide2 h1,#g5:checked ~ #gameSlide3 h1,#g5:checked ~ #gameSlide4 h1,#g5:checked ~ #gameSlide1 h1 {
  display: none;
}

/* offset */

#g1:checked ~ #gameSlide4, #g2:checked ~ #gameSlide5,
#g3:checked ~ #gameSlide1, #g4:checked ~ #gameSlide2,
#g5:checked ~ #gameSlide3 {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .37);
  transform: translate3d(-450px,0,-200px) rotateY(15deg);
}

#g1:checked ~ #gameSlide5, #g2:checked ~ #gameSlide1,
#g3:checked ~ #gameSlide2, #g4:checked ~ #gameSlide3,
#g5:checked ~ #gameSlide4 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .3),0 2px 2px 0 rgba(0,0,0,.2);
  transform: translate3d(-250px,0,-100px) rotateY(20deg);
}

#g1:checked ~ #gameSlide1, #g2:checked ~ #gameSlide2,
#g3:checked ~ #gameSlide3, #g4:checked ~ #gameSlide4,
#g5:checked ~ #gameSlide5 {
  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, .3),0 11px 7px 0 rgba(0,0,0,.19);
  transform: translate3d(0,0,0);
}

#g1:checked ~ #gameSlide2, #g2:checked ~ #gameSlide3,
#g3:checked ~ #gameSlide4, #g4:checked ~ #gameSlide5,
#g5:checked ~ #gameSlide1 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .3),0 2px 2px 0 rgba(0,0,0,.2);
  transform: translate3d(250px,0,-100px) rotateY(-20deg);
}

#g1:checked ~ #gameSlide3, #g2:checked ~ #gameSlide4,
#g3:checked ~ #gameSlide5, #g4:checked ~ #gameSlide1,
#g5:checked ~ #gameSlide2 {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .37);
  transform: translate3d(450px,0,-200px) rotateY(-15deg);
}

</style>
