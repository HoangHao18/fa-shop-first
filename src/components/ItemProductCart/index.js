import Button from "../MyButton";
import "./style.scss"

export default function ItemProductCart({
    img = "/assets/images/slider02.jpg",
    name = "Mug Adventure",
    price = "16.00",
    quantity = "1",
    priceTotal = "16.00"

}){
    return(
        <div className="item-product-cart-container">
            <div className="row">
                <div className="col-2 img-col">
                    <div className="img-product">
                        <img src={img}></img>
                    </div>
                </div>

                <div className="col-3 name-col">
                    <h3>{name}</h3>
                </div>

                <div className="col-2 price-col">
                    <h3>${price}</h3>
                </div>

                <div className="col-2 quantity-col">
                    <h3>{quantity}</h3>
                </div>

                <div className="col-2 price-total-col">
                    <h3>${priceTotal}</h3>
                </div>

                {/* <div className="col-1 button-col">
                    <Button isRadios = {true} nameButton="Delete"></Button>
                </div> */}
            </div>
        </div>

    )

}