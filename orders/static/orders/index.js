
document.addEventListener('DOMContentLoaded', () => {
    

});



var totalPriceCart = 0;
var totalItemsCart = 0;
var choosenSub = [];
var choosenExtra = [];

function myFunction(item) {
    var itemDescription = item.getAttribute("data-name");
    choosenSub = itemDescription;
};

function addExtra(choosenExtra) {
    
    choosenExtra = choosenExtra.value;
    console.log(choosenSub);
    console.log(choosenExtra);
};


function sendToCart(item) {
    var itemDescription = item.getAttribute("data-name");
    var itemPrice = item.getAttribute("data-price");
    
    totalItemsCart = totalItemsCart+1;
    totalPriceCart = parseFloat(totalPriceCart) + parseFloat(itemPrice); 

    document.getElementById('shopping-cart-total').innerHTML = totalPriceCart;
    document.getElementById('shopping-cart-total-modal').innerHTML = totalPriceCart;
    document.getElementById('total-count-cart').innerHTML = totalItemsCart;

    addToShoppingCartList(itemDescription, itemPrice);
};


function addToShoppingCartList(description, price) {
    // Create new item for cart list
    const li = document.createElement('li');
    var price = price;
    li.innerHTML = description;

    // Add new item to cart list
    document.querySelector('#shopping-cart-list').append(li);

};











//addToShoppingCartList(choosenExtra.value, 0.50);

/*
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});


*/