/*
--> Disclaimer: some functional it could seem stranged, 
		but this project requires technologies Pixel Perfect, 
		therefore some places in the code may seem bad..
		This not i, this all Pixel Perfect :с
*/

const itemsArts = document.querySelectorAll('.header-arts__item')
const btnSearch = document.querySelector('.search__btn')
const search = document.querySelector('.search')
const searchInput = search.querySelector('input')
const hamburger = document.querySelector('.hamburger')
const searchBtnReset = document.querySelector('.search__btn-reset')
const tabletNav = document.querySelector('.tablet-nav')

// Open & close hamburger
hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('active')
	tabletNav.classList.toggle('open')
})

// Open & close dropdown arts
for (const item of itemsArts) {
	item.addEventListener('click', function () {
		for (const otherItem of itemsArts) {
			if (otherItem !== item) {
				otherItem.classList.remove('open-dropdown')
			}
			item.classList.toggle('open-dropdown')
		}
	})
}

// Open & close search
btnSearch.addEventListener('click', function (e) {
	e.preventDefault()
	search.classList.toggle('active')
})

// Cleaning search input
searchBtnReset.addEventListener('click', function (e) {
	e.preventDefault()
	searchInput.value = ''
})

// Activation slider hero after load layout
const hero = document.querySelector('.hero')

window.addEventListener('load', () => {
	hero.classList.add('bg-slider')
})

// Initialization choices select
const selects = document.querySelectorAll('select');
for (const select of selects) {
	const elem = new Choices(select, {
		searchEnabled: false,
	})
}

// Switching painters
const linkAuthors = document.querySelectorAll('.catalog__accordion-painter-btn')

linkAuthors.forEach(function (linkItemAuthor) {
	linkItemAuthor.addEventListener('click', function (event) {
		const pathDataLinkAuthor = event.currentTarget.dataset.changeAuthor
		const tabsContent = document.querySelectorAll('.catalog__tab-content')

		tabsContent.forEach(function (tabItem) {
			tabItem.classList.remove('visible')

			setTimeout(() => {
				tabItem.classList.remove('active')
			}, 200)

			setTimeout(() => {
				tabItem.classList.add('deactive')
			}, 600)
		})

		const currentTab = document.querySelector(`[data-current-author="${pathDataLinkAuthor}"]`)

		setTimeout(() => {
			currentTab.classList.remove('deactive')
		}, 800)

		setTimeout(() => {
			currentTab.classList.add('active')
		}, 600)

		setTimeout(() => {
			currentTab.classList.add('visible')
		}, 700)

		for (const otherLink of linkAuthors) {
			if (otherLink !== linkItemAuthor) {
				otherLink.classList.remove('active')
			}
		}
		linkItemAuthor.classList.add('active')
	})
})

// Switching accordion
const accordionButtons = document.querySelectorAll('.catalog__accordion-btn')

for (const accordionBtn of accordionButtons) {
	accordionBtn.addEventListener('click', function () {

		const itemAccordion = accordionBtn.parentElement

		const openAccordion = function (btn) {
			const content = btn.querySelector('.catalog__accordion-content')
			const btnsPainter = content.querySelectorAll('.catalog__accordion-painter-btn')

			if (btnsPainter.length >= 9) {
				content.style.minHeight = 290 + 'px'
			}

			content.style.maxHeight = content.scrollHeight + 'px'
		}

		const closeAccordion = function (btn) {
			const content = btn.querySelector('.catalog__accordion-content')
			const btnsPainter = content.querySelectorAll('.catalog__accordion-painter-btn')

			if (btnsPainter.length >= 9) {
				content.style.minHeight = 0
			}

			content.style.maxHeight = 0
		}

		for (const otherAccordionBtn of accordionButtons) {
			const parentAccordionBtn = otherAccordionBtn.parentElement

			if (parentAccordionBtn !== itemAccordion) {
				parentAccordionBtn.classList.remove('active')
				closeAccordion(parentAccordionBtn)
			}
		}

		itemAccordion.classList.toggle('active')
		openAccordion(itemAccordion)

		if (!itemAccordion.classList.contains('active')) {
			closeAccordion(itemAccordion)
		}
	})
}

// Switching tabs catalog
const tabButtons = document.querySelectorAll('.tab-button')

tabButtons.forEach(function (tabButton) {
	tabButton.addEventListener('click', function (event) {
		const pathDataTabButton = event.currentTarget.dataset.changeLang
		const tabsContent = document.querySelectorAll('.catalog__tabs-body')

		tabsContent.forEach(function (tabItem) {
			tabItem.classList.remove('visible')

			setTimeout(() => {
				tabItem.classList.remove('active')
			}, 600)

			setTimeout(() => {
				tabItem.classList.add('deactive')
			}, 600)
		})

		const currentTab = document.querySelector(`[data-current-lang="${pathDataTabButton}"]`)

		setTimeout(() => {
			currentTab.classList.remove('deactive')
		}, 800)

		setTimeout(() => {
			currentTab.classList.add('active')
		}, 600)

		setTimeout(() => {
			currentTab.classList.add('visible')
		}, 700)

		for (const otherBtn of tabButtons) {
			if (otherBtn !== tabButtons) {
				otherBtn.classList.remove('active')
			}
		}

		tabButton.classList.toggle('active')
	})
})

// Show & hide all events whichever media quaries or click btn show all events
const eventSliders = document.querySelectorAll('.events__slide')
const btnShowAllEvents = document.querySelector('#show-all-events')

let mqTwoShowEvents = window.matchMedia('(max-width: 940px)')
let mqmShowAllEvents = window.matchMedia('(max-width: 740px)')

for (let i = 0; i < eventSliders.length; i++) {
	if (i < 3) {
		eventSliders[i].classList.remove('hide')
	}
}

function mqShowEvents(el) {
	if (mqTwoShowEvents.matches) {
		for (let i = 0; i < el.length; i++) {
			if (i > 1) {
				el[i].classList.add('hide')
			}

			if (i < 1) {
				el[i].classList.remove('hide')
			}
		}
	} else {
		for (let i = 0; i < el.length; i++) {
			if (i < 3) {
				el[i].classList.remove('hide')
			}
		}
	}
}

// Removes class hide from the element argument
function showAllEvents(el) {
	for (const item of el) {
		item.classList.remove('hide')
	}
}

window.addEventListener('resize', () => {
	mqShowEvents(eventSliders)

	if (mqmShowAllEvents.matches) {
		showAllEvents(eventSliders)
	}
})

window.addEventListener('load', () => {
	mqShowEvents(eventSliders)

	if (mqmShowAllEvents.matches) {
		showAllEvents(eventSliders)
	}
})

// Show all events, then hide btn
btnShowAllEvents.addEventListener('click', function () {
	showAllEvents(eventSliders)

	this.classList.add('hide')
})

//Digit of numbers
const nums = document.querySelectorAll('.number')

for (const num of nums) {
	num.addEventListener('input', function () {
		this.value = this.value.replace(/ /g, "");
		this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	})
}

// Show checked checkboxes, hided unchecked, and add interactive paragraph
const editionsCheckboxes = document.querySelectorAll('.editions input[type="checkbox"]')
const paragraphCategoryEditions = document.querySelector('.editions__filter-paragraph--category')

paragraphCategoryEditions.addEventListener('click', function () {
	this.classList.toggle('rotate-arrow')
})

for (const checkbox of editionsCheckboxes) {
	paragraphCategoryEditions.addEventListener('click', function () {
		if (!checkbox.checked) {
			checkbox.parentElement.classList.toggle('hide')
		}
	})

	if (!checkbox.checked) {
		checkbox.parentElement.classList.toggle('hide')
	}

	checkbox.addEventListener('change', function () {
		if (!checkbox.checked) {
			checkbox.parentElement.classList.add('hide')
		}
	})
}

// Functional tooltips
const tooltips = document.querySelectorAll('.tooltip__btn-tooltip')

for (const tooltip of tooltips) {
	let tooltipPathData = tooltip.dataset.textTooltip
	tooltip.nextElementSibling.textContent = tooltipPathData
	tooltip.setAttribute('aria-label', tooltipPathData)
}

// Paste aria-label of img in link
const projectsImages = document.querySelectorAll('.projects__image')

for (const img of projectsImages) {
	let imgAttrAlt = img.getAttribute('alt')
	let imgParent = img.parentElement
	imgParent.setAttribute('aria-label', imgAttrAlt)
}

// Connect Yandex Maps for Tablet and up & lazy load YMaps
let flagForDesktopYMaps = false
function initYMapAtScroll() {
	let scrollY = window.scrollY
	let map = document.querySelector('.map')
	let { top } = map.getBoundingClientRect()

	if (scrollY >= top - 500 && !flagForDesktopYMaps) {
		ymaps.ready(init);

		function init() {
			var myMap = new ymaps.Map("map", {
				center: [55.75, 37.60],
				controls: [],
				zoom: 15
			});

			var myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/svg/location-pin.svg',
				iconImageSize: [20, 20],
				iconImageOffset: [-3, -42]
			});

			myMap.geoObjects.add(myPlacemark);

			var zoomControl = new ymaps.control.ZoomControl({
				options: {
					size: "small",
					position: {
						top: '300px',
						right: '5px'
					}
				}
			});
			myMap.controls.add(zoomControl);

			var geolocationControl = new ymaps.control.GeolocationControl({
				options: {
					position: {
						top: '367px',
						right: '5px'
					}
				}
			});

			myMap.controls.add(geolocationControl);
		}
		flagForDesktopYMaps = true
	}
}

document.addEventListener('scroll', function () {
	initYMapAtScroll()
})

// Connect Yandex Maps for mobile & lazy load YMaps
let mqForYMap = window.matchMedia('(max-width: 740px)')
let flagForMobileYMaps = false

function initYMapMobileAtScroll() {
	let scrollY = window.scrollY
	let map = document.querySelector('.map-mobile')
	let { top } = map.getBoundingClientRect()

	if (scrollY >= top - 500 && !flagForMobileYMaps && mqForYMap.matches) {
		ymaps.ready(init);

		function init() {
			var myMap = new ymaps.Map("map-mobile", {
				center: [55.75, 37.60],
				controls: [],
				zoom: 15
			});

			var myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/svg/location-pin.svg',
				iconImageSize: [20, 20],
				iconImageOffset: [-3, -42]
			});

			myMap.geoObjects.add(myPlacemark);

			var zoomControl = new ymaps.control.ZoomControl({
				options: {
					size: "small",
					position: {
						top: '300px',
						right: '5px'
					}
				}
			});
			myMap.controls.add(zoomControl);

			var geolocationControl = new ymaps.control.GeolocationControl({
				options: {
					position: {
						top: '367px',
						right: '5px'
					}
				}
			});

			myMap.controls.add(geolocationControl);
		}
		flagForMobileYMaps = true
	}
}

document.addEventListener('scroll', function () {
	initYMapMobileAtScroll()
})

document.addEventListener('resize', function () {
	initYMapMobileAtScroll()
})
// Initialization inputmask
let inputPhone = document.querySelector("input[type='tel']");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(inputPhone);

// Initialization just validate
new JustValidate('.contacts__form', {
	rules: {
		name: {
			required: true,
			minLength: 3
		},
		phone: {
			required: true,
			function: (name, value) => {
				let numberPhone = inputPhone.inputmask.unmaskedvalue();

				return Number(numberPhone) && numberPhone.length === 10;
			}
		},
	},
	messages: {
		name: {
			required: 'Как вас зовут?',
			minLength: 'Минимум две буквы'
		},
		phone: 'Укажите ваш телефон',
	},
	colorWrong: '#D11616'
})

// Smooth transition to link with id
document.querySelectorAll('a[href^="#"').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		let href = this.getAttribute('href').substring(1)

		const scrollTarget = document.getElementById(href)

		const topOffset = 0
		const elementPosition = scrollTarget.getBoundingClientRect().top
		const offsetPosition = elementPosition - topOffset

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		})
	})
})

// LazyLoad images
const lazyImg = document.querySelectorAll('img[loading="lazy"]')

function lazyLoadImg() {
	var lazyloadThrottleTimeout

	if (lazyloadThrottleTimeout) {
		clearTimeout(lazyloadThrottleTimeout)
	}

	let flag = false
	let scrollY = window.scrollY

	lazyImg.forEach(function (img) {
		let { top } = img.getBoundingClientRect()
		let dataSrcLazyImg = img.dataset.src

		if (scrollY >= top && !flag) {
			img.src = dataSrcLazyImg
		}
	})
}

document.addEventListener('scroll', function () {
	lazyLoadImg()
})

// Replace aria-label in custom
function swiperBtnAccessibility() {
	const btnsPrev = document.querySelectorAll('.btn-arrow--prev')
	const btnsNext = document.querySelectorAll('.btn-arrow--next')

	btnsPrev.forEach(function (btnPrev) {
		btnPrev.setAttribute('aria-label', 'Предыдущий слайд')
	})

	btnsNext.forEach(function (btnNext) {
		btnNext.setAttribute('aria-label', 'Следующий слайд')
	})
}

window.addEventListener('load', function () {
	setTimeout(swiperBtnAccessibility(), 1000)
})

// Create api YMaps after load
window.addEventListener('load', function () {
	const apiYMaps = document.createElement('script')
	apiYMaps.type = 'text/javascript'
	apiYMaps.src = 'https://api-maps.yandex.ru/2.1/?apikey=вашAPI-ключ&lang=ru_RU'
	const footer = document.querySelector('footer')
	footer.after(apiYMaps)
})