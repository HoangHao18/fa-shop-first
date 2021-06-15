import './style.scss'
import Button from '../MyButton'
export default function Footer(){
    return(
        <div className="footer">
            <div className="row footer-container">
                <div className="col-4">
                    <h4 className="title">Get in touch</h4>
                    <div className="info">97 Man Thien, Hiep Phu, Quan 9, TP. Ho CHi Minh</div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col">
                            <h4 className="title">Categories</h4>
                            <div className="list-info">
                                <ul>
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>Dresses</li>
                                    <li>SunGlasses</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <h4 className="title">Link</h4>
                            <div className="list-info">
                                <ul>
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>Dresses</li>
                                    <li>SunGlasses</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <h4 className="title">Helps</h4>
                            <div className="list-info">
                                <ul>
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>Dresses</li>
                                    <li>SunGlasses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <h4 className="title">Newsletters</h4>
                    <div className="list-info">
                        <input id="email-customer" placeholder="exam@gmail.com"></input>
                        <div id="button-subscribe"><Button nameButton="Subscribe" isRadios="true"/></div>     
                    </div>
                </div>
            </div>
        </div>
    )
}
 