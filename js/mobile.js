const windowSize = window.matchMedia('(max-width: 768px)');
const header = document.getElementById('header-text');
const introText = document.getElementById('intro-text');
const introTitle = document.getElementById('intro-title');

if (windowSize.matches) {
	header.classList.remove('flex-row');
	header.classList.add('flex-column-reverse');
	header.classList.remove('align-items-center');
	introText.classList.add('text-center');
	introTitle.classList.add('text-center');
} else {
	header.classList.remove('flex-column-reverse');
	header.classList.add('flex-row');
	header.classList.add('align-items-center');
	introText.classList.remove('text-center');
	introTitle.classList.remove('text-center');
}
