// Carousel Slider
if (window.innerWidth > 768) {
	document.addEventListener('DOMContentLoaded', function () {
		const track = document.querySelector('.slider-track');
		const items = Array.from(document.querySelectorAll('.slider-item'));
		const prev = document.querySelector('.prev');
		const next = document.querySelector('.next');
		const visibleItems = 4;
		const totalItems = items.length;

		let index = visibleItems;

		// Clone items for infinite scrolling
		// Next Button
		for (let i = 0; i < visibleItems; i++) {
			const clone = items[i].cloneNode(true);
			track.appendChild(clone);
		}

		// Previous Button
		for (let i = 0; i < visibleItems; i++) {
			const reverseIndex = totalItems - 1 - i;
			const clone = items[reverseIndex].cloneNode(true);
			track.insertBefore(clone, track.firstChild);
		}

		const allItems = document.querySelectorAll('.slider-item');
		const totalClones = allItems.length;

		// Set the width of the track to accommodate all items
		track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;

		// Set the width of each item to 100% divided by the number of visible items
		function moveCarousel() {
			track.style.transition = 'transform 0.5s ease';
			track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
		}

		// Listener for the next button
		next.addEventListener('click', () => {
			if (index >= totalClones - visibleItems) return;
			index++;
			moveCarousel();
			if (index === totalItems + visibleItems) {
				setTimeout(() => {
					track.style.transition = 'none';
					index = visibleItems;
					track.style.transform = `translateX(-${
						index * (100 / visibleItems)
					}%)`;
				}, 500);
			}
		});

		// Listener for the previous button
		prev.addEventListener('click', () => {
			if (index <= 0) return;
			index--;
			moveCarousel();
			if (index === 0) {
				setTimeout(() => {
					track.style.transition = 'none';
					index = totalItems;
					track.style.transform = `translateX(-${
						index * (100 / visibleItems)
					}%)`;
				}, 500);
			}
		});

		// Listener for window resize to adjust the track position
		window.addEventListener('resize', () => {
			track.style.transition = 'none';
			track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
		});
	});
}

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
	const typingDelay = 75;
	let wordIndex = 0;

	// Typewriter effect
	function typeText(text, element, delay) {
		for (let i = 0; i < text.length; i++) {
			setTimeout(() => {
				element.textContent += text.charAt(i);
			}, delay * i);
		}
	}

	// Change text
	function changeText() {
		const staticText = "Hello there. I'm ";

		setTimeout(() => {
			wordIndex = (wordIndex + 1) % words.length;
			typingElement.textContent = staticText + words[wordIndex];
		}, 2000);
	}

	// Reset text
	function startAnimations() {
		typeText(text, typingElement, typingDelay);

		setTimeout(() => {
			setInterval(changeText, 1500);
		}, text.length * typingDelay);
	}

	startAnimations();
});

// Move Animation
document.addEventListener('DOMContentLoaded', function () {
	const text = document.getElementById('intro');
	const image = document.getElementById('title-image');

	text.classList.add('MoveRight');
	image.classList.add('MoveLeft');

	setTimeout(() => {
		text.classList.add('vibrateReverse');
		image.classList.add('vibrate');
	}, 750);

	setTimeout(() => {
		text.classList.add('OriginPosRight');
		image.classList.add('OriginPosLeft');
	}, 1150);
});

// Temp Picture Fix
document.addEventListener('DOMContentLoaded', function () {
	const image = document.getElementById('title-image');
	setTimeout(() => {
		image.classList.remove('d-none');
	}, 1);
});
