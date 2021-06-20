import HeaderBar from "../../components/HeaderBar";
import HeaderImage from "../../components/HeaderImage";
import SeparatorBar from "../../components/SeparatorBar";
import "./style.scss";
import FeaturedProduct from "../../components/FeaturedProduct";
import { SearchOutline } from 'react-ionicons'

export  default function About(){
    return(
        <div className="sale-page-container">
            <HeaderBar/>
            <HeaderImage img= "/assets/images/slider01.jpg" title="Sale"/>
            <SeparatorBar/>
            <div className="container">
                <div className="row">
                    <div className="col-3 left-bar">
                        <div className="categories">
                            <h3 className="title">Categories</h3>
                            <ul className="list-categories">
                                <li>All</li>
                                <li>Women</li>
                                <li>Men</li>
                                <li>Kids</li>
                                <li>Accesories</li>
                            </ul>
                        </div>

                        <div className="search-product">
                            <input type="text" placeholder="Search Product..."></input>
                            <button>
                            <SearchOutline
                                color={'#000'} 
                                title={"search-icon"}
                                height="15px"
                                width="15px"
                                />
                            </button>
                        </div>
                        
                    </div>
                    <div className="col-9 list-product">
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        <div className="col-4">
                            <FeaturedProduct/>
                        </div>
                        

                    </div>

                </div>

            </div>
            <SeparatorBar/>
        </div>
    );
}