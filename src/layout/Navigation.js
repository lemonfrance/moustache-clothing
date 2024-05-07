import React from "react";
import showCart from "../scripts/showCart";
import ShoppingCart from "./ShoppingCart";

function Navigation(){
    return  (
        <div className="NaviBar">
            <div id="cartContainer">
                <button id="cartBtn" onClick={showCart}>
                    My Cart (4)
                </button>
                <ShoppingCart/>
            </div>
        </div>
    );
}

export default Navigation;