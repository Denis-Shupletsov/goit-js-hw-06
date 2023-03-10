// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" min = "16" max = "96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', oninlineStyle);

function oninlineStyle(event) {
    text.style.fontSize = `${event.target.value}px`
};