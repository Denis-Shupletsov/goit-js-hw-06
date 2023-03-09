// Напиши скрипт, который изменяет цвета фона элемента < body > через 
// инлайн стиль при клике на button.change - color и выводит значение 
// цвета в span.color.
//   Для генерации случайного цвета используй функцию getRandomHexColor.


const buttonEl = document.querySelector('.widget');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;
  spanEl.textContent = randomColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
