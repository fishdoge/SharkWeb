import{_ as l,o,c as s,a as e,F as m,e as h,b as g,r as v}from"./index.5937acf1.js";import{S as c,N as w}from"./swiper.min.7975e250.js";import{P as f}from"./pagination.min.535e4b75.js";const b={name:"TeamContent",props:{post_title:String,post_content:String},data(){return{}},methods:{}},y={class:"relative top-[-2rem]"},x=["innerHTML"],M=["innerHTML"];function S(i,n,t,p,r,d){return o(),s("div",y,[e("div",{innerHTML:t.post_title,class:"text-7xl pb-5"},null,8,x),e("p",{innerHTML:t.post_content,class:"sm:w-3/5 pl-2 whitespace-pre-line text-white leading-8 text-lg font-normal"},null,8,M)])}const $=l(b,[["render",S]]);c.use([w,f]);const k={components:{SwiperPost:$},data(){return{post:[{title:`<b>MYM</b> <span class="font-thin">ETANOMICS</span>
          `,content:`SharkTank is a coalition of 5000 MYMetaSharks with the collective drive to navigate the economics of the metaverse in meaningful and impactful ways.

          The advent of blockchain technology ushers in unprecedented possibilities to collaborate, create, and build.

          As the keystone species in the MYMetanomics ecosystem, our mission is to use blockchain technology to create an environment where innovation and creativity can generate a positive social impact on everyone.

          Join the wave that is paving a new way to engage with art, culture, business, and, most importantly, each other.
          `},{title:"page2",content:"456"},{title:"page3",content:"789"}]}},mounted(){return{swiper:new c(".mySwiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(n,t){return'<span class="'+t+'"></span>'}}})}}},T=e("img",{class:"fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/\u9BCA\u9B5A\u7DB2\u7AD9-PC\u7248/\u7D20\u6750/01\u4E3B\u9801\u9762-\u4E09\u8EF8\u5F0F\u5206\u9801.png')]"},null,-1),P={class:"swiper mySwiper"},C={class:"swiper-wrapper"},H={class:"flex flex-1 flex-row pl-5 lg:pl-12 relative bottom-0 mb-12 mt-12"};function B(i,n,t,p,r,d){const _=v("SwiperPost");return o(),s("div",null,[T,e("div",P,[e("div",C,[(o(!0),s(m,null,h(r.post,(a,u)=>(o(),s("div",{key:u,class:"swiper-slide"},[g(_,{post_title:a.title,post_content:a.content,class:"lg:ml-20 ml-5 mt-20 text-white relative"},null,8,["post_title","post_content"])]))),128))])]),e("div",H,[e("button",{onClick:n[0]||(n[0]=a=>i.$router.push("/")),class:"px-4 py-1 text-lg bg-opacity-20 bg-gray-900 rounded-lg border-opacity-40 border-2 border-cyan-400 z-50 text-white"}," BACK ")])])}const Y=l(k,[["render",B]]);export{Y as default};
