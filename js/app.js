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
    });
}