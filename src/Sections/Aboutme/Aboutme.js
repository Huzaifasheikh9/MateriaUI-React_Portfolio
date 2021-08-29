import './Aboutme.css';
import blueBG from '../../media/BlueBG.png';

const Aboutme = () => {
    return (
        <div className="AboutmeContainer">
            {/* Div with 10% */}
            <div></div>

            {/* Div with 80% */}
            <div className="AboutmeGrid">
                <div className="AboutME">

                    <div className="borderContainer">
                        <div className="OuterBorder"></div>

                        <div className="InnerBorder"></div>
                    </div>

                    <div className="circle"></div>

                    <div className="myIMG2">
                        <img src={blueBG} alt="Huzaifa Sheikh" />
                    </div>

                </div>

                <div className="AboutmeText">
                    <div className="firstText">
                        <p>ABOUT ME</p>
                    </div>
                    <h2>Why hire me for your next project?</h2>
                    <p>I'm Creative Director and UI/UX Designer from Pakistan, working in web designing and print media. I enjoy turning complex problems into
                        simple beautiful and intuitive designs
                        <br/> <br/>
                        My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add a personal
                        touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identify in the most creative way.
                    </p>
                    <button className="CVbtn">Download CV</button>
                </div>

            </div>

            {/* Div with 10% */}
            <div></div>
        </div>

    );
}

export default Aboutme;