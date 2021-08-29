import './Expertise.css';
import React from 'react';
// import {  withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// const GlobalCss = withStyles({
//     // @global is handled by jss-plugin-global.
//     '@global': {
//       // You should target [class*="MuiButton-root"] instead if you nest themes.
//       '.MuiLinearProgress-barColorPrimary ': {
//         backgroundColor: '#1d548c',
//       },
//     },
//   })(() => null);

const Expertise = () => {
    const WD = 95;
    const GD = 95;
    const LD = 95;
    const AD = 90;
    const AA = 80;
    const PS = 85;
    return (
        <div className="ExpContainer">
            {/* Div with 10% content */}
            <div></div>


            {/* Div with 80% content */}
            <div className="ExpertiseContainer">
                <div className="ExpertieTextContainer">
                    <div className="ExpertiseFristText">
                        <div>
                            <p>SKILL</p>
                        </div>
                    </div>

                    <div className="ExpertiseSecondText">
                        <div><h2>My Expertise</h2></div>
                    </div>
                    <div className="ExpertiseButton">
                        <button className="ExpBtnStyling">Hire Me</button>
                    </div>
                </div>
                <div className="ExpSkillsContainer">
                    {/* <GlobalCss></GlobalCss> */}
                    <div className="WD">
                        <h2>{WD}%</h2>
                        <LinearProgress classes={{ barColorPrimary: "ExpertiseOverride" }} variant="determinate" value={WD} color="primary" />
                        <p>Web Design</p>
                        <p>XD, HTML, CSS</p>
                    </div>
                    <div className="GD">
                        <h2>{GD}%</h2>
                        <LinearProgress classes={{ barColorPrimary: "ExpertiseOverride" }} variant="determinate" value={GD} />
                        <p>Graphic Design</p>
                        <p>Photoshop, Illustrator</p>
                    </div>
                    <div className="LD">
                        <h2>{LD}%</h2>
                        <LinearProgress classes={{ barColorPrimary: "ExpertiseOverride" }} variant="determinate" value={LD} />
                        <p>LOGO Design</p>
                        <p>Illustrator, Vector</p>
                    </div>
                    <div className="AD">
                        <h2>{AD}%</h2>
                        <LinearProgress classes={{ barColorPrimary: "ExpertiseOverride" }} variant="determinate" value={AD} />
                        <p>Application Development</p>
                        <p>HTML, CSS, JQuery</p>
                    </div>
                    <div className="AA">
                        <h2>{AA}%</h2>
                        <LinearProgress classes={{ barColorPrimary: "ExpertiseOverride" }} variant="determinate" value={AA} />
                        <p>Analytical Abilities</p>
                        <p>Reporting, Surveying, Teamwork</p>
                    </div>
                    <div className="PS">
                        <h2>{PS}%</h2>
                        <LinearProgress classes={{ barColorPrimary: "ExpertiseOverride" }} variant="determinate" value={PS} />
                        <p>Problem Solving</p>
                        <p>Testing Reviewing</p>
                    </div>


                </div>
            </div>


            {/* Div with 10% content */}
            <div></div>

        </div>
    );
}

export default Expertise;


/**
 * Email address ka pattern regex
 * 2 empty nai hna chye  firstname and last name NOT EMPTLY AT ALL
 * Email proper format MUST
 * PASSWORD must be having atleast 1 upper cast and atleast 1 lower case atleast 1 number atleast 1 special character length must not be less that 10
 *
 *
 * all can be found on REGEX
 *
 */