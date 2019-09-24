
document.addEventListener('DOMContentLoaded', () => {
    

});



var totalPriceCart = 0;
var totalItemsCart = 0;
var choosenSub = [];
var priceChoosenSub = 0;
window.choosenExtra = [];

function addPizzaToppings (pizza) {
    document.getElementById("select-pizza-topping-1").disabled=true;
    document.getElementById("select-pizza-topping-2").disabled=true;
    document.getElementById("select-pizza-topping-3").disabled=true;

    toppingsAmount = pizza.getAttribute("data-amount");

    /*
    for (i = 0; i < toppingSelectors.length; i++) {
        toppingSelectors[i].disabled = true;
    };*/

    for (i = 0; i<toppingsAmount; i++) {
        var loopToppings = "select-pizza-topping-"+(i+1);
        var loopToppings2 = String(loopToppings);
        document.getElementById(loopToppings2).disabled = false;
    };

};

function myFunction(item) {
    var itemDescription = item.getAttribute("data-name");
    var itemPrice = item.getAttribute("data-price");
    priceChoosenSub = itemPrice;
    choosenSub = itemDescription;
};

function addExtra(choosenExtra) {
    window.choosenExtra = choosenExtra.value;
};

function sendToCartSub() {
    var subItemPrice = 0.5;
    if (window.choosenExtra.length === 0 || window.choosenExtra==="No Extras") {
        window.choosenExtra = "No Extras";
        subItemPrice = 0;
    }

    var itemDescription = "Sub "+choosenSub + ", with " + window.choosenExtra;
    var itemPrice = priceChoosenSub;

    totalItemsCart = totalItemsCart+1;
    totalPriceCart = Number(parseFloat(totalPriceCart) + parseFloat(subItemPrice) + parseFloat(itemPrice)).toFixed(2); 
    
    document.getElementById('shopping-cart-total').innerHTML = totalPriceCart;
    document.getElementById('total-count-cart').innerHTML = totalItemsCart;

    addToShoppingCartList(itemDescription, itemPrice);
};


function sendToCart(item) {
    var itemDescription = item.getAttribute("data-name");
    var itemPrice = item.getAttribute("data-price");
    
    totalItemsCart = totalItemsCart+1;
    totalPriceCart = Number(parseFloat(totalPriceCart) + parseFloat(itemPrice)).toFixed(2);; 

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