let allCards = document.querySelectorAll('.swiper-slide');
let cardFocus = document.querySelector('.swiper-slide-fully-visible');


allCards.forEach((item) =>{
  item.classList.add('opacityGrey');
})
cardFocus.classList.add('opacityFull');


document.addEventListener('click',(e) =>{
  if(e.target.matches('.swiper-button-next')){
    let allCards = document.querySelectorAll('.swiper-slide');
    let cardFocus = document.querySelector('.swiper-slide-fully-visible');


    allCards.forEach((item) =>{
      item.classList.add('opacityGrey');
      item.classList.remove('opacityFull');
    })
    cardFocus.classList.add('opacityFull');
    cardFocus.classList.remove('opacityGrey');
  }
  if(e.target.matches('.swiper-button-prev')){
    let allCards = document.querySelectorAll('.swiper-slide');
    let cardFocus = document.querySelector('.swiper-slide-fully-visible');


    allCards.forEach((item) =>{
      item.classList.add('opacityGrey');
      item.classList.remove('opacityFull');
    })
    cardFocus.classList.add('opacityFull');
    cardFocus.classList.remove('opacityGrey');
  }
})

