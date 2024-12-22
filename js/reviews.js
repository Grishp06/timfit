// Функция для показа предыдущего слайда
function showPrevSlide() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
        slide.classList.toggle('active', index === currentIndex);
    });
}

// Функция для показа следующего слайда
function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
        slide.classList.toggle('active', index === currentIndex);
    });
}