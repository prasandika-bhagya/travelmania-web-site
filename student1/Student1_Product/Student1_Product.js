//update cart items 
function updateCartItem(itemName, itemPrice, itemImage) {
    var cartRow = document.createElement('tr');
    var section = document.getElementsByClassName('table-class')[0];
    cartRow.classList.add('row-one');
    var cartItemNameList = document.getElementsByClassName("cart-item-product");
    // check the item is already in the cart 
    var i;
    for (i = 0; i < cartItemNameList.length; i++) {
        //console.log(cartItemNameList[i].innerText, itemName)

        if (cartItemNameList[i].innerText === itemName) {
            alert("You already add this item to the cart");
            return;
        }

    }
    var itemContent =
        `<tr>
        <td>
            <img src="${itemImage}" alt="pro01" width="100" height="100" class="cart-img">
            <div class="cart-item-product">${itemName}</div>
        </td>
        <td>
            <div class="cart-item-price">${itemPrice}</div>
        </td>
        <td>
            <span class="cart-item-quantity">
            <input type="number" class="cart-item-quantity-list" value="1">
            </span>
            <button class="remove">REMOVE</button>
        </td>
    </tr>`
    cartRow.innerHTML = itemContent
    section.append(cartRow)
    cartRow.getElementsByClassName("remove")[0].addEventListener('click', removeItemList)
    cartRow.getElementsByClassName("cart-item-quantity-list")[0].addEventListener('change', getQuantity)
}


// getting values from shop item list
function cartUpdate() {
    var cartButton = event.target;
    var shopItem = cartButton.parentElement;

    var itemName = shopItem.getElementsByClassName("item-Name-to-List")[0].innerText;
    var itemPrice = shopItem.getElementsByClassName("item-price-to-List")[0].innerText;
    var itemImage = shopItem.getElementsByClassName("item-Image")[0].src;

    //console.log(itemName, itemPrice, itemImage)
    updateCartItem(itemName, itemPrice, itemImage);
    totalPrice();

}


// remove cart item
function removeItemList(event) {
    var buttonRemove = event.target;
    buttonRemove.parentElement.parentElement.remove();
    totalPrice();
}

// get quantity
function getQuantity(event) {
    var checkQuantity = event.target;
    if (isNaN(checkQuantity.value) || checkQuantity.value <= 0) {
        checkQuantity.value = 1;
    }
    totalPrice();
}


// getting total price
function totalPrice() {
    var cartRowOnes = document.getElementsByClassName("row-one")


    var priceTotal = 0;
    for (var i = 0; i < cartRowOnes.length; i++) {
        //var cartRow = cartRowOnes[i];

        var cartItemPrice = document.getElementsByClassName("cart-item-price")[i];
        var cartItemQuantity = document.getElementsByClassName("cart-item-quantity-list")[i];
        var priceOfItem = parseFloat(cartItemPrice.innerText.replace('Rs', ''));
        var quantityOfItem = cartItemQuantity.value;

        priceTotal = priceTotal + (priceOfItem * quantityOfItem);

        //console.log("Total Price is " + priceTotal)
        console.log(priceOfItem, quantityOfItem)
            //console.log(cartItemPrice)

    }
    //console.log(cartRows.length)
    //console.log(cartRowOnes.length)
    //console.log(cartRowsList.length)
    document.getElementsByClassName("total-price")[0].innerText = 'Rs ' + priceTotal + '.00';



}

//shipping form validation 
function formValidation() {

    var userName = document.forms["myForm"]["uname"].value;
    var userEmail = document.forms["myForm"]["umail"].value;
    var userAddress = document.forms["myForm"]["ucom-address"].value;
    var userCountry = document.forms["myForm"]["ucom-country"].value;
    var cartRowOnes = document.getElementsByClassName("row-one");
    var totalItemPrice = document.getElementsByClassName("total-price")[0].innerText;
    // getting var
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];



    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    if (userName == "" || userEmail == "" || userAddress == "" || userCountry == "") {
        var formEmptyContent = `
            <div class = "form-empty-error">Please fill all the details.</div>
            `

        document.getElementsByClassName("final-content")[0].innerHTML = formEmptyContent;
    } else {
        if (cartRowOnes.length <= 0) {
            var cartEmptyContent = `
            <div class = "cart-empty-error">cart is empty.</div>
            `
            document.getElementsByClassName("final-content")[0].innerHTML = cartEmptyContent;
        } else {
            var finalContent = `
        <div class = "order-conformation-title">Order Confirmed</div>
        Dear ${userName}, Please Confirm your order. Your total bill is ${totalItemPrice}. Your order will deliver within 2 - 4 weeks. Collect at your door step.
        Order summery has been send to your mail. ${userEmail} 
        <br>
        <button class = "order-confirm-button" onClick = "finalConfirmButton()">confirm</button>
        `
            document.getElementsByClassName("final-content")[0].innerHTML = finalContent;
            console.log(totalItemPrice)

        }
    }
}

function finalConfirmButton() {
    window.location.replace("Student1_Product.html");
}

// getting all element changing the quantity **
var quantityCheck = document.getElementsByClassName("cart-item-quantity-list");
var i;
for (i = 0; i < quantityCheck.length; i++) {
    var checkQuantity = quantityCheck[i];
    checkQuantity.addEventListener('change', getQuantity);
}


// get all classes use remove 
var removeToCartButton = document.getElementsByClassName('remove');
var i;
for (i = 0; i < removeToCartButton.length; i++) {
    var button = removeToCartButton[i];
    button.addEventListener('click', removeItemList);
}

//getting all add to cart buttons 

var addToCartButtons = document.getElementsByClassName("add-to-cart");
var i;
for (i = 0; i < addToCartButtons.length; i++) {
    var cartButton = addToCartButtons[i];
    cartButton.addEventListener('click', cartUpdate);


}