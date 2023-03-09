// Напиши скрипт управления формой логина.

//     Обработка отправки формы form.login - form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginEl = document.querySelector('.login-form');

loginEl.addEventListener('submit', onLoginSubmit);

function onLoginSubmit(event) {
    event.preventDefault();

    const emailInput = loginEl.elements.email;
    const passwordInput = loginEl.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Все поля должны быть заполнены');
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value
        };

        console.log(formData);
        loginEl.reset();
    }
};
