const aside = document.querySelector('aside')
const nav = document.querySelector('header nav')
const h2 = document.querySelector('header h2')

const position = ratio => {
	nav.style.marginLeft = parseInt(ratio * h2.offsetWidth) + 'px'
	h2.style.marginTop = parseInt(50 - ratio * 50) + 'px'
	aside.style.marginTop = parseInt(-50 * ratio) + 'px'
}

document.body.onscroll = event => {
	position(Math.min(1, document.body.parentElement.scrollTop / 100))
}
