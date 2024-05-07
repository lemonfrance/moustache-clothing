import React, {Component} from "react";

class ShoppingCart extends Component{
    render(){
    return (
        <div id="shopCart">
            <div>
                <img src="classic-tee.jpg"></img>
                <div className="CartItemInfo">
                    <span>Classic Tee</span>
                    <span>1x <b>$75.00</b></span>
                    <span>Size: S</span>
                </div>
            </div>
            <div>
                <img src="classic-tee.jpg"></img>
                <div className="CartItemInfo">
                    <span>Classic Tee </span>
                    <span>3x <b>$75.00</b></span>
                    <span>Size: L</span>
                </div>
            </div>
        </div>
    );}
}

export default ShoppingCart;