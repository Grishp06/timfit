document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const isValidName = validateName(nameInput.value);
    const isValidEmail = validateEmail(emailInput.value);
    const isValidMessage = validateMessage(messageInput.value);

    if (!isValidName || !isValidEmail || !isValidMessage) {
        alert("Проверьте правильность заполнения формы.");
        return false;
    }

    this.submit(); // Отправляем форму, если все поля валидны
});

function validateName(name) {
    return name.trim().length > 0;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateMessage(message) {
    return message.trim().length > 0;
}
