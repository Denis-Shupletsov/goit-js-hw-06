// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Please enter 6 symbols"
//     />

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const symbolsEl = inputEl.getAttribute('data-length');
    const actualLength = inputEl.value.length;
    const validationEl = actualLength === Number(symbolsEl);

    inputEl.classList.remove('invalid');
    inputEl.classList.add(validationEl ? 'valid' : 'invalid');
};