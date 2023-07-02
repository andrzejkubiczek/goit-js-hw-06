const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(element => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = element;
  ingredientsList.append(ingredientsItem);
});
