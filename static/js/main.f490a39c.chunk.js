(this.webpackJsonpshopc=this.webpackJsonpshopc||[]).push([[0],[,,,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(11),a=c.n(n),r=(c(17),c(2)),s=c.p+"static/media/poland.f887465c.svg",l=c.p+"static/media/united-kingdom.4839cec4.svg",o=c.p+"static/media/european-union.94b6802e.svg",d=(c(18),c(0)),j=[{cur:"PLN",img:s},{cur:"USD",img:l},{cur:"EUR",img:o}],m=function(){var e=i.useState(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],a=i.useState(j[0]),s=Object(r.a)(a,2),l=s[0],o=s[1],m=function e(){n(!c),document.removeEventListener("click",e)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{className:"currency",onClick:function(e){e.preventDefault(),n(!c),document.addEventListener("click",m)},children:[Object(d.jsx)("img",{className:"currency__image",src:l.img,alt:"Niestety"})," ",Object(d.jsx)("span",{className:"currency__name",children:l.cur})]}),c?Object(d.jsx)("div",{className:"menu",children:j.map((function(e){return Object(d.jsxs)("div",{className:"menu__option",onClick:function(){return t=e.cur,i=e.img,o({cur:t,img:i}),void n(!c);var t,i},children:[Object(d.jsx)("img",{className:"menu__option__img",src:e.img,alt:""}),Object(d.jsx)("span",{className:"menu__option__name",children:e.cur})]},e.cur)}))}):null]})},u=c(3),_=(c(20),function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:"nav__item",onClick:function(){return console.log(e.name)},children:[e.name,Object(d.jsx)("div",{className:"dropdown",children:e.categories.map((function(e,t){return Object(d.jsxs)("div",{className:"dropdown-".concat(t),children:[Object(d.jsx)("h3",{className:"dropdown__title",children:e.title}),Object(d.jsx)("ul",{className:"dropdown__list",children:e.values.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}))})]},t)}))})]})})}),h=c.p+"static/media/discount.f5327ae2.svg",b=[{name:"Komputery",categories:[{title:"Cena pln",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"Grafiki",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"Procesory",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"Dyski",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"P\u0142yty g\u0142\xf3wne",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]},{name:"Wi\u0119cej",categories:[{title:"Cena",values:["1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","5000 <"]},{title:"Marka",values:["Msi","Alienware","Intel","Sk\u0142adak"]}]}],p=(c(21),function(){return Object(d.jsx)("div",{className:"nav",children:Object(d.jsxs)("ul",{className:"nav__list",children:[Object(d.jsx)("li",{className:"nav__item",children:"Home"}),b.map((function(e,t){return Object(d.jsx)(_,Object(u.a)({},e),t)})),Object(d.jsxs)("li",{className:"specialoffer nav__item",children:[Object(d.jsx)("img",{src:h,alt:"Refresh the page"}),"Super oferta!"]})]})})}),g=(c(22),c(6)),x=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0,a=Object(i.useRef)(null);Object(i.useEffect)((function(){var i=(null===n||void 0===n?void 0:n.current)||window;if(i&&i.addEventListener){a.current!==t&&(a.current=t);var r=function(e){a.current(e)};return i.addEventListener(e,r,c),function(){return i.removeEventListener(e,r)}}}),[e,n,t])},O=function(e,t){x("mousedown",(function(c){e.current&&!e.current.contains(c.target)&&t(c)}),{passive:!0,capture:!1}),x("touchstart",(function(c){e.current&&!e.current.contains(c.target)&&t(c)}),{capture:!1,passive:!0})},f=(c(23),function(e){var t=i.useState([!1,!1,!1,!1,!1,!1]),c=Object(r.a)(t,2),n=c[0],a=c[1],s=i.useRef(null);return O(s,(function(){e.click()})),Object(d.jsx)("div",{className:"sidebar-menu",ref:s,children:Object(d.jsx)("ul",{className:"sidebar-menu__categories",children:b.map((function(t,c){return Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{className:"sidebar-menu__categories__list",id:t.name,onClick:function(){return function(e){a([!1,!1,!1,!1,!1,!1]),a((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(g.a)({},e,!n[e]))}))}(c)},children:t.name},c),Object(d.jsx)("div",{className:n[c]?"sidebar-menu__dropdown-active":"sidebar-menu__dropdown",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("p",{className:"sidebar-menu__dropdown-active__title",children:t.categories[0].title}),t.categories[0].values.map((function(t,c){return Object(d.jsx)("li",{onClick:e.click,className:"sidebar-menu__dropdown-active__item",children:t},c)}))]})})]},c)}))})})}),v=c.p+"static/media/heart.e34016a1.svg",N=c.p+"static/media/user (1).ad105048.svg",w=c.p+"static/media/shopping-cart.2ac2a2f7.svg",C=c.p+"static/media/menu.de21b81a.svg",k=function(){var e=i.useState(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],a=function(){n(!c)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"header__searchbar",children:[Object(d.jsxs)("div",{className:"header__searchbar__logo",children:[Object(d.jsx)("img",{onClick:a,src:C,alt:"Refresh page"}),"SHOP",Object(d.jsx)("span",{className:"header__searchbar__logo__last",children:"c"})]}),Object(d.jsxs)("div",{className:"header__searchbar__search",children:[Object(d.jsx)("input",{className:"header__searchbar__search__input",type:"text",placeholder:"Szukaj..."}),Object(d.jsx)("button",{className:"header__searchbar__search__btn",children:"Szukaj"})]}),Object(d.jsxs)("div",{className:"header__searchbar__menu",children:[Object(d.jsx)("div",{className:"header__searchbar__menu__favourite",children:Object(d.jsx)("img",{src:v,alt:"Refresh Page",className:"siema"})}),Object(d.jsxs)("div",{className:"header__searchbar__menu__login",children:[Object(d.jsx)("img",{src:N,alt:"Refresh Page"}),Object(d.jsx)("span",{children:"Zaloguj"})]}),Object(d.jsxs)("div",{className:"header__searchbar__menu__shoping",children:[Object(d.jsx)("img",{src:w,alt:"Refresh Page"}),Object(d.jsx)("span",{})]})]})]}),c?Object(d.jsx)(f,{click:a}):null]})},y=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("div",{className:"header__top",children:[Object(d.jsx)("span",{className:"header__top__hello",children:"Witaj w naszym sklepie!"}),Object(d.jsx)(m,{})]}),Object(d.jsx)(k,{}),Object(d.jsx)(p,{})]})},S=c(9),z=c.n(S),P=c(12),R=c.p+"static/media/pc1.98d30227.png",A=[{imageSrc:R,h2:"Wiosna-lato 2021",h1:"Wiosenna oferta komputer\xf3w gamingowych",p:"Oferta wa\u017cna 31 maja 2021 lub do wyczerpania zapas\xf3w "},{imageSrc:c.p+"static/media/pc2.cd7b0fb9.png",h2:"NEXT Gaming pc",h1:"Szybsze, Wydajniejsze, Cichsze",p:"Zobacz najnowsz\u0105 dostaw\u0119 komputer\xf3w next tylko w SHOPc!"},{imageSrc:R,h2:"Wiosna-lato 2021",h1:"Wiosenna oferta komputer\xf3w gamingowych",p:"Oferta wa\u017cna 31 maja 2021 lub do wyczerpania zapas\xf3w "}],B=(c(25),function(e){return Object(d.jsxs)("div",{className:"slider-container__grid__info",children:[Object(d.jsx)("h2",{className:"slider-container__grid__info__h2",children:A[e.index].h2}),Object(d.jsx)("h1",{className:"slider-container__grid__info__h1",children:A[e.index].h1}),Object(d.jsx)("p",{className:"slider-container__grid__info__paragraph",children:A[e.index].p}),Object(d.jsx)("button",{className:"slider-container__grid__info__button",children:"Zobacz Wi\u0119cej"})]})}),M=(c(26),function(e){return Object(d.jsx)("div",{className:"slider-container__grid__image",children:Object(d.jsx)("img",{className:"slider-container__grid__image__img",src:A[e.index].imageSrc,alt:"XDDDDD"})})}),W=(c(27),function(e){return Object(d.jsxs)("div",{className:"changeButtons-container",children:[Object(d.jsx)("div",{className:"changeButtons previous",onClick:e.next,children:Object(d.jsx)("button",{className:"changeButtons-btn",children:">"})}),Object(d.jsx)("div",{className:"changeButtons next",onClick:e.previous,children:Object(d.jsx)("button",{className:"changeButtons-btn",children:"<"})})]})}),I=(c(28),function(){return Object(d.jsxs)("div",{className:"SVG-container",children:[Object(d.jsx)("svg",{className:"SVG-container__element el-1",width:"256",height:"547",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(d.jsx)("svg",{className:"SVG-container__element el-2",width:"256",height:"550",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(d.jsx)("svg",{className:"SVG-container__element el-3",width:"256",height:"547",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(d.jsx)("svg",{className:"SVG-container__element el-4",width:"256",height:"550",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})})]})}),D=(c(29),function(){var e=i.useState(0),t=Object(r.a)(e,2),c=t[0],n=t[1],a=i.useState(!0),s=Object(r.a)(a,2),l=s[0],o=s[1];i.useEffect((function(){var e=setTimeout((function(){o(!1),setTimeout((function(){n(2===c?0:c+1)}),500)}),8e3);return function(){return clearTimeout(e)}}),[c]),i.useEffect((function(){setTimeout((function(){o(!0)}),500)}),[l]);var j=function(){var e=Object(P.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!1),setTimeout((function(){n(2===c?0:c+1)}),500);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"slider-container",children:[Object(d.jsx)(I,{}),Object(d.jsxs)("div",{style:{opacity:l?"1":"0",transition:"all .5s"},className:"slider-container__grid",children:[Object(d.jsx)(M,{index:c}),Object(d.jsx)(B,{index:c})]}),Object(d.jsx)(W,{next:j,previous:function(){o(!1),setTimeout((function(){n(0===c?2:c-1)}),500)}})]})}),E=(c(30),function(e){var t=e.category;return Object(d.jsxs)("div",{className:"category",children:[Object(d.jsx)("div",{className:"category__container",children:Object(d.jsx)("img",{className:"category__image",src:t.img,alt:""})}),Object(d.jsx)("h3",{className:"category__title",children:t.title})]})}),G=c.p+"static/media/pc.cd7b0fb9.png",Z=c.p+"static/media/graph.55e02018.png",L=c.p+"static/media/proc.fdfc10cd.jpg",V=c.p+"static/media/mother.df6e3282.webp",H=[{img:G,title:"komputery"},{img:Z,title:"grafika"},{img:L,title:"procesory"},{img:c.p+"static/media/disc.bb0cb52b.jpg",title:"Dyski ssd"},{img:V,title:"P\u0142yty g\u0142\xf3wne"},{img:c.p+"static/media/more.83d41fbd.jpg",title:"Wi\u0119cej"}],T=(c(31),function(){return Object(d.jsx)("div",{className:"imageNav",children:H.map((function(e,t){return Object(d.jsx)(E,{category:e},t)}))})}),F=(c(32),function(){return Object(d.jsxs)("div",{className:"SVG-container",children:[Object(d.jsx)("svg",{className:"SVG-container__element elb-1",width:"256",height:"547",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(d.jsx)("svg",{className:"SVG-container__element elb-2",width:"256",height:"550",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(d.jsx)("svg",{className:"SVG-container__element elb-3",width:"256",height:"547",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})}),Object(d.jsx)("svg",{className:"SVG-container__element elb-4",width:"256",height:"550",viewBox:"0 0 256 547",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M-226.134 -238.185C-356.745 -120.64 -242.534 65.9616 -246.777 190.277C-250.537 300.453 -398.616 364.422 -246.417 483.104C-188.404 528.342 -64.1767 542.636 9.37961 543.575C82.9359 544.514 171.712 483.36 216.282 395.328C321.181 188.135 172.233 199.082 154.908 124.672C127.237 5.83047 264.591 -104.453 206.141 -214.484C104.404 -405.999 -115.878 -337.412 -226.134 -238.185Z",stroke:"#30BCC5",strokeWidth:"5"})})]})}),J=(c(33),{imageSrc:c.p+"static/media/pcservice.4c926baa.webp",h1:"Nie posiadasz wiedzy w dziedzinie budowania komputer\xf3w?",p:"Nie ma problemu zostaw to nam!"}),U=(c(34),function(){return Object(d.jsxs)("div",{className:"firstAd__Info",children:[Object(d.jsx)("h1",{className:"firstAd__Info__h1",children:J.h1}),Object(d.jsx)("p",{className:"firstAd__Info__p",children:J.p}),Object(d.jsx)("button",{className:"firstAd__Info__btn",children:"Dowiedz si\u0119 wi\u0119cej"})]})}),X=(c(35),function(){return Object(d.jsx)("div",{className:"firstAdImg",children:Object(d.jsx)("img",{className:"firstAdImg__img",src:J.imageSrc,alt:""})})}),K=function(){return Object(d.jsxs)("div",{className:"firstAd",children:[Object(d.jsx)(F,{}),Object(d.jsxs)("div",{className:"firstAd__grid",children:[Object(d.jsx)(U,{}),Object(d.jsx)(X,{})]})]})},q=c(7),Q=(c(36),function(e){return Object(d.jsxs)("div",{className:"offerHeader",children:[Object(d.jsx)("h2",{className:"offerHeader__title",children:"Oferta"}),Object(d.jsxs)("ul",{className:"offerHeader__list",onClick:e.whichActive,children:[Object(d.jsx)("li",{className:"offerHeader__list__item active",id:"0",children:"Polecamy"}),Object(d.jsx)("li",{className:"offerHeader__list__item",id:"1",children:"Nowo\u015bci"}),Object(d.jsx)("li",{className:"offerHeader__list__item",id:"2",children:"Bestsellery"})]})]})}),Y=(c(37),c(38),c.p+"static/media/star.de82f684.svg"),$=c.p+"static/media/emptystar.95a3c21b.svg",ee=(c(39),function(e){var t=e.rating;return Object(d.jsx)("div",{className:"rating",children:Object(d.jsx)("ul",{className:"rating__list",children:Object(q.a)(Array(5)).map((function(e,c){return Object(d.jsx)("li",{className:"rating__list__item",children:Object(d.jsx)("img",{className:"rating__list__item__image",src:c<t?Y:$,alt:""})},c)}))})})}),te=function(e){var t=e.item;return Object(d.jsxs)("div",{className:"product",id:"productFlex",children:[Object(d.jsx)("div",{className:"product__popover",children:Object(d.jsxs)("div",{className:"product__popover__container",children:[Object(d.jsx)("div",{className:"product__popover__container__option",children:"Zobacz"}),Object(d.jsx)("div",{className:"product__popover__container__option",children:"Dodaj do ulubionych"}),Object(d.jsx)("div",{className:"product__popover__container__option",children:"Dodaj do koszyka"})]})}),Object(d.jsx)("div",{className:"product__imgContainer",children:Object(d.jsx)("img",{className:"product__imgContainer__img",src:t.imgSrc,alt:""})}),Object(d.jsxs)("div",{className:"product__descriptionContainer",children:[Object(d.jsx)("h3",{className:"product__descriptionContainer__title",children:t.title}),Object(d.jsx)(ee,{rating:t.rating}),Object(d.jsxs)("div",{className:"product__descriptionContainer__price",children:[t.price," ",t.currency]})]})]})},ce=(c(10),function(e){var t=e.active;return Object(d.jsx)("div",{className:"offerProductsContainer",children:Object(d.jsx)("div",{className:"offerProductsContainer__grid",children:t.map((function(e,t){return Object(d.jsx)(te,{item:e},t)}))})})}),ie=[{imgSrc:G,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:4,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:1,price:12e3,currency:"pln"}],ne=[{imgSrc:G,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:5,price:12e3,currency:"pln"}],ae=function(){var e=i.useState(ie),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{className:"offer",children:[Object(d.jsx)(Q,{whichActive:function(e){var t=e.target;if(!t.classList.contains("active")&&"LI"===t.tagName){Object(q.a)(e.currentTarget.children).forEach((function(e){e.classList.remove("active")})),t.classList.add("active");var c=[ie,ne,ie],i=+t.id;n(c[i])}}}),Object(d.jsx)(ce,{active:c})]})},re=c.p+"static/media/secondAd.13521624.jpg",se=(c(40),function(){return Object(d.jsx)("div",{className:"secondAd",children:Object(d.jsx)("img",{className:"secondAd__img",src:re,alt:""})})}),le=(c(41),function(e){return Object(d.jsxs)("div",{className:"contactShortcut",children:[Object(d.jsx)("div",{className:"contactShortcut__imgContainer",children:Object(d.jsx)("img",{className:"contactShortcut__imgContainer__img",src:e.imgSrc,alt:""})}),Object(d.jsxs)("div",{className:"contactShortcut__textContainer",children:[Object(d.jsx)("h4",{className:"contactShortcut__textContainer__title",children:e.title}),Object(d.jsx)("p",{className:"contactShortcut__textContainer__desc",children:e.description})]})]})}),oe=[{title:"Bezp\u0142atny kontack 24/7",description:"online lub telefonicznie",imgSrc:c.p+"static/media/cust.937ce3be.svg"},{title:"Dostarczamy na ca\u0142y \u015bwiat",description:"przy przesy\u0142kach powyzej 150PLN",imgSrc:c.p+"static/media/dtruck.8e98e980.png"},{title:"Gwarancja zakupu",description:"tylko sprawdzone metodyp\u0142atno\u015bci",imgSrc:c.p+"static/media/d-card.6a6246b4.svg"}],de=(c(42),function(){return Object(d.jsx)("div",{className:"contactShortcuts",children:oe.map((function(e,t){return Object(i.createElement)(le,Object(u.a)(Object(u.a)({},e),{},{key:t}))}))})}),je=c.p+"static/media/thirdAd.51373a9d.jpg",me=(c(43),function(){return Object(d.jsx)("div",{className:"thirdAd",children:Object(d.jsx)("img",{className:"thirdAd__img",src:je,alt:""})})}),ue=(c(44),c(45),function(e){var t=e.active;return Object(d.jsx)("div",{className:"offerProductsContainer",children:Object(d.jsx)("div",{className:"offerProductsContainer__grid",children:t.map((function(e,t){return Object(d.jsx)(te,{item:e},t)}))})})}),_e=[{imgSrc:G,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:4,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:2,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:3,price:12e3,currency:"pln"},{imgSrc:G,title:"Pc Razor",rating:5,price:12e3,currency:"pln"},{imgSrc:L,title:"Pc Razor",rating:1,price:12e3,currency:"pln"}],he=function(){return Object(d.jsxs)("div",{className:"lastAdded",children:[Object(d.jsx)("div",{className:"lastAdded__header",children:Object(d.jsx)("h2",{className:"lastAdded__header__title",children:"Ostatnio dodane"})}),Object(d.jsx)(ue,{active:_e})]})},be=function(){return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(D,{}),Object(d.jsx)(T,{}),Object(d.jsx)(K,{}),Object(d.jsx)(ae,{}),Object(d.jsx)(se,{}),Object(d.jsxs)("div",{className:"main__inner",children:[Object(d.jsx)(de,{}),Object(d.jsx)(me,{}),Object(d.jsx)(he,{})]})]})},pe=(c(46),function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(y,{}),Object(d.jsx)(be,{})]})});a.a.render(Object(d.jsx)(pe,{}),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.f490a39c.chunk.js.map