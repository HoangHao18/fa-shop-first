import BlogBox from "../../components/BlogBox";
import HeaderBar from "../../components/HeaderBar";
import HeaderImage from "../../components/HeaderImage";
import SeparatorBar from "../../components/SeparatorBar";

export default function Blog(){
    return(
        <div className="blog-page-container">
            <HeaderBar/>
            <HeaderImage img= "/assets/images/slider01.jpg" title="Blog"/>
            <SeparatorBar/>
            <div className="container">
                <div className="row">
                    <div className="col-8 list-blog">
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                    </div>

                    <div className="col-4 right-bar">

                    </div>

                </div>
            </div>
            <SeparatorBar/>
        </div>
    );
}