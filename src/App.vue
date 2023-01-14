<template>
  <div class="container-fluid">
    <div class="row w-100" style="position: absolute;">
      <div class="col-6">
        <button @click="playAnim('idle')" class="btn btn-primary m-3" style="position: relative; z-index: 2;">idle</button>
        <button @click="playAnim('run')" class="btn btn-primary m-3" style="position: relative; z-index: 2;">run</button>
      </div>
      <div class="col-6 text-end">
        <button @click="LoadSharkBtn('shark01')" class="btn btn-primary m-3" style="position: relative; z-index: 2;">shark01</button>
        <button @click="LoadSharkBtn('huge06')" class="btn btn-primary m-3" style="position: relative; z-index: 2;">huge06</button>
      </div>
    </div>
  </div>

  <div ref="test" id="unity-container">
    <canvas id="unity-canvas" width=960 height=600></canvas>
    <div id="unity-loading-bar">
      <div id="unity-progress-bar-empty">
        <div id="unity-progress-bar-full"></div>
      </div>
    </div>
    <div id="unity-warning"> </div>
  </div>
  <!-- <Unity :src="loaderUrl" width="1000" height="600" :unityLoader="loaderUrl"></Unity> -->

</template>

<script>
// import Unity from './Unity.vue'

export default {
  mounted() {
    function GetProd()
      {
          return false;
      }

      window.addEventListener("load", function () {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.register("/src/ServiceWorker.js");
        }
      });

      var container = document.querySelector("#unity-container");
      var canvas = document.querySelector("#unity-canvas");
      var loadingBar = document.querySelector("#unity-loading-bar");
      var progressBarFull = document.querySelector("#unity-progress-bar-full");
      var warningBanner = document.querySelector("#unity-warning");

      // Shows a temporary message banner/ribbon for a few seconds, or
      // a permanent error message on top of the canvas if type=='error'.
      // If type=='warning', a yellow highlight color is used.
      // Modify or remove this function to customize the visually presented
      // way that non-critical warnings and error messages are presented to the
      // user.
      function unityShowBanner(msg, type) {
        function updateBannerVisibility() {
          warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
        }
        var div = document.createElement('div');
        div.innerHTML = msg;
        warningBanner.appendChild(div);
        if (type == 'error') div.style = 'background: red; padding: 10px;';
        else {
          if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
          setTimeout(function() {
            warningBanner.removeChild(div);
            updateBannerVisibility();
          }, 5000);
        }
        updateBannerVisibility();
      }

      var loaderUrl = "/src/Build/_webgl.loader.js";
      var config = {
        dataUrl: "/src/Build/_webgl.data",
        frameworkUrl: "/src/Build/_webgl.framework.js",
        codeUrl: "/src/Build/_webgl.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "",
        productName: "Shark",
        productVersion: "1.0"
      };

      // By default Unity keeps WebGL canvas render target size matched with
      // the DOM size of the canvas element (scaled by window.devicePixelRatio)
      // Set this to false if you want to decouple this synchronization from
      // happening inside the engine, and you would instead like to size up
      // the canvas DOM size and WebGL render target sizes yourself.
      // config.matchWebGLToCanvasSize = false;

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Mobile device style: fill the whole browser client area with the game canvas:
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[0].appendChild(meta);
      }

      loadingBar.style.display = "block";

      var script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
        }).catch((message) => {
          alert(message);
        });
      };
      document.body.appendChild(script);
  },
  // name: 'App',
	// data() {
	// 	return {
  //     instance: null,
	// 		loaded: false,
  //     loaderUrl: '/src/Build/_webgl.loader.js',
  //     config: {
  //       dataUrl: "/src/Build/_webgl.data",
  //       frameworkUrl: "/src/Build/_webgl.framework.js",
  //       codeUrl: "/src/Build/_webgl.wasm",
  //       streamingAssetsUrl: "StreamingAssets",
  //       companyName: "",
  //       productName: "Shark",
  //       productVersion: "1.0"
  //     }
	// 	}
	// },
	// beforeMount() {
  //   if (!this.eventBus.load) {
	// 		const script = document.createElement('script')
	// 		script.setAttribute('id', 'vue-unity-webgl-loader')
	// 		script.setAttribute('src', this.loaderUrl)
	// 		script.setAttribute('async', '')
	// 		script.setAttribute('defer', '')
	// 		document.body.appendChild(script)
	// 		script.addEventListener('load', () => {
	// 			this.eventBus.ready = true
	// 			this.eventBus.emit('onload')
	// 		})
	// 	} else {
	// 		this.eventBus.ready = true
	// 	}
	// 	this.eventBus.load = true
	// },
	// mounted() {
  //   const instantiate = () => {
	// 		this.instance = createUnityInstance(this.$refs.test, this.config)
	// 	}
  //   if (this.eventBus.ready) {
	// 		instantiate()
	// 	} else {
	// 		this.eventBus.on('onload', () => {
	// 			instantiate()
	// 			this.$emit('onload')
	// 		})
	// 	}
	// },
	// methods: {
  //   playAnim(anim) {
  //     console.log('instance: ' + this.instance)
  //     this.instance.SendMessage('GameManager', 'playAnim', anim);
  //   },
  //   LoadSharkBtn(PrefabName) {
  //     this.instance.SendMessage('GameManager', 'LoadSharkBtn', PrefabName);
  //   }
	// }
}
</script>