let buttons = document.getElementsByClassName("content-section__button--with-position")

let contentSection = document.querySelector(".content-section__list-text")
let logo = document.querySelector(".content__logo")


contentSection.setAttribute("style","height:"+(logo.clientHeight)+"px");

// console.log(contentSection.clientHeight)
// console.log(contentSection.offsetHeight)
// console.log(contentSection.scrollHeight)

if (contentSection.clientHeight == contentSection.scrollHeight) {
  contentSection.style.height = 'fit-content';
}

let fitContent = false

window.addEventListener('resize', function() {

  if ((contentSection.clientHeight == contentSection.scrollHeight && contentSection.clientHeight <= logo.clientHeight || fitContent == true)) {
    contentSection.style.height = 'fit-content'
    } else {
      contentSection.setAttribute("style","height:"+(logo.clientHeight)+"px");
    }
})


let changeHeight = function(cButton, parent, text, img, height, list, textAttr) {
  cButton.addEventListener('click', function() {
    if (cButton.classList.contains('content-section__button--position--up')) {
      list.style.overflowY = 'visible';
      list.style.height = 'fit-content';
      fitContent = true
      list.style.maxHeight = "none";
      text.textContent = 'Скрыть';
      img.src="img/expand_down.svg";
  } else {
      list.style.overflowY = 'hidden';
      fitContent = false
      if (textAttr == 'Читать далее') {
        list.style.height = null;
        // list.setAttribute("style","height:"+(logo.clientHeight)+"px");
        if (contentSection.clientHeight >= logo.offsetHeight) {
          list.setAttribute("style","height:"+(logo.clientHeight)+"px");
        } else {
          list.setAttribute("style","height:"+(contentSection.clientHeight)+"px");
        }
      } else {
        list.style.height = null;
      }
      text.textContent = textAttr;
      img.src="img/expand.svg"; 
  }
  cButton.classList.toggle('content-section__button--position--up');
  cButton.classList.toggle('content-section__button--position--down');
  })
}


for (i = 0; i < buttons.length; i++) {
  let parent = buttons[i].closest(".content-section");
  let text = parent.querySelector('.content-section__text-button');
  let textAttr = text.textContent;
  let img = parent.querySelector('.content-section__img-button');
  let height = parent.querySelector('.for-height-attribute').offsetHeight;
  let list = parent.querySelector('[class*='+'__list'+']')
  changeHeight(buttons[i], parent, text, img, height, list, textAttr)
}