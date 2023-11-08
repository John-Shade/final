var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination--brand",
    },
    mousewheel: true,
    keyboard: true,
  });
  

  
var swiper2 = new Swiper(".mySwiper--card", {
  slidesPerView: "auto",
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination--card",
    // el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});



var swiper3 = new Swiper(".mySwiper--price", {
  slidesPerView: "auto",
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination--price",
    // el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
