import React,{ useEffect, useState } from "react";
import ProductSizeSelector from "./ProductSizeSelector";

function ProductAllInfo(){
    
    return (
        <div className="ProductAllInfo">
            <img className="ProductImg" src="classic-tee.jpg"></img>
            
            <div className="ProductInfo">
                <span className="ProductName">Classic Tee</span>
                <hr/>
                <b>$75.00</b>
                <hr/>
                <span></span>
                <small className="ProductDesc">
                Dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
                </small>
                <p>
                    <ProductSizeSelector/>
                </p>
            </div>
            
        </div>
    );
}

export default ProductAllInfo;