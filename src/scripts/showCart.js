// toggle shopping cart

function showCart(){
    var cart = document.getElementById("shopCart");
    var cartBtn = document.getElementById("cartBtn");

    if (cart.style.display === "block"){ //if cart shown, hide it
        cart.style.display = "none";
        cartBtn.style.backgroundColor = "#F6F6F7";
        cartBtn.style.color = "#888888";
        cartBtn.style.border = "0";
    } else { //if cart hidden, show it 
        cart.style.display = "block";
        cartBtn.style.backgroundColor = "white";
        cartBtn.style.color = "black";
        cartBtn.style.borderBottom = "1px solid white";
        cartBtn.style.borderTop = "1px solid #CCCCCC";
        cartBtn.style.borderLeft = "1px solid #CCCCCC";
        cartBtn.style.borderRight = "1px solid #CCCCCC";
    }
}

export default showCart;