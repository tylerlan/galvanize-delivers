$('.card-action').click(function() {

  // In the HTML, the ADD button is the direct sibling of the of the content, of which the name is the first child and the price is the last (second) child

  let itemName = $(this).prev().children(":first").text(); // use for summary in cart
  let itemPriceString = $(this).prev().children(":last").text(); // keep this around for the summary in cart
  let itemPrice = parseFloat(itemPriceString.substr(1)); // use for calculation

  console.log(itemName);
  console.log(itemPrice);

})
