import{_ as n,g as i,c as r,a as t,n as c,b as l,w as d,d as o,r as _,o as g}from"./index.426e5b67.js";const u="/assets/00\u4E3B\u9801\u9762-\u8CFC\u7269\u8ECA.4e646084.png";const h={data(){return{bg_img:u}},methods:{},mounted(){const e=i.timeline({nullTargetWarn:!1});e.set("h1",{duration:0,opacity:0}),e.set("h2",{duration:0,opacity:0}),e.to("h2",{duration:.5,opacity:1},"+=1"),e.to("h1",{duration:1,opacity:1},"<1")}},p={class:"z-[1]"},m={id:"title",class:"bottom-text"},y=t("h1",null,[t("b",null,"MYM"),o(" ETANOMICS")],-1),f=t("h2",null,"SharkTank",-1),b=t("p",{class:"text-gray-400"},"A collection of 5000 sharks gathered to navigate the world of Metanomics through",-1),x=t("p",{class:"h-5 text-gray-400"},"meaningful social impact activities",-1);function k(e,v,S,M,a,w){const s=_("router-link");return g(),r("div",p,[t("img",{class:"bg-img fixed w-[100%] h-[100vh]",style:c(`background-image: url(${a.bg_img}); position:fixed`)},null,4),t("div",m,[y,f,b,x,l(s,{to:"/readMore",type:"button",class:"px-4 py-1 text-lg bg-gray-900 bg-opacity-60 rounded-lg border-2 border-teal-700 font-light"},{default:d(()=>[o(" > Read Full Story ")]),_:1})])])}const N=n(h,[["render",k]]);export{N as default};
