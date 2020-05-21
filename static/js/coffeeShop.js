"use strict";

// Add item to cart and display in cart. 
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

//Reset cart to an empty cart.
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

//Update cart total with price.
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

//Increment Coffee Sold and display.
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

//Display progress status with a message.
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length)
  resetCart()
})
