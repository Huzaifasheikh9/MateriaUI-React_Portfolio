import './Worksample.css';
import WS1 from '../../media/WS1.jpg';
import WS2 from '../../media/WS2.jpg';
import WS3 from '../../media/WS3.jpg';
import WS4 from '../../media/WS4.jpg';
import WS5 from '../../media/WS5.jpg';
import WS6 from '../../media/WS6.jpg';
const Worksample = () => {
    return (
        <div className="WS-Container">
            {/* Div with the 10% section of the whole Containe  */}
            <div></div>

            {/* Div with the 80% section of the whole Containe  */}
            <div className="WorkSampleContainer">
                <div className="WsText">
                    <div className="WsFirstText">
                        <p>PORTFOLIO</p>
                    </div>
                    <div className="WsSecondText">
                        <h2>My Work Examples</h2>
                    </div>
                    <div className="WsThirdText">
                        <p><span>ALL</span> &nbsp;&nbsp; Branding Logo &nbsp;&nbsp;  UI/UX&nbsp;&nbsp; Web Design</p>
                    </div>
                </div>

                <div className="WsImage1"><img className="WsImageStyling" src={WS1} alt="" /></div>
                <div className="WsImage2"><img className="WsImageStyling"  src={WS2} alt="" /></div>
                <div className="WsImage3"><img className="WsImageStyling"  src={WS3} alt="" /></div>
                <div className="WsImage4"><img className="WsImageStyling"  src={WS4} alt="" /></div>
                <div className="WsImage5"><img className="WsImageStyling"  src={WS5} alt="" /></div>
                <div className="WsImage6"><img className="WsImageStyling"  src={WS6} alt="" /></div>
                <div className="WsBtn">
                    <button className="WsVAbtn">View All</button>
                </div>


            </div>

            {/* Div with the 10% section of the whole Containe  */}
            <div></div>
        </div>

    );
}


export default Worksample;