const itemKindsOfArt = document.querySelector('.kinds-of-art__item')
const itemsKindsOfArt = document.querySelectorAll('.kinds-of-art__item')
const btnSearch = document.querySelector('.search__btn')
const search = document.querySelector('.search')
const searchInput = search.querySelector('input')
const hamburger = document.querySelector('.hamburger')
const searchBtnReset = document.querySelector('.search__btn-reset')
const tabletNav = document.querySelector('.tablet-nav')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active')
    tabletNav.classList.toggle('open')
})

for (const item of itemsKindsOfArt) {
    item.addEventListener('click', function () {
        for (const otherItem of itemsKindsOfArt) {
            if (otherItem !== item) {
                otherItem.classList.remove('open-dropdown')
            }
            item.classList.toggle('open-dropdown')
        }
    })
}

btnSearch.addEventListener('click', function () {
    search.classList.toggle('active')
})

searchBtnReset.addEventListener('click', function () {
    searchInput.value = ''
})

// Initialization choices select
const elements = document.querySelectorAll('select');
// const choices = new Choices(element, {
//     searchEnabled: false,
// });

for (const el of elements) {
    const elem = new Choices(el, {
        searchEnabled: false,
    })
}

// Switching painters
const linkAuthor = document.querySelectorAll('.catalog__accordion-painter-btn')

linkAuthor.forEach(function (linkItemAuthor) {
    linkItemAuthor.addEventListener('click', function (event) {
        const pathDataLinkAuthor = event.currentTarget.dataset.changeAuthor
        const tabsContent = document.querySelectorAll('.catalog__tab-content')

        tabsContent.forEach(function(tabItem) {
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
    })
})

// Switching accordion
const accordionButtons = document.querySelectorAll('.catalog__accordion-btn')

for (const accordionBtn of accordionButtons) {
    accordionBtn.addEventListener('click', function () {
        let itemAccordion = accordionBtn.parentElement

        const openAccordion = function (btn) {
            let content = btn.querySelector('.catalog__accordion-content')
            content.style.maxHeight = content.scrollHeight + 'px'
        }

        const closeAccordion = function (btn) {
            let content = btn.querySelector('.catalog__accordion-content')
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

        tabsContent.forEach(function(tabItem) {
            tabItem.classList.remove('visible')

            setTimeout(() => {
                tabItem.classList.remove('active')
            }, 200)

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