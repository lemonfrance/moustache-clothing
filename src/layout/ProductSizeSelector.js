import React, {Component} from "react";
import addToCart from "../scripts/addToCart";

class ProductSizeSelector extends Component{
    render(){
        return(
            <div className="ProductSizeSelector">
                <div>
                    <small><b>
                        SIZE
                        <span id="asterisk">*</span>
                        &nbsp;
                        <span id="chosenSize"></span>
                    </b></small>
                </div>
                <div className="SizeOptions">
                    <button onClick={() => document.getElementById("chosenSize").innerHTML="S"}>S</button>
                    <button onClick={() => document.getElementById("chosenSize").innerHTML="M"}>M</button>
                    <button onClick={() => document.getElementById("chosenSize").innerHTML="L"}>L</button>
                </div>
                <button className="AddtoCartBtn" onClick={addToCart}>ADD TO CART</button>
            </div>
        );
    }
}

export default ProductSizeSelector;