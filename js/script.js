let subtotal = 0;

$('.card-action').click(function() {

  // In the HTML, the ADD button is the direct sibling of the of the item content

  // , of which the name is the first child
  let itemName = $(this).prev().children(":first").text();

  // and the price is the last (second) child
  let itemPriceString = $(this).prev().children(":last").text();
  let itemPrice = parseFloat(itemPriceString.substr(1));

  // UPDATE TABLE
  updateTable(itemName, itemPrice);
})

function updateTable(name, price) {
  const table = $('table')
  const tbody = $('tbody')

  // 1st column: Item
  let col1 = $('<td>').text(name).addClass("name");
  // 2nd column: Filler (Quantity stretch goal)
  let col2 = $('<td>').text("").addClass("quantity")
  // 3rd column: Price
  let col3 = $('<td>').text("$" + price).addClass("price");

  // Each tr has a unique id of the name of the item
  let tr = $('<tr>').append(col1).append(col2).append(col3);

  $(tbody).append(tr);

  $(table).append(tbody);

  // SHOW TOTALS
  $('tfoot').removeClass('hide');

  // UPDATE SUBTOTAL, TAX, TOTAL
  subtotal += price;
  let tax = subtotal * 0.10;
  let total = subtotal + tax;

  // DISPLAY TOTALS
  $('#subtotal').text("$" + subtotal);
  $('#tax').text("$" + tax.toFixed(2));
  $('#total').text("$" + total.toFixed(2));
}









//
