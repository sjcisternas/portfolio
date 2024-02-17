const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'coverflow',
  loop:false,
  slidesPerView: '2',
  centeredSlides:true,
  coverflowEffect:{
    depth:500,
    modifier:1,
    rotate:0,
    slideShadows:false,
    stretch: 150
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});