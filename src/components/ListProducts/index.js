import Item from '../Item';
import './style.scss';
export default function ListProduct(){
    return(
        <div>
            <div className="row list-product-container">
                <div className="col-4">
                    <div className="row">
                        <Item 
                            name="Dresses" 
                            image="/assets/images/tp_dresses.png"/>
                    </div>
                    <div className="row">
                        <Item 
                            name="Sunglasses" 
                            image="/assets/images/tp_glasses.png"/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <Item 
                            name="Watch" 
                            image="/assets/images/tp_watch.png"/>
                    </div>
                    <div className="row">
                        <Item 
                            name="Footerwear" 
                            image="/assets/images/tp_footerwear.png"/>
                    </div>
                </div> 
                <div className="col-4">
                    <div className="row">
                        <Item 
                            name="Bag" 
                            image="/assets/images/tp_bag.png"/>
                    </div>
                    <div className="row more-info">      
                        <Item 
                            name="Sigup" 
                            image="/assets/images/tp_background.png"
                            linkTo="/login"
                            isRadios={true}>
                            <h4>SIGN UP and GET 20% OFF</h4>
                            <p>Be the frist to know about the latest fashion news and get exclu-sive offers</p>
                        </Item>
                            
                    </div>
                </div> 
            </div>
        </div>
    )
}