// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ >

//   В JavaScript есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addItems = ingredients.forEach(ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;

  const ingredientsEl = document.querySelector('#ingredients');
  ingredientsEl.appendChild(listEl);

  console.log(listEl);
});