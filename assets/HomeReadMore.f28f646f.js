import{S as i,N as l}from"./swiper.min.7975e250.js";import{P as c}from"./pagination.min.535e4b75.js";import{_ as d,c as u,a as t,d as n,b as m,w as p,r as h,o as g}from"./index.4c38618b.js";i.use([l,c]);const a=new Date,v={components:{},data(){return{dateTime:{hours:a.getHours(),minutes:a.getMinutes(),seconds:a.getSeconds()},timer:void 0}},methods:{generateRandomNDigits(e){return Math.floor(Math.random()*(9*Math.pow(10,e)))+Math.pow(10,e)},setDateTime(){const e=new Date;this.dateTime={hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}}},mounted(){return{swiper:new i(".mySwiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(o,s){return'<span class="'+s+'"></span>'}}})}},beforeMount(){this.timer=setInterval(this.setDateTime,1e3)},beforeUnmount(){clearInterval(this.timer)}},f=t("img",{class:"fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/\u9BCA\u9B5A\u7DB2\u7AD9-PC\u7248/\u7D20\u6750/01\u4E3B\u9801\u9762-\u4E09\u8EF8\u5F0F\u5206\u9801.png')]"},null,-1),b={class:"relative top-[-2rem] lg:ml-20 ml-10 mr-10 mt-10 text-white"},w=t("div",{class:"lg:text-7xl pb-5 text-4xl"},[t("b",null,"MYM"),t("span",{class:"font-thin"},"ETANOMICS")],-1),_={class:"lg:w-1/2 lg:max-h-full max-w-xl h-[60vh] overflow-y-scroll pl-2 whitespace-pre-line text-white leading-8 text-lg font-normal"},x={class:"flex flex-1 flex-row pl-5 lg:pl-12 relative bottom-0 mb-12"};function y(e,o,s,M,k,S){const r=h("router-link");return g(),u("div",null,[f,t("div",b,[w,t("pre",_,[n(`        SharkTank is a coalition of 5000 MYMetaSharks with the collective drive to navigate the economics of the metaverse in meaningful and impactful ways.

        The advent of blockchain technology ushers in unprecedented possibilities to collaborate, create, and build.

        As the keystone species in the MYMetanomics ecosystem, our mission is to use blockchain technology to create an environment where innovation and creativity can generate a positive social impact on everyone.

        Join the wave that is paving a new way to engage with art, culture, business, and, most importantly, each other.

        Check out our `),m(r,{to:"/events",class:"text-[#36FFFF] underline underline-offset-4"},{default:p(()=>[n("events page")]),_:1}),n(` to learn more about our social impact activities.
      `)])]),t("div",x,[t("button",{onClick:o[0]||(o[0]=T=>e.$router.push("/")),class:"px-4 py-1 text-lg bg-opacity-20 bg-gray-900 rounded-lg border-opacity-40 border-2 border-cyan-400 z-50 text-white hover:border-solid hover:bottom-0 hover:border-cyan-300 hover:text-cyan-300"}," BACK ")])])}const B=d(v,[["render",y]]);export{B as default};