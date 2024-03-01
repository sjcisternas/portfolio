/* CARRUSEL 1024 */

const carrusel1024 = () => {
let swiper = new Swiper('.swiper', {
  // parametros
  direction: 'horizontal',
  effect: 'coverflow',
  loop:false,
  slidesPerView: '2',
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
      coverflowEffect:{
        depth:500,
      }
    },
    1440:{
      coverflowEffect:{
        depth:400,
      }
    },
    1302:{
      coverflowEffect:{
        depth:300,
      }
    },
    1200:{
      coverflowEffect:{
        depth:200,
      },
      spaceBetween: 300,
    },
    1100: {
      coverflowEffect:{
        depth:50,
      },
      spaceBetween: 300,
    },
    1024:{
      coverflowEffect:{
        depth:0,
      },
      spaceBetween: 400,
    }
  }
});
}

/* CARRUSEL TABLET */

const carruselTablet = () => {
  let swiper = new Swiper('.swiper', {
    // parametros
    direction: 'horizontal',
    loop: true,
    slidesPerView: '2',
    spaceBetween: 10,
    centeredSlides:true,
    allowTouchMove:true,
       
    // paginacion
    pagination: {
      el: '.swiper-pagination',
    },
    
    // flechas swipe para navegacion
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
};


/* FOCUS */


const focus = () => {
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
  });
}

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




let anchoVentana = window.innerWidth;


if(anchoVentana > 1024){
  carrusel1024();
  focus();
  mostrarFlechas();
}
if(anchoVentana <= 1024 && anchoVentana >= 720){
  carruselTablet();
  esconderFlechas();
}

/* ACTUALIZACIÓN SEGÚN EL ANCHO DE LA VENTANA */



window.onresize = function(){
  anchoVentana = window.innerWidth;
  if(anchoVentana >= 1024){
    carrusel1024();
    focus();
    mostrarFlechas();
  }
  if(anchoVentana < 1024 && anchoVentana >= 720){
    carruselTablet();
    esconderFlechas();
  }
};






 

 