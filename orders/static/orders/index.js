
document.addEventListener('DOMContentLoaded', () => {
    
    //test 
    /*
    document.querySelectorAll('add-to-cart').forEach(a => {
        a.onclick = () => {
            var name = $(this).data('name');
            var price = Number($(this).data('price'));
            console.log(name+"price"+price);
            //document.querySelector('#test').innerHTML = "teston";
        };
    });
    */




});

/*
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});


*/

var totalPriceCart = 0;
var totalItemsCart = 0;

function sendToCart(item) {
    var itemDescription = item.getAttribute("data-name");
    var itemPrice = item.getAttribute("data-price");
    
    totalItemsCart = totalItemsCart+1;
    totalPriceCart = parseFloat(totalPriceCart) + parseFloat(itemPrice); 

    document.getElementById('shopping-cart-total').innerHTML = totalPriceCart;
    document.getElementById('shopping-cart-total-modal').innerHTML = totalPriceCart;
    document.getElementById('total-count-cart').innerHTML = totalItemsCart;

    addToShoppingCartList(itemDescription, itemPrice);
    //alert("This is a " + itemDescription + " costing: " + itemPrice);
};


function addToShoppingCartList(description, price) {
    // Create new item for cart list
    const li = document.createElement('li');
    var price = price;
    li.innerHTML = description;

    // Add new item to cart list
    document.querySelector('#shopping-cart-list').append(li);

};