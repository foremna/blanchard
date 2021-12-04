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
})

let mqInitEventsSwiper = window.matchMedia('(max-width: 740px)');

function initIfMqmSwiperCatalog () {
  if (mqInitEventsSwiper.matches) {
    const eventsSwiper = new Swiper('.events__inner', {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 1,
      spaceBetween: 50
    })
  } else {
    swiper.destroy()
  }
}

window.addEventListener('resize', () => {
  initIfMqmSwiperCatalog  
})

window.addEventListener('load', () => {
  initIfMqmSwiperCatalog()
})


let mqInitEditionsSwiper = window.matchMedia('(min-width: 641px)');

function initIfMqmSwiperEditions () {
  if (mqInitEditionsSwiper.matches) {
    const editionsSwiper = new Swiper('.editions__inner', {
      pagination: {
        el: '.editions__inner .counter',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.editions__inner .btn-arrow--next',
        prevEl: '.editions__inner .btn-arrow--prev',
      },
      a11y: {
        notificationClass: 'swiper-notification',
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      breakpoints:{
        640:{
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1440:{
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        }
      }
    })
  } else {
    swiper.destroy()
  }
}

window.addEventListener('resize', () => {
  initIfMqmSwiperEditions()
})

window.addEventListener('load', () => {
  initIfMqmSwiperEditions()
})

const projectsSwiper = new Swiper('.projects__inner', {
  navigation: {
    nextEl: '.projects .btn-arrow--next',
    prevEl: '.projects .btn-arrow--prev',
  },
  a11y: {
    notificationClass: 'swiper-notification',
  },
  keyboardControl: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints:{
    641:{
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },

    1441:{
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
})