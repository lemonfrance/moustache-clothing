// create a cart item according to supplied size param
// returns a div containing img and info of product
//helper function

function createCartItem(size_param){
    // representation of an item in cart;
    // the oldest parent div of elements below
    var cartItem = document.createElement("div");
    cartItem.id = size_param;

    // image of product
    var img = document.createElement("img");
    img.src = "classic-tee.jpg";

    // a cart item contains an img and an text info div
    // enclose img inside cart item as first child
    cartItem.appendChild(img);

    // text info of product
    var info = document.createElement("div");
    info.className = 'CartItemInfo';

    var info_title = document.createElement("span");
    info_title.innerText = "Classic Tee";

    var info_qty_price = document.createElement("span");
    info_qty_price.innerHTML = "<span id='cartItemQty'>1</span>x <b>$75.00</b>";

    var info_size = document.createElement("span");
    info_size.innerText = "Size: ".concat(size_param);

    // insert title, qty, price, size in text info div
    [info_title,info_qty_price,info_size].forEach(i => {
        info.appendChild(i);
    });

    // a cart item contains an img and an text info div
    // enclose text info div inside cart item as second child
    cartItem.appendChild(info);

    return cartItem;
}

export default createCartItem;