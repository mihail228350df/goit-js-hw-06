const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const makeIngredientEl = (ingredient) => {
  const ingredientsListItemRef = document.createElement('li');
  
  ingredientsListItemRef.textContent = ingredient; 
  ingredientsListItemRef.classList.add('item');
  return ingredientsListItemRef;
};

const ingredientsList = ingredients.map(ingredient=>makeIngredientEl(ingredient));

ingredientsListRef.append(...ingredientsList);