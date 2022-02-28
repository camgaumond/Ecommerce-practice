const cart = document.querySelector('.cart__container');
const cartItems = document.querySelector('.cart__items');
const cartEmpty = document.querySelector('.empty');
const cartFull = document.querySelector('.full');
const cartImg = document.querySelector('.cart');
const plus = document.querySelector('.plus');
const less = document.querySelector('.less');
const numAddedItems = document.querySelector('.number__items');
const bubbleCart = document.querySelector('.bubble__cart');
const addToCart = document.querySelector('.add__button');
const thumbnailImg = document.querySelectorAll('.thumbnail');
const thumb1 = document.querySelector('.thumbnail-1');
const thumb2 = document.querySelector('.thumbnail-2');
const thumb3 = document.querySelector('.thumbnail-3');
const thumb4 = document.querySelector('.thumbnail-4');
const border1 = document.querySelector('.border-1');
const border2 = document.querySelector('.border-2');
const border3 = document.querySelector('.border-3');
const border4 = document.querySelector('.border-4');
const thumbnailBorders = document.querySelectorAll('.border');
const bigImg = document.querySelector('.big__image');

let numItems = 0;
let bubbleItems = 0;

//Starting conditions
numAddedItems.textContent = 0;

cartImg.addEventListener('click', () => {
  if (cart.style.display == 'none') {
    cart.style.display = 'block';
  } else {
    cart.style.display = 'none';
  }
});

plus.addEventListener('click', () => {
  numItems++;
  numAddedItems.textContent = numItems;
});

less.addEventListener('click', () => {
  if (numItems > 0) {
    numItems--;
    numAddedItems.textContent = numItems;
  } else {
    numItems = 0;
  }
});

addToCart.addEventListener('click', () => {
  bubbleItems += numItems;
  bubbleCart.textContent = bubbleItems;
  bubbleCart.style.display = 'block';
  numAddedItems.textContent = 0;
  numItems = 0;
  if (bubbleItems > 0) {
    cartFull.style.display = 'block';
    cartEmpty.style.display = 'none';
  } else if (bubbleItems === 0) {
    cartFull.style.display = 'none';
    cartEmpty.style.display = 'block';
  }
});

const thumbnailsArr = Array.from(thumbnailImg);
console.log(thumbnailsArr);

thumbnailsArr.forEach((thumbnailImg, i) => {
  thumbnailImg.addEventListener('click', () => {
    bigImg.src = `assets/img/image-product-${i + 1}.jpg`;
  });
});

thumb1.addEventListener('click', () => {
  thumb1.classList.add('thumbnail--active');
  thumb2.classList.remove('thumbnail--active');
  thumb3.classList.remove('thumbnail--active');
  thumb4.classList.remove('thumbnail--active');

  border1.classList.add('border--active');
  border2.classList.remove('border--active');
  border3.classList.remove('border--active');
  border4.classList.remove('border--active');
});

thumb2.addEventListener('click', () => {
  thumb2.classList.add('thumbnail--active');
  thumb1.classList.remove('thumbnail--active');
  thumb3.classList.remove('thumbnail--active');
  thumb4.classList.remove('thumbnail--active');

  border2.classList.add('border--active');
  border1.classList.remove('border--active');
  border3.classList.remove('border--active');
  border4.classList.remove('border--active');
});

thumb3.addEventListener('click', () => {
  thumb3.classList.add('thumbnail--active');
  thumb2.classList.remove('thumbnail--active');
  thumb1.classList.remove('thumbnail--active');
  thumb4.classList.remove('thumbnail--active');

  border3.classList.add('border--active');
  border2.classList.remove('border--active');
  border1.classList.remove('border--active');
  border4.classList.remove('border--active');
});

thumb4.addEventListener('click', () => {
  thumb4.classList.add('thumbnail--active');
  thumb2.classList.remove('thumbnail--active');
  thumb3.classList.remove('thumbnail--active');
  thumb1.classList.remove('thumbnail--active');

  border4.classList.add('border--active');
  border2.classList.remove('border--active');
  border3.classList.remove('border--active');
  border1.classList.remove('border--active');
});
