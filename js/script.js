// Carousel Slider
document.addEventListener('DOMContentLoaded', function () {
	const track = document.querySelector('.slider-track');
	const items = Array.from(document.querySelectorAll('.slider-item'));
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	const visibleItems = 4;
	const totalItems = items.length;
	const itemWidth = track.offsetWidth / visibleItems;

	let index = visibleItems;

	// Clone last 4 to the beginning
	for (let i = totalItems - visibleItems; i < totalItems; i++) {
		const clone = items[i].cloneNode(true);
		track.prepend(clone);
	}

	// Clone first 4 to the end
	for (let i = 0; i < visibleItems; i++) {
		const clone = items[i].cloneNode(true);
		track.appendChild(clone);
	}

	const allItems = document.querySelectorAll('.slider-item');
	const totalClones = allItems.length;

	// Set initial position
	track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;

	function moveCarousel() {
		track.style.transition = 'transform 0.5s ease';
		track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
	}

	next.addEventListener('click', () => {
		if (index >= totalClones - visibleItems) return;
		index++;
		moveCarousel();
		if (index === totalItems + visibleItems) {
			setTimeout(() => {
				track.style.transition = 'none';
				index = visibleItems;
				track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
			}, 500);
		}
	});

	prev.addEventListener('click', () => {
		if (index <= 0) return;
		index--;
		moveCarousel();
		if (index === 0) {
			setTimeout(() => {
				track.style.transition = 'none';
				index = totalItems;
				track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
			}, 500);
		}
	});

	// Resize fix: set widths dynamically
	window.addEventListener('resize', () => {
		track.style.transition = 'none';
		track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
	});
});

// Title Animation
document.addEventListener('DOMContentLoaded', function () {
	const typingElement = document.getElementById('typing-text');
	const words = [
		'Giannis.',
		'Ioannis.',
		'John.',
		'Yannis.',
		'Johannes.',
		'Whatever.',
	];
	const text = "Hello there. I'm Giannis.";
	const typingDelay = 50;
	let wordIndex = 0;

	function typeText(text, element, delay) {
		for (let i = 0; i < text.length; i++) {
			setTimeout(() => {
				element.textContent += text.charAt(i);
			}, delay * i);
		}
	}

	function changeText() {
		const staticText = "Hello there. I'm ";

		setTimeout(() => {
			wordIndex = (wordIndex + 1) % words.length;
			typingElement.textContent = staticText + words[wordIndex];
		}, 500);
	}

	function startAnimations() {
		typeText(text, typingElement, typingDelay);

		setTimeout(() => {
			setInterval(changeText, 1500);
		}, text.length * typingDelay);
	}

	startAnimations();
});

// Language Toggle
// const toggleBtn = document.getElementById('lang-toggle');
// let currentLang = 'en';

// toggleBtn.addEventListener('click', () => {
// 	currentLang = currentLang === 'en' ? 'gr' : 'en';
// 	toggleBtn.textContent = currentLang === 'en' ? 'GR' : 'EN';

// 	document.querySelectorAll('[data-en]').forEach((el) => {
// 		el.textContent = el.getAttribute(`data-${currentLang}`);
// 	});
// });
