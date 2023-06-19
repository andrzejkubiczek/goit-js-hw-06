const categoriesCount = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesCount}`);

const categoriesItems = document.querySelectorAll('h2');
categoriesItems.forEach(element => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
