import{S as s,N as i}from"./swiper.min.7975e250.js";import{P as r}from"./pagination.min.535e4b75.js";import{_ as l,c,a as t,t as h,o as p}from"./index.f55dc24f.js";s.use([i,r]);const n=new Date,u={components:{},data(){return{post:[{content:`SharkTank is a coalition of 5000 MYMetaSharks with the collective drive to navigate the economics of the metaverse in meaningful and impactful ways.

The advent of blockchain technology ushers in unprecedented possibilities to collaborate, create, and build.

As the keystone species in the MYMetanomics ecosystem, our mission is to use blockchain technology to create an environment where innovation and creativity can generate a positive social impact on everyone.

Join the wave that is paving a new way to engage with art, culture, business, and, most importantly, each other.

Check out our events page to learn more about our social impact activities.

The advent of blockchain technology ushers in unprecedented possibilities to collaborate, create, and build.

As the keystone species in the MYMetanomics ecosystem, our mission is to use blockchain technology to create an environment where innovation and creativity can generate a positive social impact on everyone.

Join the wave that is paving a new way to engage with art, culture, business, and, most importantly, each other.
          `}],dateTime:{hours:n.getHours(),minutes:n.getMinutes(),seconds:n.getSeconds()},timer:void 0}},methods:{generateRandomNDigits(e){return Math.floor(Math.random()*(9*Math.pow(10,e)))+Math.pow(10,e)},setDateTime(){const e=new Date;this.dateTime={hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}}},mounted(){return{swiper:new s(".mySwiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(o,a){return'<span class="'+a+'"></span>'}}})}},beforeMount(){this.timer=setInterval(this.setDateTime,1e3)},beforeUnmount(){clearInterval(this.timer)}},d=t("img",{class:"fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/\u9BCA\u9B5A\u7DB2\u7AD9-PC\u7248/\u7D20\u6750/01\u4E3B\u9801\u9762-\u4E09\u8EF8\u5F0F\u5206\u9801.png')]"},null,-1),m={class:"relative top-[-2rem] lg:ml-20 ml-10 mr-10 mt-10 text-white"},g=t("div",{class:"lg:text-7xl pb-5 text-4xl"},[t("b",null,"MYM"),t("span",{class:"font-thin"},"ETANOMICS")],-1),v={class:"lg:w-1/2 lg:max-h-full max-w-xl h-[60vh] overflow-y-scroll pl-2 whitespace-pre-line text-white leading-8 text-lg font-normal"},w={class:"flex flex-1 flex-row pl-5 lg:pl-12 relative bottom-0 mb-12"};function b(e,o,a,f,y,_){return p(),c("div",null,[d,t("div",m,[g,t("p",v,h(this.post[0].content),1)]),t("div",w,[t("button",{onClick:o[0]||(o[0]=x=>e.$router.push("/")),class:"px-4 py-1 text-lg bg-opacity-20 bg-gray-900 rounded-lg border-opacity-40 border-2 border-cyan-400 z-50 text-white"}," BACK ")])])}const T=l(u,[["render",b]]);export{T as default};
