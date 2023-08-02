import * as allFunctions from './modules/functions.js'

allFunctions.isWebp()

const mobileMenu = document.querySelector('.nav-main')
const btnMobileMenu = document.querySelector('.menu-mobile')
const btnCloseMobileMenu = document.querySelector('.close-button')
const toggleActive = () => mobileMenu.classList.toggle('active')
btnMobileMenu.addEventListener('click', toggleActive)
btnCloseMobileMenu.addEventListener('click', toggleActive)

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show')
		}
	})
}
let options = {
	threshold: [0.3]
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.element-animation')
for (let elm of elements) {
	observer.observe(elm)
}
