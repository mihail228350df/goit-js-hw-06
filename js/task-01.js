const categoriesRefs = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesRefs.length}`);

categoriesRefs.forEach(categorie=>{
    console.log(`Category: ${categorie.querySelector('h2').textContent}`);
    console.log(`Elements: ${categorie.querySelectorAll('li').length}`);
})