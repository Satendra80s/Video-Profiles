const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Show the current slide
function showSlide(index) {
    if (index >= slide.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slide.length - 1;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next button click event
nextBtn.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

// Previous button click event
prevBtn.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

// Initialize slider
showSlide(currentIndex);
