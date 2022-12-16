const removeItemButton = document.querySelector("#remove-item"); 
const itemInCart = document.querySelector(".cart-item-wrap"); 
const cartWrap = document.querySelector(".cart-wrap");
const emptyCart = document.querySelector("#empty-cart");
const checkoutButton = document.querySelector("#go-to-checkout");


function removeItem(){
    itemInCart.style.display ="none"; 
    cartWrap.style.display ="none";
    emptyCart.style.display ="flex";
    checkoutButton.style.display ="none"; 
}


removeItemButton.addEventListener("click", removeItem)