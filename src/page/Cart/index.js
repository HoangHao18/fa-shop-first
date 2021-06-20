import HeaderBar from "../../components/HeaderBar";
import HeaderImage from "../../components/HeaderImage";
import SeparatorBar from "../../components/SeparatorBar";
import ItemProductCart from "../../components/ItemProductCart";

import "./style.scss";

export  default function About(){
    return(
        <div className="cart-container">
            <HeaderBar/>
            <HeaderImage img= "/assets/images/slider01.jpg" title="Cart"/>
            <SeparatorBar/>
            <div className="container">
                <div className="row title-col">
                    <div className="col-5 name-col">
                        <h3>Product</h3>
                    </div>

                    <div className="col-2 price-col">
                        <h3>Price</h3>
                    </div>

                    <div className="col-2 quantity-col">
                        <h3>Quantity</h3>
                    </div>

                    <div className="col-2 price-total-col">
                        <h3>PriceTotal</h3>
                    </div>

                    <div className="col-1 button-col">
                        
                    </div>
                </div>

                <div className="list-product-cart">
                    <ItemProductCart/>
                    <ItemProductCart/>
                    <ItemProductCart/>
                </div>

               <div className="row ">

               </div>


            </div>
            <SeparatorBar/>
        </div>
    );
}