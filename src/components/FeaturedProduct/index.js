import './style.scss'
import MyButton from '../MyButton'
export default function FeaturedProduct({image="/assets/images/tp_watch.png"}){
    return (
        <div className="featured-product">
            <div className="fp-image">
                <img src={image}></img>
                <div className="btn-add-to-cart"><MyButton nameButton="Add to cart" isRadios={true}/></div>
                
            </div>
            <div className="fp-info">
                <a className="fp-name">Watch black</a>
                <span className="fp-price">$165.90</span>
            </div>
        </div>
    )
}