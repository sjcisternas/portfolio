let swiper = new Swiper('.swiper', {
  // parametros
  direction: 'horizontal',
  effect: 'coverflow',
  loop:false,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides:true,
  allowTouchMove:false,
  coverflowEffect:{
    depth:500,
    modifier:1,
    rotate:0,
    slideShadows:false,
    stretch: 150
  },
  
  // paginacion
  pagination: {
    el: '.swiper-pagination',
  },
  
  // flechas swipe para navegacion
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    1500:{
      allowTouchMove:false,
      slidesPerView: 2,
      coverflowEffect:{
        depth:500,
      }
    },
    1440:{
      allowTouchMove:false,
      slidesPerView: 2,
      coverflowEffect:{
        depth:400,
      }
    },
    1302:{
      allowTouchMove:false,
      slidesPerView: 2,
      coverflowEffect:{
        depth:300,
      }
    },
    1200:{
      allowTouchMove:false,
      slidesPerView: 2,
      coverflowEffect:{
        depth:200,
      },
      spaceBetween: 300,
    },
    1100: {
      allowTouchMove:false,
      slidesPerView: 2,
      coverflowEffect:{
        depth:50,
      },
      spaceBetween: 300,
    },
    1024:{
      allowTouchMove:false,
      slidesPerView: 2,
      coverflowEffect:{
        depth:0,
      },
      spaceBetween: 400,
    },
    768:{
      slidesPerView:1.6,
      allowTouchMove:true,
      coverflowEffect:{
        depth:0,
      },
      spaceBetween: 500,
    },
    200:{
      slidesPerView:1,
      allowTouchMove:true,
      coverflowEffect:{
        depth:0,
      },
      spaceBetween: 700,
    }
  }
});

/* ESCONDER/MOSTRAR FLECHAS */

const botonPrev = document.querySelector('.swiper-button-prev');
const botonNext = document.querySelector('.swiper-button-next');

const esconderFlechas = () => {
  botonPrev.classList.add('d-none');
  botonNext.classList.add('d-none');
}

const mostrarFlechas = () => {
  botonPrev.classList.remove('d-none');
  botonNext.classList.remove('d-none');
}

/* FOCUS */
let anchoVentana = window.innerWidth;

const focus = () => {
  let allCards = document.querySelectorAll('.swiper-slide');
  let cardFocus = document.querySelector('.swiper-slide-fully-visible');

  allCards.forEach((item) =>{
    item.classList.add('opacityGrey');
  })
  cardFocus.classList.add('opacityFull');
}

if(anchoVentana > 1024){
  mostrarFlechas();
  focus();

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
  });
}else{
  esconderFlechas();
}

window.addEventListener('resize', () => {
  let anchoVentana = window.innerWidth;
  if(anchoVentana > 1024){
    mostrarFlechas();
    focus();
  
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
    });
  }else{
    esconderFlechas();
    let allCards = document.querySelectorAll('.swiper-slide');
    allCards.forEach((item) =>{
      item.classList.remove('opacityGrey');
      item.classList.remove('opacityFull');
    })
  }
})