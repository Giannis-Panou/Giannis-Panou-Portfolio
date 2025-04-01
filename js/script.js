// Works Carousel
document.addEventListener('DOMContentLoaded', function () {
	const track = document.querySelector('.slider-track');
	const items = document.querySelectorAll('.slider-item');
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	const itemWidth = items[0].offsetWidth + 20;

	items.forEach((item) => {
		track.appendChild(item.cloneNode(true));
	});

	let index = 0;
	function moveCarousel() {
		track.style.transition = 'transform 0.5s ease-in-out';
		track.style.transform = `translateX(-${index * itemWidth}px)`;
	}

	next.addEventListener('click', () => {
		index++;
		moveCarousel();
		if (index >= items.length) {
			setTimeout(() => {
				track.style.transition = 'none';
				index = 0;
				track.style.transform = `translateX(0px)`;
			}, 500);
		}
	});

	prev.addEventListener('click', () => {
		if (index <= 0) {
			index = items.length;
			track.style.transition = 'none';
			track.style.transform = `translateX(-${index * itemWidth}px)`;
		}
		setTimeout(() => {
			index--;
			track.style.transition = 'transform 0.5s ease-in-out';
			moveCarousel();
		}, 10);
	});
});

// Title Typing Effect
function runTypingEffect() {
	const text = 'I am Giannis Panou.';
	const typingElement = document.getElementById('typing-text');
	const typingDelay = 100;

	typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			typingElement.textContent += text.charAt(i);
		}, delay * i);
	}
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
