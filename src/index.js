// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotalPrice = price.innerHTML * quantity.value;

  product.querySelector('.subtotal span').innerHTML = subtotalPrice;

}

// ITERATION 2

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  
  let totalPrice = 0;

  let products = document.querySelectorAll('.product');

  for (let i = 0; i < products.length; i++){
    totalPrice += updateSubtotal(products[i]);
  }

  // ITERATION 3
  
  document.querySelector('#total-value span').innerHTML = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
