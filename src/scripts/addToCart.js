// add item to cart if a size is chosen
import createCartItem from './createCartItem';

function addToCart(){
    var size = document.getElementById("chosenSize").innerHTML;
    var cart = document.getElementById("shopCart");

    if (size==""){ //user has no size input
        alert("You must select a size before adding to your shopping cart.");
    }
    else{ //user has size input

        //remove cart empty label first
        if (cart.innerText == "Your cart is empty."){ 
            cart.innerText="";
        }

        //check if such cart item with this size exists
        var sizeCartItem = document.getElementById(size);
        if (sizeCartItem==null){  //if cart item doesn't exist
            //create one and add to cart
            var cartItem = createCartItem(size);
            cart.appendChild(cartItem);
        }
        else{ //if cart item exists
            //don't create anything; just modify the qty of the existing item
            var qty = sizeCartItem.
            querySelector('#cartItemQty');
            var prevQty = qty.textContent;
            qty.innerText = Number(prevQty)+1;
        }
        
    }

}

export default addToCart;
