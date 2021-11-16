const itemKindsOfArt = document.querySelector('.kinds-of-art__item')
const itemsKindsOfArt = document.querySelectorAll('.kinds-of-art__item')

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

