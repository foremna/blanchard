const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 5000,
  allowTouchMove: true,
  autoplay: {
    delay: 3000,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const gallerySwiper = new Swiper('.gallery__slider-inner', {
  pagination: {
    el: '.counter',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.btn-arrow--next',
    prevEl: '.btn-arrow--prev',
  },
  a11y: {
    notificationClass: 'swiper-notification',
  },
  keyboardControl: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
  },
  spaceBetween: 15,
  slidersPerColumnFill: 'row',
  breakpoints:{
    641:{
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },

    1441:{
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    }
  }
});