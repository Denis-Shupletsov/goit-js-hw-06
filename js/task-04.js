// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// < div id = "counter" >
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </ >

//     Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const calculatorCounter = function ({
    rootSelector, counterValue = 0, klik = 1 } = {}) {
    this._rootSelector = rootSelector;
    this._valeu = counterValue;
    this._klik = klik;
};

calculatorCounter.prototype.increment = function () {
    this._valeu += this._klik;
};

calculatorCounter.prototype.decrement = function () {
    this._valeu -= this._klik;
};
const calculator = new calculatorCounter({ rootSelector: 'counter', klik: 1 });
