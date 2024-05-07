import React, {Component} from "react";

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
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                </div>
                <button className="AddtoCartBtn">ADD TO CART</button>
            </div>
        );
    }
}

export default ProductSizeSelector;