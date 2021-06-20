import HeaderBar from "../../components/HeaderBar";
import Footer from "../../components/Footer";
import HeaderImage from "../../components/HeaderImage";
import SeparatorBar from "../../components/SeparatorBar";
import "./style.scss";

export  default function About(){
    return(
        <div className="about-page-container">
            <HeaderBar/>
            <HeaderImage img= "/assets/images/slider01.jpg" title="About"/>
            <SeparatorBar/>
            <div className="container">
                <div className="row">
                    <div className="col-3 image">
                        <img src = "/assets/images/slider03.jpg"></img>
                    </div>
                    <div className="col-9 content">
                        <h3 className="title">Our Story</h3>
                        <p className="story">Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. 
                            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla 
                            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque 
                            porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum 
                            laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. 
                            Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla 
                            turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. 
                            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales 
                            lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo 
                            eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, 
                            quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate 
                            ultricies. Sed vitae ultrices orci.</p>    

                    </div>

                </div>

            </div>
            <SeparatorBar/>
        </div>
    );
}