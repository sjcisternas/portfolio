const swiper = new Swiper('.swiper', {
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