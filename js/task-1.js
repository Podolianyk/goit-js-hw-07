const categoryItems = document.querySelectorAll(".item"); // отримую доступ до всіх li з класом item, повертає масив посилань
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(function (categoryItem) {
  const categoryHeading = categoryItem.querySelector("h2").textContent;
  const categoryElementCount = categoryItem.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryHeading}`);
  console.log(`Elements: ${categoryElementCount}`);
});
