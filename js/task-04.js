// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

//     Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const currentValue = document.querySelector('#value');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

increment.addEventListener('click', () => {
    counterValue += 1;
    currentValue.textContent = counterValue;
});

decrement.addEventListener('click', () => {
    counterValue -= 1;
    currentValue.textContent = counterValue;
});
