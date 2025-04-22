const windowSize = window.matchMedia('(max-width: 768px)');
const header = document.getElementById('header-text');
const moreBtn = document.getElementById('morebtn');

if (windowSize.matches) {
	header.classList.remove('flex-row');
	header.classList.add('flex-column-reverse');
	moreBtn.classList.add('mt-5');
} else {
	header.classList.remove('flex-column-reverse');
	header.classList.add('flex-row');
	moreBtn.classList.remove('mt-5');
}
