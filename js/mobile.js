const windowSize = window.matchMedia('(max-width: 768px)');
const header = document.getElementById('header-text');
const introText = document.getElementById('intro-text');
const introTitle = document.getElementById('intro-title');

function mobileView() {
	if (windowSize.matches) {
		header.classList.remove('flex-row');
		header.classList.add('flex-column-reverse');
		introText.classList.add('text-center');
		introTitle.classList.add('text-center');
	} else {
		header.classList.remove('flex-column-reverse');
		header.classList.add('flex-row');
		introText.classList.remove('text-center');
		introTitle.classList.remove('text-center');
	}
}

mobileView();
window.addEventListener('resize', mobileView);
