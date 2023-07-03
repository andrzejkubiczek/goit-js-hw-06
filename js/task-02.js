const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsItems = [];

ingredients.forEach(element => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = element;
  ingredientsItems.push(item);
});

ingredientsList.append(...ingredientsItems);
