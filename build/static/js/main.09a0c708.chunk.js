(this.webpackJsonpshopc=this.webpackJsonpshopc||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),s=c(10),n=c.n(s),a=(c(16),c(2)),r=c.p+"static/media/poland.f887465c.svg",l=c.p+"static/media/united-kingdom.4839cec4.svg",_=c.p+"static/media/european-union.94b6802e.svg",o=(c(17),c(0)),j=[{cur:"PLN",img:r},{cur:"USD",img:l},{cur:"EUR",img:_}],d=function(){var e=i.useState(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],n=i.useState(j[0]),r=Object(a.a)(n,2),l=r[0],_=r[1],d=function e(){s(!c),document.removeEventListener("click",e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("span",{className:"currency",onClick:function(e){e.preventDefault(),s(!c),document.addEventListener("click",d)},children:[Object(o.jsx)("img",{className:"currency__image",src:l.img,alt:"Niestety"})," ",Object(o.jsx)("span",{className:"currency__name",children:l.cur})]}),c?Object(o.jsx)("div",{className:"menu",children:j.map((function(e){return Object(o.jsxs)("div",{className:"menu__option",onClick:function(){return t=e.cur,i=e.img,_({cur:t,img:i}),void s(!c);var t,i},children:[Object(o.jsx)("img",{className:"menu__option__img",src:e.img,alt:""}),Object(o.jsx)("span",{className:"menu__option__name",children:e.cur})]},e.cur)}))}):null]})},m=c(3),u=(c(19),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("li",{className:"nav__item",onClick:function(){return console.log(e.name)},children:[e.name,Object(o.jsx)("div",{className:"dropdown",children:e.categories.map((function(e,t){return Object(o.jsxs)("div",{className:"dropdown-".concat(t),children:[Object(o.jsx)("h3",{className:"dropdown__title",children:e.title}),Object(o.jsx)("ul",{className:"dropdown__list",children:e.values.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]},t)}))})]})})}),b=c.p+"static/media/discount.f5327ae2.svg",h=[{name:"Komputery",categories:[{title:"Cena pln",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"Grafiki",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"Procesory",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"Dyski",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"P\u0142yty g\u0142\xf3wne",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"Wi\u0119cej",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]}],g=(c(20),function(){return Object(o.jsx)("div",{className:"nav",children:Object(o.jsxs)("ul",{className:"nav__list",children:[Object(o.jsx)("li",{className:"nav__item",children:"Home"}),h.map((function(e,t){return Object(o.jsx)(u,Object(m.a)({},e),t)})),Object(o.jsxs)("li",{className:"specialoffer nav__item",children:[Object(o.jsx)("img",{src:b,alt:"Refresh the page"}),"Super oferta!"]})]})})}),p=(c(21),c(6)),O=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0,n=Object(i.useRef)(null);Object(i.useEffect)((function(){var i=(null===s||void 0===s?void 0:s.current)||window;if(i&&i.addEventListener){n.current!==t&&(n.current=t);var a=function(e){n.current(e)};return i.addEventListener(e,a,c),function(){return i.removeEventListener(e,a)}}}),[e,s,t])},x=function(e,t){O("mousedown",(function(c){e.current&&!e.current.contains(c.target)&&t(c)}),{passive:!0,capture:!1}),O("touchstart",(function(c){e.current&&!e.current.contains(c.target)&&t(c)}),{capture:!1,passive:!0})},v=(c(22),function(e){var t=i.useState([!1,!1,!1,!1,!1,!1]),c=Object(a.a)(t,2),s=c[0],n=c[1],r=i.useRef(null);return x(r,(function(){e.click()})),Object(o.jsx)("div",{className:"sidebar-menu",ref:r,children:Object(o.jsx)("ul",{className:"sidebar-menu__categories",children:h.map((function(t,c){return Object(o.jsxs)("div",{children:[Object(o.jsx)("li",{className:"sidebar-menu__categories__list",id:t.name,onClick:function(){return function(e){n([!1,!1,!1,!1,!1,!1]),n((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(p.a)({},e,!s[e]))}))}(c)},children:t.name},c),Object(o.jsx)("div",{className:s[c]?"sidebar-menu__dropdown-active":"sidebar-menu__dropdown",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("p",{className:"sidebar-menu__dropdown-active__title",children:t.categories[0].title}),t.categories[0].values.map((function(t,c){return Object(o.jsx)("li",{onClick:e.click,className:"sidebar-menu__dropdown-active__item",children:t},c)}))]})})]},c)}))})})}),f=c.p+"static/media/pc1.98d30227.png",N=c.p+"static/media/trash.9b8117c7.svg",k=c.p+"static/media/close.17a94979.svg",w=(c(23),function(e){var t=e.func,c=e.actives,s=i.useRef(null);return x(s,(function(){t()})),Object(o.jsx)("div",{className:c?"favourites":"favourites actives",ref:s,children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{className:"favourites__title",children:["Ulubione",Object(o.jsx)("span",{className:"favourites__title__close",children:Object(o.jsx)("img",{src:k,alt:"",onClick:function(){t()}})})]}),Object(o.jsxs)("div",{className:"favourites__item",children:[Object(o.jsx)("img",{className:"favourites__item__img",id:"img",src:f,alt:""}),Object(o.jsx)("div",{className:"favourites__item__name",children:"Komputer pc master"}),Object(o.jsx)("img",{src:N,alt:"",id:"bin"})]}),Object(o.jsxs)("div",{className:"favourites__item",children:[Object(o.jsx)("img",{className:"favourites__item__img",id:"img",src:f,alt:""}),Object(o.jsx)("div",{className:"favourites__item__name",children:"Komputer pc master"}),Object(o.jsx)("img",{src:N,alt:"",id:"bin"})]}),Object(o.jsxs)("div",{className:"favourites__item",children:[Object(o.jsx)("img",{className:"favourites__item__img",id:"img",src:f,alt:""}),Object(o.jsx)("div",{className:"favourites__item__name",children:"Komputer pc master"}),Object(o.jsx)("img",{src:N,alt:"",id:"bin"})]})]})})}),C=c.p+"static/media/heart.e34016a1.svg",y=c.p+"static/media/user (1).ad105048.svg",S=c.p+"static/media/shopping-cart.2ac2a2f7.svg",z=c.p+"static/media/menu.de21b81a.svg";c(24);var U=function(e,t){i.useEffect((function(){var c=function(c){e.current&&!e.current.contains(c.target)&&t(c)};return document.addEventListener("mousedown",c),document.addEventListener("touchstart",c),function(){document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c)}}),[e,t])},P=function(e){var t=e.actives,c=e.func,s=i.useState(!0),n=Object(a.a)(s,2),r=n[0],l=n[1],_=function(){l(!r)},j=i.useRef(null);return U(j,(function(){t&&(console.log("siema"),c())})),Object(o.jsx)("div",{className:t?"login":"login closeLoginWindow",children:Object(o.jsxs)("div",{ref:j,className:t?"login__container":"login__container closeLoginWindow",children:[Object(o.jsxs)("div",{className:r?"login__container__loginin activeLog":"login__container__loginin",children:[Object(o.jsx)("h3",{className:"login__container__title",children:"Zaloguj"}),Object(o.jsxs)("form",{action:"/",className:"login__container__form",children:[Object(o.jsx)("input",{className:"login__container__form__login",type:"text",placeholder:"LOGIN"}),Object(o.jsx)("input",{className:"login__container__form__password",type:"password",placeholder:"HAS\u0141O"}),Object(o.jsx)("button",{type:"submit",children:"ZALOGUJ"})]}),Object(o.jsx)("button",{onClick:_,children:"ZAREJESTRUJ"})]}),Object(o.jsxs)("div",{className:r?"login__container__register":"login__container__register activeLog",children:[Object(o.jsx)("h3",{className:"login__container__title",children:"Rejestracja"}),Object(o.jsxs)("form",{action:"/",className:"login__container__form",children:[Object(o.jsx)("input",{className:"login__container__form__login",type:"text",placeholder:"LOGIN"}),Object(o.jsx)("input",{className:"login__container__form__login",type:"email",placeholder:"EMAIL"}),Object(o.jsx)("input",{className:"login__container__form__password",type:"password",placeholder:"HAS\u0141O"}),Object(o.jsx)("button",{children:"ZAREJESTRUJ"})]}),Object(o.jsx)("button",{type:"submit",onClick:_,children:"ZALOGUJ"})]})]})})},R=function(){var e=i.useState(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],n=i.useState(!1),r=Object(a.a)(n,2),l=r[0],_=r[1],j=i.useState(!1),d=Object(a.a)(j,2),m=d[0],u=d[1],b=function(){s(!c)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"header__searchbar",children:[Object(o.jsxs)("div",{className:"header__searchbar__logo",children:[Object(o.jsx)("img",{onClick:b,src:z,alt:"Refresh page"}),"SHOP",Object(o.jsx)("span",{className:"header__searchbar__logo__last",children:"c"})]}),Object(o.jsxs)("div",{className:"header__searchbar__search",children:[Object(o.jsx)("input",{className:"header__searchbar__search__input",type:"text",placeholder:"Szukaj..."}),Object(o.jsx)("button",{className:"header__searchbar__search__btn",children:"Szukaj"})]}),Object(o.jsxs)("div",{className:"header__searchbar__menu",children:[Object(o.jsxs)("div",{className:"header__searchbar__menu__favourite",onClick:function(e){var t;(null===(t=e.target.parentElement)||void 0===t?void 0:t.classList.contains("header__searchbar__menu__favourite"))&&(console.log("Klikn\u0105\u0142e\u015b we"),_(!l))},children:[Object(o.jsx)("img",{src:C,alt:"Refresh Page",className:"siema"}),Object(o.jsx)("div",{className:"header__searchbar__menu__favourite__info",children:"3"}),Object(o.jsx)(w,{func:function(){l&&(_(!1),console.log("powinenem dzia\u0142a\u015b"))},actives:l})]}),Object(o.jsxs)("div",{className:"header__searchbar__menu__login",onClick:function(e){var t=e.currentTarget;console.log(t),t.classList.contains("header__searchbar__menu__login")&&(console.log("Klikn\u0105\u0142e\u015b we"),u(!0))},children:[Object(o.jsx)("img",{src:y,alt:"Refresh Page"}),Object(o.jsx)("span",{children:"Zaloguj"}),Object(o.jsx)(P,{actives:m,func:function(){console.log("Dzia\u0142am"),setTimeout((function(){u(!1)}),800),console.log(m)}})]}),Object(o.jsxs)("div",{className:"header__searchbar__menu__shoping",children:[Object(o.jsx)("img",{src:S,alt:"Refresh Page"}),Object(o.jsx)("span",{})]})]})]}),c?Object(o.jsx)(v,{click:b}):null]})},A=function(){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("div",{className:"header__top",children:[Object(o.jsx)("span",{className:"header__top__hello",children:"Witaj w naszym sklepie!"}),Object(o.jsx)(d,{})]}),Object(o.jsx)(R,{}),Object(o.jsx)(g,{})]})},L=c(9),E=c.n(L),B=c(11),W=c.p+"static/media/pc1.98d30227.png",I=[{imageSrc:W,h2:"Wiosna-lato 2021",h1:"Wiosenna oferta komputer\xf3w gamingowych",p:"Oferta wa\u017cna 31 maja 2021 lub do wyczerpania zapas\xf3w "},{imageSrc:c.p+"static/media/pc2.cd7b0fb9.png",h2:"NEXT Gaming pc",h1:"Szybsze, Wydajniejsze, Cichsze",p:"Zobacz najnowsz\u0105 dostaw\u0119 komputer\xf3w next tylko w SHOPc!"},{imageSrc:W,h2:"Wiosna-lato 2021",h1:"Wiosenna oferta komputer\xf3w gamingowych",p:"Oferta wa\u017cna 31 maja 2021 lub do wyczerpania zapas\xf3w "}],M=(c(26),function(e){return Object(o.jsxs)("div",{className:"slider-container__grid__info",children:[Object(o.jsx)("h2",{className:"slider-container__grid__info__h2",children:I[e.index].h2}),Object(o.jsx)("h1",{className:"slider-container__grid__info__h1",children:I[e.index].h1}),Object(o.jsx)("p",{className:"slider-container__grid__info__paragraph",children:I[e.index].p}),Object(o.jsx)("button",{className:"slider-container__grid__info__button",children:"Zobacz Wi\u0119cej"})]})}),Z=(c(27),function(e){return Object(o.jsx)("div",{className:"slider-container__grid__image",children:Object(o.jsx)("img",{className:"slider-container__grid__image__img",src:I[e.index].imageSrc,alt:"XDDDDD"})})}),G=(c(28),function(e){return Object(o.jsxs)("div",{className:"changeButtons-container",children:[Object(o.jsx)("div",{className:"changeButtons previous",onClick:e.next,children:Object(o.jsx)("button",{className:"changeButtons-btn",children:">"})}),Object(o.jsx)("div",{className:"changeButtons next",onClick:e.previous,children:Object(o.jsx)("button",{className:"changeButtons-btn",children:"<"})})]})}),D=(c(29),function(){return Object(o.jsxs)("div",{className:"SVG-container",children:[Object(o.jsx)("svg",{className:"SVG-container__element el-1",width:"256",height:"547",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(o.jsx)("svg",{className:"SVG-container__element el-2",width:"256",height:"550",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(o.jsx)("svg",{className:"SVG-container__element el-3",width:"256",height:"547",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(o.jsx)("svg",{className:"SVG-container__element el-4",width:"256",height:"550",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})})]})}),T=(c(30),function(){var e=i.useState(0),t=Object(a.a)(e,2),c=t[0],s=t[1],n=i.useState(!0),r=Object(a.a)(n,2),l=r[0],_=r[1];i.useEffect((function(){var e=setTimeout((function(){_(!1),setTimeout((function(){s(2===c?0:c+1)}),500)}),8e3);return function(){return clearTimeout(e)}}),[c]),i.useEffect((function(){setTimeout((function(){_(!0)}),500)}),[l]);var j=function(){var e=Object(B.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(!1),setTimeout((function(){s(2===c?0:c+1)}),500);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"slider-container",children:[Object(o.jsx)(D,{}),Object(o.jsxs)("div",{style:{opacity:l?"1":"0",transition:"all .5s"},className:"slider-container__grid",children:[Object(o.jsx)(Z,{index:c}),Object(o.jsx)(M,{index:c})]}),Object(o.jsx)(G,{next:j,previous:function(){_(!1),setTimeout((function(){s(0===c?2:c-1)}),500)}})]})}),H=(c(31),function(e){var t=e.category;return Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)("div",{className:"category__container",children:Object(o.jsx)("img",{className:"category__image",src:t.img,alt:""})}),Object(o.jsx)("h3",{className:"category__title",children:t.title})]})}),V=c.p+"static/media/pc.cd7b0fb9.png",K=c.p+"static/media/graph.55e02018.png",J=c.p+"static/media/proc.fdfc10cd.jpg",F=c.p+"static/media/mother.df6e3282.webp",X=[{img:V,title:"komputery"},{img:K,title:"grafika"},{img:J,title:"procesory"},{img:c.p+"static/media/disc.bb0cb52b.jpg",title:"Dyski ssd"},{img:F,title:"P\u0142yty g\u0142\xf3wne"},{img:c.p+"static/media/more.83d41fbd.jpg",title:"Wi\u0119cej"}],q=(c(32),function(){return Object(o.jsx)("div",{className:"imageNav",children:X.map((function(e,t){return Object(o.jsx)(H,{category:e},t)}))})}),Q=(c(33),function(){return Object(o.jsxs)("div",{className:"SVG-container",children:[Object(o.jsx)("svg",{className:"SVG-container__element elb-1",width:"256",height:"547",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(o.jsx)("svg",{className:"SVG-container__element elb-2",width:"256",height:"550",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(o.jsx)("svg",{className:"SVG-container__element elb-3",width:"256",height:"547",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(o.jsx)("svg",{className:"SVG-container__element elb-4",width:"256",height:"550",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})})]})}),Y=(c(34),{imageSrc:c.p+"static/media/pcservice.4c926baa.webp",h1:"Nie posiadasz wiedzy w dziedzinie budowania komputer\xf3w?",p:"Nie ma problemu zostaw to nam!"}),$=(c(35),function(){return Object(o.jsxs)("div",{className:"firstAd__Info",children:[Object(o.jsx)("h1",{className:"firstAd__Info__h1",children:Y.h1}),Object(o.jsx)("p",{className:"firstAd__Info__p",children:Y.p}),Object(o.jsx)("button",{className:"firstAd__Info__btn",children:"Dowiedz si\u0119 wi\u0119cej"})]})}),ee=(c(36),function(){return Object(o.jsx)("div",{className:"firstAdImg",children:Object(o.jsx)("img",{className:"firstAdImg__img",src:Y.imageSrc,alt:""})})}),te=function(){return Object(o.jsxs)("div",{className:"firstAd",children:[Object(o.jsx)(Q,{}),Object(o.jsxs)("div",{className:"firstAd__grid",children:[Object(o.jsx)($,{}),Object(o.jsx)(ee,{})]})]})},ce=c(7),ie=(c(37),function(e){return Object(o.jsxs)("div",{className:"offerHeader",children:[Object(o.jsx)("h2",{className:"offerHeader__title",children:"Oferta"}),Object(o.jsxs)("ul",{className:"offerHeader__list",onClick:e.whichActive,children:[Object(o.jsx)("li",{className:"offerHeader__list__item active",id:"0",children:"Polecamy"}),Object(o.jsx)("li",{className:"offerHeader__list__item",id:"1",children:"Nowo\u015bci"}),Object(o.jsx)("li",{className:"offerHeader__list__item",id:"2",children:"Bestsellery"})]})]})}),se=(c(38),c(39),c.p+"static/media/star.de82f684.svg"),ne=c.p+"static/media/emptystar.95a3c21b.svg",ae=(c(40),function(e){var t=e.rating;return Object(o.jsx)("div",{className:"rating",children:Object(o.jsx)("ul",{className:"rating__list",children:Object(ce.a)(Array(5)).map((function(e,c){return Object(o.jsx)("li",{className:"rating__list__item",children:Object(o.jsx)("img",{className:"rating__list__item__image",src:c<t?se:ne,alt:""})},c)}))})})}),re=function(e){var t=e.item;return Object(o.jsxs)("div",{className:"product",id:"productFlex",children:[Object(o.jsx)("div",{className:"product__popover",children:Object(o.jsxs)("div",{className:"product__popover__container",children:[Object(o.jsx)("div",{className:"product__popover__container__option",children:"Zobacz"}),Object(o.jsx)("div",{className:"product__popover__container__option",children:"Dodaj do ulubionych"}),Object(o.jsx)("div",{className:"product__popover__container__option",children:"Dodaj do koszyka"})]})}),Object(o.jsx)("div",{className:"product__imgContainer",children:Object(o.jsx)("img",{className:"product__imgContainer__img",src:t.imgSrc,alt:""})}),Object(o.jsxs)("div",{className:"product__descriptionContainer",children:[Object(o.jsx)("h3",{className:"product__descriptionContainer__title",children:t.title}),Object(o.jsx)(ae,{rating:t.rating}),Object(o.jsxs)("div",{className:"product__descriptionContainer__price",children:[t.price," ",t.currency]})]})]})},le=(c(41),function(e){var t=e.active;return Object(o.jsx)("div",{className:"offerProductsContainer",children:Object(o.jsx)("div",{className:"offerProductsContainer__grid",children:t.map((function(e,t){return Object(o.jsx)(re,{item:e},t)}))})})}),_e=[{imgSrc:V,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:4,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:1,price:12e3,currency:"pln"}],oe=[{imgSrc:V,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:5,price:12e3,currency:"pln"}],je=function(){var e=i.useState(_e),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(o.jsxs)("div",{className:"offer",children:[Object(o.jsx)(ie,{whichActive:function(e){var t=e.target;if(!t.classList.contains("active")&&"LI"===t.tagName){Object(ce.a)(e.currentTarget.children).forEach((function(e){e.classList.remove("active")})),t.classList.add("active");var c=[_e,oe,_e],i=+t.id;s(c[i])}}}),Object(o.jsx)(le,{active:c})]})},de=(c(42),function(e){var t=e.img;return Object(o.jsx)("div",{className:"secondAd",children:Object(o.jsx)("img",{className:"secondAd__img",src:t,alt:""})})}),me=(c(43),function(e){return Object(o.jsxs)("div",{className:"contactShortcut",children:[Object(o.jsx)("div",{className:"contactShortcut__imgContainer",children:Object(o.jsx)("img",{className:"contactShortcut__imgContainer__img",src:e.imgSrc,alt:""})}),Object(o.jsxs)("div",{className:"contactShortcut__textContainer",children:[Object(o.jsx)("h4",{className:"contactShortcut__textContainer__title",children:e.title}),Object(o.jsx)("p",{className:"contactShortcut__textContainer__desc",children:e.description})]})]})}),ue=[{title:"Bezp\u0142atny kontack 24/7",description:"online lub telefonicznie",imgSrc:c.p+"static/media/cust.937ce3be.svg"},{title:"Dostarczamy na ca\u0142y \u015bwiat",description:"przy przesy\u0142kach powyzej 150PLN",imgSrc:c.p+"static/media/dtruck.8e98e980.png"},{title:"Gwarancja zakupu",description:"tylko sprawdzone metodyp\u0142atno\u015bci",imgSrc:c.p+"static/media/d-card.6a6246b4.svg"}],be=(c(44),function(){return Object(o.jsx)("div",{className:"contactShortcuts",children:ue.map((function(e,t){return Object(i.createElement)(me,Object(m.a)(Object(m.a)({},e),{},{key:t}))}))})}),he=(c(45),c(46),function(e){var t=e.active;return Object(o.jsx)("div",{className:"ProductsContainer",children:Object(o.jsx)("div",{className:"ProductsContainer__grid",children:t.map((function(e,t){return Object(o.jsx)(re,{item:e},t)}))})})}),ge=[{imgSrc:V,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:2,price:12e3,currency:"pln"}],pe=function(){return Object(o.jsxs)("div",{className:"lastAdded",children:[Object(o.jsx)("div",{className:"lastAdded__header",children:Object(o.jsx)("h2",{className:"lastAdded__header__title",children:"Ulubione"})}),Object(o.jsx)(he,{active:ge})]})},Oe=c.p+"static/media/secondAd.13521624.jpg",xe=c.p+"static/media/thirdAd.51373a9d.jpg",ve=c.p+"static/media/fourthAd.92861304.jpg",fe=(c(47),c(48),[{imgSrc:V,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:4,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:1,price:12e3,currency:"pln"},{imgSrc:V,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:J,title:"Pc Razor",rating:1,price:12e3,currency:"pln"}]),Ne=function(){return Object(o.jsxs)("div",{className:"lastAdded",children:[Object(o.jsx)("div",{className:"lastAdded__header",children:Object(o.jsx)("h2",{className:"lastAdded__header__title",children:"Ostatnio dodane"})}),Object(o.jsx)(he,{active:fe})]})},ke=(c(49),c.p+"static/media/telefony.14e1ad7c.jpg"),we=(c(50),function(e){var t=e.newdata;return Object(o.jsxs)("div",{className:"newsItem",children:[Object(o.jsx)("div",{className:"newsItem__img",children:Object(o.jsx)("img",{className:"newsItem__img__img",src:t.img,alt:""})}),Object(o.jsx)("div",{className:"newsItem__title",children:t.title})]})}),Ce=[{img:ke,title:"Najlepsze telefony 2021 - sprawd\u017a rankingi"},{img:ke,title:"Najlepsze telefony 2021 - sprawd\u017a rankingi"},{img:ke,title:"Najlepsze telefony 2021 - sprawd\u017a rankingi"}],ye=function(){return Object(o.jsxs)("div",{className:"news",children:[Object(o.jsxs)("div",{className:"news__header",children:["SHOPc ",Object(o.jsx)("span",{children:"Aktualno\u015bci"})]}),Object(o.jsx)("div",{className:"news__container",children:Ce.map((function(e,t){return Object(o.jsx)(we,{newdata:e},t)}))})]})},Se=function(){return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(T,{}),Object(o.jsx)(q,{}),Object(o.jsx)(te,{}),Object(o.jsx)(je,{}),Object(o.jsx)(de,{img:Oe}),Object(o.jsxs)("div",{className:"main__inner",children:[Object(o.jsx)(be,{}),Object(o.jsx)(de,{img:xe}),Object(o.jsx)(Ne,{}),Object(o.jsx)(de,{img:ve}),Object(o.jsx)(pe,{}),Object(o.jsx)(ye,{})]})]})},ze=(c(51),c.p+"static/media/twitter.6456a4ea.svg"),Ue=c.p+"static/media/facebook.5aa9dd97.svg",Pe=c.p+"static/media/instagram.e719d8b2.png",Re=c.p+"static/media/youtube.c02f061a.svg",Ae=c.p+"static/media/linkedin.7defd339.svg",Le=(c(52),function(){return Object(o.jsxs)("div",{className:"newsletter",children:[Object(o.jsxs)("div",{className:"newsletter__form-container",children:[Object(o.jsx)("h3",{className:"newsletter__form-container__name",children:"Newsletter"}),Object(o.jsxs)("div",{className:"newsletter__form-container__input-container",children:[Object(o.jsx)("input",{className:"newsletter__form-container__input-container__input",type:"text",placeholder:"Email addres"}),Object(o.jsx)("button",{className:"newsletter__form-container__input-container__btn",children:"Subskrybuj"})]})]}),Object(o.jsxs)("div",{className:"newsletter__socials-container",children:[Object(o.jsx)("span",{className:"newsletter__socials-container__name",children:"Follow us:"}),Object(o.jsx)("img",{src:ze,alt:"",className:"newsletter__socials-container__social-img"}),Object(o.jsx)("img",{src:Ue,alt:"",className:"newsletter__socials-container__social-img"}),Object(o.jsx)("img",{src:Pe,alt:"",className:"newsletter__socials-container__social-img"}),Object(o.jsx)("img",{src:Re,alt:"",className:"newsletter__socials-container__social-img"}),Object(o.jsx)("img",{src:Ae,alt:"",className:"newsletter__socials-container__social-img"})]})]})}),Ee=(c(53),c.p+"static/media/nav.bfddefe1.svg"),Be=c.p+"static/media/phone.fc2e402d.svg",We=c.p+"static/media/email.4481ec21.svg",Ie=(c(54),function(){var e=function(e){var t,c=e.currentTarget;c.children[0].classList.toggle("active"),console.log(c.children[0].classList),console.log(null===(t=e.currentTarget.nextElementSibling)||void 0===t?void 0:t.classList.toggle("activeNav"))};return Object(o.jsxs)("div",{className:"navlinks",children:[Object(o.jsxs)("div",{className:"navlinks__contactUs",children:[Object(o.jsxs)("h3",{className:"navlinks__contactUs__title",onClick:e,children:["Kontakt",Object(o.jsx)("span",{className:"navlinks__contactUs__title__mobile"})]}),Object(o.jsxs)("ul",{className:"navlinks__contactUs__list contact",children:[Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsxs)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:[Object(o.jsx)("img",{className:"navlinks__contactUs__list__item__link__image",src:Ee,alt:""}),"Grabiszy\u0144ska 39, Wroc\u0142aw 55-080"]})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsxs)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:[Object(o.jsx)("img",{className:"navlinks__contactUs__list__item__link__image",src:Be,alt:""}),"501-059-231"]})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsxs)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:[Object(o.jsx)("img",{className:"navlinks__contactUs__list__item__link__image",src:We,alt:""}),"cwrzzaik@gmail.com"]})})]})]}),Object(o.jsxs)("div",{className:"navlinks__contactUs",children:[Object(o.jsxs)("h3",{className:"navlinks__contactUs__title",onClick:e,children:["Produkty",Object(o.jsx)("span",{className:"navlinks__contactUs__title__mobile"})]}),Object(o.jsxs)("ul",{className:"navlinks__contactUs__list ",children:[Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Oferta specjalna"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Bestseller Product"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Ostatnio dodane"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Ulubione"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Komputery"})})]})]}),Object(o.jsxs)("div",{className:"navlinks__contactUs",children:[Object(o.jsxs)("h3",{className:"navlinks__contactUs__title",onClick:e,children:["Us\u0142ugi",Object(o.jsx)("span",{className:"navlinks__contactUs__title__mobile"})]}),Object(o.jsxs)("ul",{className:"navlinks__contactUs__list ",children:[Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"O nas"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Skontaktuj si\u0119"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Dostawa"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Polityka prywatno\u015bci"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Zasady i warunki"})})]})]}),Object(o.jsxs)("div",{className:"navlinks__contactUs",children:[Object(o.jsxs)("h3",{className:"navlinks__contactUs__title",onClick:e,children:["Extra",Object(o.jsx)("span",{className:"navlinks__contactUs__title__mobile"})]}),Object(o.jsxs)("ul",{className:"navlinks__contactUs__list ",children:[Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Szukaj"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Wszystkie Kolekcje"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Aktualno\u015bci"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Wszystkie produkty"})}),Object(o.jsx)("li",{className:"navlinks__contactUs__list__item",children:Object(o.jsx)("a",{className:"navlinks__contactUs__list__item__link",href:"#",children:"Zasady i warunki"})})]})]})]})}),Me=(c(55),function(){return Object(o.jsxs)("div",{className:"foot",children:["\xa9 2021 Powered by ",Object(o.jsx)("span",{className:"foot__name",children:"Cezary Wrzalik"})," All Rights Reserved"]})}),Ze=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"footer__inner",children:[Object(o.jsx)(Le,{}),Object(o.jsx)(Ie,{}),Object(o.jsx)(Me,{})]})})},Ge=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(A,{}),Object(o.jsx)(Se,{}),Object(o.jsx)(Ze,{})]})};n.a.render(Object(o.jsx)(Ge,{}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.09a0c708.chunk.js.map