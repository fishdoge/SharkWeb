import{C as c}from"./ComingSoon.bb4c48c8.js";import{S as s,N as g}from"./swiper.min.7975e250.js";import{P as u}from"./pagination.min.535e4b75.js";import{_ as k,c as f,a as e,b as o,d as w,n as h,r as a,o as v}from"./index.d8f9adda.js";const n="/assets/\u91D1edit.130f456a.png";s.use([g,u]);const _={components:{ComingSoon:c},data(){return{event:[{name:"event",img:n},{name:"event",img:n},{name:"event",img:n},{name:"event",img:n},{name:"event",img:n}],sideBar:[{name:"SHARKTANK",dropDownOpen:!0,dropDown:["sharktank","sharktank","sharktank","sharktank","sharktank","sharktank","sharktank"]},{name:"ANGKOR ART",dropDownOpen:!1,dropDown:["sharktank"]},{name:"ARTEL",dropDownOpen:!1,dropDown:["sharktank"]},{name:"SEA GAMES",dropDownOpen:!1,dropDown:["sharktank"]},{name:"POWER NODES",dropDownOpen:!1,dropDown:["sharktank"]},{name:"AGRICULTURE NFT",dropDownOpen:!1,dropDown:["sharktank"]}],readMore:!1}},methods:{showReadMore(){this.readMore=!this.readMore}},mounted(){return{eventSwiper:new s(".eventSwiper",{loop:!0,slidesPerView:3,allowTouchMove:!1,slideToClickedSlide:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3}})}}},x=e("img",{class:"fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/\u80CC\u666F3.png')]"},null,-1),b={class:"lg:mt-1 lg:px-8 overflow-y-auto absolute top-0 pt-20 max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full"},S={class:"bottom-4 left-[10rem] md:bottom-16 md:left-20 absolute text-white btn"};function D(l,t,E,R,r,d){const i=a("ComingSoon"),p=a("Anchor"),m=a("EventReadMore");return v(),f("div",null,[e("div",null,[x,o(i),e("div",b,[o(p,{data:r.sideBar,iconShow:!0},null,8,["data"])]),w(" --> "),e("div",{class:h([r.readMore?"":"hidden"])},[o(m),e("div",S,[e("button",{onClick:t[0]||(t[0]=y=>d.showReadMore()),class:"px-4 py-1 text-lg bg-gray-900 bg-opacity-60 rounded-lg border-2 border-cyan-500"}," Back ")])],2)])])}const O=k(_,[["render",D]]);export{O as default};
