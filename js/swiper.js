// Gallery swiper slider
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
  breakpoints:{
    741:{
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

// Events swiper slider
const eventsInner = document.querySelector('.events__inner')

let eventsSwiper;

function sliderCatalog () {
  if (window.innerWidth <= 740 && eventsInner.dataset.mobile == 'false') {
    eventsSwiper = new Swiper(eventsInner, {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 1,
      spaceBetween: 50
    })

		eventsInner.dataset.mobile = 'true'
  }

	if (window.innerWidth > 740) {
    eventsInner.dataset.mobile = 'false'
    if (eventsInner.classList.contains('swiper-container-initialized')) {
      eventsSwiper.destroy()
    }
  }
}

window.addEventListener('resize', () => {
  sliderCatalog()
})

window.addEventListener('load', () => {
  sliderCatalog()
})

// Editions swiper slider
const editionsInner = document.querySelector('.editions__inner')

let editionsSwiper;

function sliderEditions () {
  if (window.innerWidth >= 740 && editionsInner.dataset.mobile == 'false') {
    editionsSwiper = new Swiper(editionsInner, {
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
          spaceBetween: 37,
        },
        920:{
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
        1440:{
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        }
      }
    })
  }

	if (window.innerWidth < 740) {
    editionsInner.dataset.mobile = 'false'
    if (editionsInner.classList.contains('swiper-container-initialized')) {
      editionsSwiper.destroy()
    }
  }
}

window.addEventListener('resize', () => {
  sliderEditions()
})

window.addEventListener('load', () => {
  sliderEditions()
})

// Projects slider
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
    640:{
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    920:{
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1441:{
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
})