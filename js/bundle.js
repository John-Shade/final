!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5)},function(e,t,n){},function(e,t){var n=document.querySelectorAll(".sidebar"),o=document.getElementsByClassName("header__button--close"),r=document.querySelector(".main"),l=(document.querySelector(".swiper-wrapper"),document.querySelectorAll(".swiper")),s=document.querySelectorAll(".swiper-pagination");function c(){for(var e=0;e<n.length;e++)n[e].style.display="none",n[e].classList.remove("open"),document.body.style.overflow="auto",r.style.position="initial",r.style.opacity="1";d()}r.addEventListener("mouseup",(function(e){1!=getComputedStyle(document.querySelector(".main")).opacity&&c()}));var a=function(e,t){e.addEventListener("click",(function(){t.style.display="none",t.classList.remove("open"),function(){for(var e=!0,t=0;t<n.length;t++)n[t].classList.contains("open")&&(e=!1),e&&(r.style.opacity="1",document.body.style.overflow="auto",r.style.position="initial");d()}()}))};for(i=0;i<o.length;i++){var u=o[i].closest(".sidebar");a(o[i],u)}var p=["button-call","button-chat","button-left-sidebar"];function d(){for(var e=0;e<l.length;e++)l[e].style.display="block",s[e].style.display="block"}var y=function(e,t){e.addEventListener("click",(function(){t.style.display="flex",t.classList.add("open"),r.style.position="fixed",t.style.overflow="auto",r.style.opacity="0.09",function(){for(var e=0;e<l.length;e++)l[e].style.display="none",s[e].style.display="none"}()}))};for(j=0;j<p.length;j++){var f=document.getElementsByClassName(p[j]);for(i=0;i<f.length;i++){var g=document.querySelector("[id="+p[j].split("-").pop()+"]");y(f[i],g)}}document.getElementsByClassName("card_list");document.addEventListener("keydown",(function(e){"Escape"===e.key&&c()}))},function(e,t){new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination--brand"},mousewheel:!0,keyboard:!0}),new Swiper(".mySwiper--card",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination--card"},mousewheel:!0,keyboard:!0}),new Swiper(".mySwiper--price",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination--price"},mousewheel:!0,keyboard:!0})},function(e,t){var n=document.getElementsByClassName("content-section__button--with-position"),o=document.querySelector(".content-section__list-text"),r=document.querySelector(".content__logo");o.setAttribute("style","height:"+r.clientHeight+"px"),o.clientHeight==o.scrollHeight&&(o.style.height="fit-content");var l=function(e,t,n,i,l,s,c){e.addEventListener("click",(function(){e.classList.contains("content-section__button--position--up")?(s.style.overflowY="visible",s.style.height="fit-content",s.style.maxHeight="none",n.textContent="Скрыть",i.src="img/expand_down.svg"):(s.style.overflowY="hidden","Читать далее"==c?(s.style.height=null,o.clientHeight>=r.offsetHeight?s.setAttribute("style","height:"+r.clientHeight+"px"):s.setAttribute("style","height:"+o.clientHeight+"px")):s.style.height=null,n.textContent=c,i.src="img/expand.svg"),e.classList.toggle("content-section__button--position--up"),e.classList.toggle("content-section__button--position--down")}))};for(i=0;i<n.length;i++){var s=n[i].closest(".content-section"),c=s.querySelector(".content-section__text-button"),a=c.textContent,u=s.querySelector(".content-section__img-button"),p=(s.querySelector(".for-height-attribute").offsetHeight,s.querySelector("[class*=__list]"));l(n[i],0,c,u,0,p,a)}}]);
//# sourceMappingURL=bundle.js.map