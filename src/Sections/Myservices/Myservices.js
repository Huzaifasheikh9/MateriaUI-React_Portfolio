import './Myservices.css';
import WebDesign from '../../media/WebDesign.png';
import GraphicDesign from '../../media/GraphicDesign.png';
import LogoDesign from '../../media/LogoDesign.png';
import Application from '../../media/Application.png';
import MotionDesign from '../../media/MotionDesign.png';
import BrandDesign from '../../media/BrandDesign.png';

const Myservices = () => {
    return (
        <div className="MS-Container">
            {/* This is the 10% div */}
            <div></div>

            {/* This is the 80% div */}
            <div className="MyServicesContainer">
                <div className="MyServicesbox1">
                    <div className="ServicesFirstText">
                        <p>MY SERVICES</p>
                    </div>
                    <div className="Servicesh2">
                        <h2>My Provided Features</h2>
                    </div>
                </div>
                <div className="MyServicesbox2">
                    <ul>
                        <li><div className="ServiceBoxDesign"><img src={WebDesign} style={{ height: "40px", width: "40px" }} alt="facebook" /></div></li>
                        <li><div className="WBtxt">Web Design</div></li>
                        <li><div className="WDbrd">─ ─ ─</div></li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel o fuga praesentium
                            optio, eaque rerum! eaque eaque</li>
                        <li><div className="SrvBtnDiv"><button className="SrvBtn">Know More <span className="ArwHd">→</span></button></div></li>
                    </ul>
                </div>
                <div className="MyServicesbox3">
                    <ul>
                        <li><div className="WhiteServiceBoxDesign"><img src={GraphicDesign} style={{ height: "40px", width: "40px" }} alt="facebook" /></div></li>
                        <li><div className="WhiteWBtxt">Graphics Design</div></li>
                        <li><div className="WhiteWDbrd">─ ─ ─</div></li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel o fuga praesentium
                            optio, eaque rerum! eaque eaque</li>
                        <li><div className="SrvBtnDiv"><button className="WhiteSrvBtn">Know More <span className="ArwHd">→</span></button></div></li>
                    </ul>
                </div>
                <div className="MyServicesbox4">
                    <ul>
                        <li><div className="ServiceBoxDesign"><img src={LogoDesign} style={{ height: "40px", width: "40px" }} alt="facebook" /></div></li>
                        <li><div className="WBtxt">Logo Design</div></li>
                        <li><div className="WDbrd">─ ─ ─</div></li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel o fuga praesentium
                            optio, eaque rerum! eaque eaque</li>
                        <li><div className="SrvBtnDiv"><button className="SrvBtn">Know More <span className="ArwHd">→</span></button></div></li>
                    </ul>
                </div>
                <div className="MyServicesbox5">
                    <ul>
                        <li><div className="ServiceBoxDesign"><img src={Application} style={{ height: "40px", width: "40px" }} alt="facebook" /></div></li>
                        <li><div className="WBtxt">Application</div></li>
                        <li><div className="WDbrd">─ ─ ─</div></li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel o fuga praesentium
                            optio, eaque rerum! eaque eaque</li>
                        <li><div className="SrvBtnDiv"><button className="SrvBtn">Know More <span className="ArwHd">→</span></button></div></li>
                    </ul>
                </div>
                <div className="MyServicesbox6">
                    <ul>
                        <li><div className="ServiceBoxDesign"><img src={MotionDesign} style={{ height: "40px", width: "40px" }} alt="facebook" /></div></li>
                        <li><div className="WBtxt">Motion Design</div></li>
                        <li><div className="WDbrd">─ ─ ─</div></li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel o fuga praesentium
                            optio, eaque rerum! eaque eaque</li>
                        <li><div className="SrvBtnDiv"><button className="SrvBtn">Know More <span className="ArwHd">→</span></button></div></li>
                    </ul>
                </div>
                <div className="MyServicesbox7">

                    <ul>
                        <li><div className="ServiceBoxDesign"><img src={BrandDesign} style={{ height: "40px", width: "40px" }} alt="facebook" /></div></li>
                        <li><div className="WBtxt">Brand Design</div></li>
                        <li><div className="WDbrd">─ ─ ─</div></li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel o fuga praesentium
                            optio, eaque rerum! eaque eaque</li>
                        <li><div className="SrvBtnDiv"><button className="SrvBtn">Know More <span className="ArwHd">→</span></button></div></li>
                    </ul>
                    
                        <div className="DottedContent"></div>
                    
                </div>

            </div>

            {/* This is the 10% div */}
            <div></div>
        </div>
    );
}

export default Myservices;