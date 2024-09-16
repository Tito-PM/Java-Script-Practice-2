// Example JavaScript functionality

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = carouselImages[0].clientWidth;

// Move to the next slide
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return; // Prevent going out of bounds
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Move to the previous slide
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; // Prevent going out of bounds
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
