const windowSize = window.matchMedia('(max-width: 768px)');
const header = document.getElementById('header-text');

if (windowSize.matches) {
	header.classList.remove('flex-row');
	header.classList.add('flex-column-reverse');
} else {
	header.classList.remove('flex-column-reverse');
	header.classList.add('flex-row');
}
