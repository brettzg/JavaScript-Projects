if ($('#cart-new-radio').prop('checked')) {
    $('#cart-select').hide();
    $('#new-customer-name-box').show();
    $('cart-add-btn').value='Add Customer'
}

if ($('#cart-existing-radio').prop('checked')) {
    $('#cart-select').show();
    $('#new-customer-name-box').hide();
    $('cart-add-btn').value='Purchase'
}