/* Смена фона по часам */
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    function changeBackgroundColor() {
        const date = new Date();
        const hour = date.getHours();

        if (hour >= 6 && hour < 12) {
            body.style.backgroundColor = '#ffdab9'; // Утренний светлый оттенок
        } else if (hour >= 12 && hour < 18) {
            body.style.backgroundColor = '#fff7e6'; // Дневной нейтральный оттенок
        } else if (hour >= 18 && hour < 21) {
            body.style.backgroundColor = '#ffe4b5'; // Вечерний теплый оттенок
        } else {
            body.style.backgroundColor = 'pink'; // Ночной холодный оттенок
        }
    }

    changeBackgroundColor(); // Сразу изменить фон при загрузке страницы
    setInterval(changeBackgroundColor, 3600000); // Проверять каждый час
});
