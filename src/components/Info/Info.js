import './Info.css';
import dribble from "../../media/dribbble.png";
import facebook from "../../media/facebook.png";
import linkedin from "../../media/linkedin.png";
import twitter from "../../media/twitter.png";
import mypic from "../../media/mypic.jpg";

const Info = () => {
    return (


        <div className="Container">
            {/* containing the 10% */}
            <div>
                <div className="SocialMedia">
                    <ul>
                        <li><img style={{ height: "30px", width: "30px" }} src={dribble} alt="dribble" /></li>
                        <li><img style={{ height: "30px", width: "30px" }} src={facebook} alt="facebook" /></li>
                        <li><img style={{ height: "30px", width: "30px" }} src={linkedin} alt="linkedin" /></li>
                        <li><div className="twitterBG">
                            <div className="Twitter">
                                <img style={{ height: "30px", width: "30px" }} src={twitter} alt="twitter" />
                            </div>
                        </div></li>
                    </ul>
                </div>
            </div>


            {/* Containning the 80% */}
            <div className=" InnerContainer">

                {/* Div for writtenc content */}
                <div className="Info">

                    <div className="Welcome">
                        <p>Welcome I'M</p>
                    </div>

                    <div className="innerText">
                        <h1>Huzaifa Sheikh</h1>
                        <p>UI & UX Designer</p><br />
                    </div>

                    <div className="lowerText">
                        <p> I am a student of SZABIST currently in the
                            6th semester.
                            I am a punctual and motivated individual
                            who can work in a busy environment and
                            produce high standards of work. I am an
                            excellent team worker and can take
                            instructions from all levels and build up
                            good working relationships with all
                            colleagues. I am flexible, reliable and
                            possess excellent time keeping
                            skills. My future aim is to become a fullstack
                            web developer.</p>
                    </div>
                    <button className="BlueBtn">Hire Me</button>
                    <button className="WhiteBtn">Explore</button>
                </div>


                {/* Div for the picture */}
                <div className="imgContainer">
                    <img src={mypic} alt="Huzaifa Sheikh" />
                </div>




            </div>


            {/* Containing the 10% */}
            <div></div>
        </div>
    );

}

export default Info;





