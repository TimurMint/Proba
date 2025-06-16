document.getElementById('generate').addEventListener('click', generateNumber);

function generateNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultElement = document.getElementById('result');

    // Проверка на валидность введенных данных
    if (isNaN(min) || isNaN(max)) {
        resultElement.textContent = 'Ошибка';
        return;
    }
    if (min > max) {
        resultElement.textContent = 'Мин > Макс';
        return;
    }

    // Анимация перед отображением числа
    resultElement.style.animation = 'none';
    setTimeout(() => {
        resultElement.style.animation = 'fadeIn 0.5s ease-in-out';
    }, 10);

    // Генерация случайного числа
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = randomNumber;
}
