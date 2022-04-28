const arrayOfCategories = document
  .querySelector('#categories')
  .querySelectorAll('.item');

console.log('Number Of Categories:', arrayOfCategories.length);

arrayOfCategories.forEach(listItem => {
  console.log('Category:', listItem.lastElementChild.textContent);
  console.log(
    'Elements:',
    listItem.lastElementChild.nextElementSibling.querySelectorAll('li').length,
  );
});