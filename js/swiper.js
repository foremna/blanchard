const heroSwiper = new Swiper('.hero__inner-sliders', {
  // Optional parameters
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
