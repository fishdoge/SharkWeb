import{b as h}from"./06\u5206\u5716\u5C64-1.1b4d344d.js";import{_ as s,o as c,c as r,a as t,l as m,n as f,b as n,r as d}from"./index.426e5b67.js";import{A as x}from"./AnchorSidebar.554ac8b6.js";const b={name:"GameSlide",data(){return{}},methods:{next(){const i=document.querySelectorAll('input[name="gameSlide"]');for(const e of i)if(e.checked)if(console.log(e.id),e.id==="g5"){document.getElementById("g1").checked=!0;break}else{document.getElementById("s"+String(parseInt(e.id.charAt(1))+1)).checked=!0;break}},prev(){const i=document.querySelectorAll('input[name="gameSlide"]');for(const e of i)if(e.checked)if(console.log(e.id),e.id==="g1"){document.getElementById("g5").checked=!0;break}else{document.getElementById("s"+String(parseInt(e.id.charAt(1))-1)).checked=!0;break}}}},_={id:"gameSlide",class:"mt-[5%]"},k=m('<input type="radio" name="gameSlide" id="g1"><input type="radio" name="gameSlide" id="g2"><input type="radio" name="gameSlide" id="g3" checked><input type="radio" name="gameSlide" id="g4"><input type="radio" name="gameSlide" id="g5">',5),S=m('<label for="g1" id="gameSlide1"><img src="https://fakeimg.pl/300x350/?text=hahahha" alt=""><h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1></label><label for="g2" id="gameSlide2"><img src="https://fakeimg.pl/300x350/?text=2" alt=""><h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1></label><label for="g3" id="gameSlide3"><img src="https://fakeimg.pl/300x350/?text=3" alt=""><h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1></label><label for="g4" id="gameSlide4"><img src="https://fakeimg.pl/300x350/?text=4" alt=""><h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1></label><label for="g5" id="gameSlide5"><img src="https://fakeimg.pl/300x350/?text=5" alt=""><h1 class="absolute top-[35%] px-[15%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque distinctio placeat, dolore id eveniet odio hic? </h1></label>',5),v=t("div",{class:"m-0 flex justify-center text-xl text-[#57CED0]"},[t("button",null," PLAY ")],-1);function y(i,e,p,u,l,o){return c(),r("div",null,[t("section",_,[k,t("button",{class:"text-[#fff] text-[80px] fixed top-[25%] left-[3%]",onClick:e[0]||(e[0]=(...a)=>o.prev&&o.prev(...a))},"<"),t("button",{class:"text-[#fff] text-[80px] fixed top-[25%] right-[3%]",onClick:e[1]||(e[1]=(...a)=>o.next&&o.next(...a))},">"),S]),v])}const I=s(b,[["render",y]]),A={components:{GameSlide:I,Anchor:x},data(){return{bg_img:h}},methods:{}},B=t("div",{class:"fixed team-content w-[100%] h-[100vh] top-0 z-[-1]",style:{background:"rgba(255, 255, 255, 0.2)","box-shadow":"0 4px 30px rgba(0, 0, 0, 0.1)","backdrop-filter":"blur(5px)","-webkit-backdrop-filter":"blur(5px)"}},null,-1);function E(i,e,p,u,l,o){const a=d("GameSlide"),g=d("Anchor");return c(),r("div",null,[t("img",{class:"bg-img fixed w-[100%] h-[100vh] z-[-1]",style:f(`background-image: url(${l.bg_img});position:fixed`)},null,4),B,n(a),n(g,{in_data:[{name:"ALL GAMES",navbarOpen:!0,dropDown:[]},{name:"VIDEO",navbarOpen:!0,dropDown:[]}]})])}const $=s(A,[["render",E]]);export{$ as default};
