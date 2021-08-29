import './Skillmeter.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skillmeter = () => {
    const percentage1 = 50;
    const percentage2 = 75;
    const percentage3 = 20;
    const percentage4 = 50;
    return (
        <div className="MeterContainer">
            {/* This is the div with 10% */}
            <div></div>

            {/* This is the div with 80% */}
            <div className="SkillContainer">
                <div className="FirstSkill">
                    <div className="SkillMeterSize">
                        <CircularProgressbarWithChildren value={50}

                            styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(29,84,140,255) , ${percentage1 / 100})`,
                                    strokeWidth: '2px',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#B2c4d6',
                                    strokeWidth: '0.6px',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center ',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '',
                                    // Text size
                                    fontSize: '20px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '',
                                },
                            }}

                        >
                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                                <div className="SkillNo"><strong>{`${percentage1}%`}</strong></div>
                                <div className="SkillName"><p>WEB DESIGN</p></div>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>

                <div className="SecondSkill">

                    <div className="SkillMeterSize">
                        <CircularProgressbarWithChildren value={75}

                            styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(29,84,140,255) , ${percentage2 / 100})`,
                                    strokeWidth: '2px',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#B2c4d6',
                                    strokeWidth: '0.6px',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center ',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '',
                                    // Text size
                                    fontSize: '20px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '',
                                },
                            }}

                        >
                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                                <div className="SkillNo"><strong>{`${percentage2}%`}</strong></div>
                                <div className="SkillName"><p>DEVELOPMENT</p></div>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
                <div className="ThirdSkill">
                    <div className="SkillMeterSize">
                        <CircularProgressbarWithChildren value={20}

                            styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(29,84,140,255) , ${percentage3 / 100})`,
                                    strokeWidth: '2px',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#B2c4d6',
                                    strokeWidth: '0.6px',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center ',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '',
                                    // Text size
                                    fontSize: '20px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '',
                                },
                            }}

                        >
                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                                <div className="SkillNo"><strong>{`${percentage3}%`}</strong></div>
                                <div className="SkillName"><p>WEB DESIGN</p></div>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
                <div className="FourthSkill">
                    <div className="SkillMeterSize">
                        <CircularProgressbarWithChildren value={50}

                            styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(29,84,140,255) , ${percentage4 / 100})`,
                                    strokeWidth: '2px',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#B2c4d6',
                                    strokeWidth: '0.6px',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center ',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '',
                                    // Text size
                                    fontSize: '20px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '',
                                },
                            }}

                        >
                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                                <div className="SkillNo"><strong>{`${percentage4}%`}</strong></div>
                                <div className="SkillName"><p>WEB DESIGN</p></div>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
            </div>
            {/* This is the div with 10% */}
            <div></div>
        </div>

    );

}

export default Skillmeter;