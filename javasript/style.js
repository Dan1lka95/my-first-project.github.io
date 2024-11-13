const links = document.querySelectorAll('#menu_bg')

for (const link of links) {
	link.addEventListener('click', clickHandler)
}
function clickHandler(e) {
	e.preventDefault()
	const href = this.getAttribute('href')

	document.querySelector(href).scrollInfoView({
		behavior: 'smooth',
	})
}
//Button

window.onscroll = function () {
	scrollFunction()
}

const upbuttons = document.querySelectorAll('.buuton-up')
for (const upbutton of upbuttons) {
	upbutton.addEventListener('click', clickHandler)
}
function clickHandler(e) {
	e.preventDefault()
	const href = this.getAttribute('href')

	document.querySelector(href).scrollInfoView({
		behavior: 'smooth',
	})
}

function scrollFunction() {
	if (
		document.body.scrollTop > 1000 ||
		document.documentElement.scrollTop > 100
	) {
		document.getElementById('btnUp').className = 'button-up visible'
	} else {
		document.getElementById('btnUp').className = 'button-up hidden'
	}
}
//menu

function openModal() {
	document.getElementById('modal').style.top = '0px'
}
function closeModal() {
	document.getElementById('modal').style.top = '-400px'
}
