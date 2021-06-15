import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import FeaturedProduct from "../FeaturedProduct";
import ArrowNext from './ArrowNext'
import ArrowPrev from './ArrowPrev'

import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons'

function Arrow(){
    return(
        <div className="arrow-slick">&gt;</div>
    )
}



const settings = {
    // dots: true,
    infinite: true,  
    slidesToShow: 4,
    slidesToScroll: 2,
    //autoplay: true,
    speed: 500,
    // autoplaySpeed: 3000,
    //fade: true,
    // cssEase: "linear",
    nextArrow: <ArrowNext/>,
    prevArrow: <ArrowPrev/>

}

export default function FPSlider(){
    return (
        <div className="FPSlider">
          <Slider {...settings}>
            <div>
                <FeaturedProduct image="/assets/images/slider02.jpg"/>
            </div>
            <div>
                <FeaturedProduct/>
            </div>
            <div>
                <FeaturedProduct/>
            </div>
            <div>
                <FeaturedProduct/>
            </div>
            <div>
                <FeaturedProduct/>
            </div>
            <div>
                <FeaturedProduct/>
            </div>
          </Slider>
        </div>
      );
}