const categoriesCount = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesCount}`);

const categoriesItems = document.querySelectorAll('.item');
categoriesItems.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
