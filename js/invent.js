// Функция для переключения слайдов вперед
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Функция для отображения текущего слайда
function currentSlide(n) {
    showSlides(slideIndex = n);
}

let slideIndex = 1;
showSlides(slideIndex);

// Основная функция управления слайдами
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
}

