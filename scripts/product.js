const carousel = document.querySelector("[data-target='carousel']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const carouselWidth = carousel.offsetWidth;
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -(
    cardCount * carouselWidth - carouselWidth
);

leftButton.addEventListener('click', function () {
    console.log(offset)
  if (offset !== 0) {
    offset += carouselWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});

rightButton.addEventListener('click', function () {
    console.log(maxX)
  if (offset !== maxX) {
    offset -= carouselWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});

let category;
fetch("Json/products.json")
  .then(res => res.json())
  .then(data => {
   addCategory(data);
});


function addCategory(categories){
    const container = document.querySelector('.product__categories');
    categories.forEach((item) => {
        let div = document.createElement('a');
        div.classList.add('products__item-wrapper')
        div.innerHTML = `
        <img class="products__img" src="${item.img}">
        <h1>${item.category}</h1>
        `
        container.appendChild(div);
    })
}

sidebarToggler.addEventListener('click', () => {
  document.querySelector('.products').classList.toggle('products--sidebar-open');
});
