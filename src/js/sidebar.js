let sidebars = document.querySelectorAll(".sidebar")
let closeButtons = document.getElementsByClassName("header__button--close")
let main = document.querySelector(".main")

let swiper = document.querySelector(".swiper-wrapper")
let swipers = document.querySelectorAll(".swiper")
// let swipers = document.querySelectorAll(".swiper-wrapper")
let swipersPag = document.querySelectorAll(".swiper-pagination")


// mySwiper.destroy();

function closeAll() {
    for (let i = 0; i < sidebars.length; i++) {
      sidebars[i].style.display = "none";
      sidebars[i].classList.remove('open')
      // document.body.style.overflow = "auto";
      main.style.position = "initial";
      main.style.opacity = "1";
    }
    addSwiper()
  }
  
  
  main.addEventListener('mouseup', function (evt) {
    // console.log(getComputedStyle(document.querySelector(".main")).opacity)
    if (getComputedStyle(document.querySelector(".main")).opacity != 1) {
      closeAll()
    }
  });
  
  function changeOpacity() {
    let b = true
    for (let i = 0; i < sidebars.length; i++) {
      if (sidebars[i].classList.contains('open')) {
        b = false
      }
      if (b) {
        main.style.opacity = "1";
        // document.body.style.overflow = "auto";
        main.style.position = "initial";
      }
    }
    addSwiper()
  }
  
  
  let close = function(cButton, parent) {
    cButton.addEventListener('click', function() {
      parent.style.display = "none";
      parent.classList.remove('open')
      changeOpacity()
    })
  }
  
  for (i = 0; i < closeButtons.length; i++) {
    let parent = closeButtons[i].closest(".sidebar")
    close(closeButtons[i], parent)
  }
  
  let a = 'button-call'
  
  let Buttons = ['button-call', 'button-chat', 'button-left-sidebar']
  
  // window.onscroll = () => window.scroll(0, 0);



function addSwiper() {
  for (let i = 0; i < swipers.length; i++) {
    swipers[i].style.display = 'block'
    swipersPag[i].style.display = 'block'
  }
 }

  
function delSwiper() {
  for (let i = 0; i < swipers.length; i++) {
    swipers[i].style.display = 'none'
    swipersPag[i].style.display = 'none'
  }
}
  
  let open = function(oButton, parent) {
    oButton.addEventListener('click', function() {
      parent.style.display = "flex";
      parent.classList.add('open')
      main.style.position = "fixed";
      // parent.style.overflow = "auto";
      main.style.opacity = "0.09";

      delSwiper();
    })
  }
  
  for (j = 0; j < Buttons.length; j++) {
    let callButtons = document.getElementsByClassName(Buttons[j])
    for (i = 0; i < callButtons.length; i++) {
      let sb = document.querySelector('[id='+Buttons[j].split("-").pop()+']')
      open(callButtons[i], sb)
    }
  }
  
  let cardList = document.getElementsByClassName('card_list')
  
  document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
      closeAll()
    }
  });