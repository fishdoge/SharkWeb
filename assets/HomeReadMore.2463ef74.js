import{S as m}from"./SwiperPost.4d1d918c.js";import{S as c,N as d}from"./swiper.min.7975e250.js";import{P as u}from"./pagination.min.535e4b75.js";import{_ as g,c as n,a as e,n as _,F as b,e as h,o as s,b as v,r as f}from"./index.39ecf2a4.js";const w="/assets/01\u4E3B\u9801\u9762-\u4E09\u8EF8\u5F0F\u5206\u9801.4ef148b6.png";c.use([d,u]);const y={components:{SwiperPost:m},data(){return{bg_img:w,post:[{title:`<b>MYM</b> <span class="font-thin">ETANOMICS</span>
          `,content:`SharkTank is a colalition of 5000
          MYMetaSharks with the collective
          drive to navigate theeconomice of
          the metaverse in meaningful and impactful ways.

          The advent of blockchain
          technology ushers in unprecedented
          possibilities collaborate, create,
          and bulid.

          As the keystone soecues in the
          MYMetanonics ecosystem, our
          mission is to use blockchain
          technology to create an
          environment where innovation and
          creativity can generate a positive
          social impact on everyone.
          `},{title:"page2",content:"456"},{title:"page3",content:"789"}]}},mounted(){return{swiper:new c(".mySwiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,a){return'<span class="'+a+'"></span>'}}})}}},k={class:"swiper mySwiper"},S={class:"swiper-wrapper"},x={class:"bottom-12 left-[2rem] md:bottom-16 md:left-20 absolute text-white btn"};function M(i,t,a,B,r,N){const l=f("SwiperPost");return s(),n("div",null,[e("img",{class:"bg-img",style:_(`background-image: url(${r.bg_img});position:fixed`)},null,4),e("div",k,[e("div",S,[(s(!0),n(b,null,h(r.post,(o,p)=>(s(),n("div",{key:p,class:"swiper-slide"},[v(l,{post_title:o.title,post_content:o.content,class:"lg:ml-20 ml-5 mt-20 text-white relative"},null,8,["post_title","post_content"])]))),128))])]),e("div",x,[e("button",{onClick:t[0]||(t[0]=o=>i.$router.push("/")),class:"px-4 py-1 text-lg bg-opacity-20 bg-gray-900 rounded-lg border-opacity-40 border-2 border-cyan-400 z-50"}," Back ")])])}const Y=g(y,[["render",M]]);export{Y as default};
