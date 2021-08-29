import './Footer.css';

const Footer = () => {
    return (
        <div className="FooterBdrBtm">
            <div className="FooterContainer">
                {/* This is the div with 10% space */}
                <div></div>

                {/* This is the div with 80% space */}
                <div className="FooterInnerContainer">
                    <div className="FooterBox1">
                        <p>GHS</p>
                    </div>
                    <div className="FooterBox2">
                        <p>I'm a digital designer living  in United States Apart from eating burger</p>
                    </div>
                    <div className="FooterBox3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, elit elit elit elit elit elit  elit

                        </p>
                    </div>
                    <div className="FooterBox4">
                        <p className="teamBlue">SENT MAIL</p>
                        <p className="teamDarkBlue">info@portfolio.com</p>
                        <p className="teamDarkBlue">career.portfolio.com</p>
                    </div>
                    <div className="FooterBox5">
                        <p className="teamBlue">
                            MAKE CALL
                        </p>
                        <p className="teamDarkBlue">
                            +92 304 9277772
                        </p>
                        <p className="teamDarkBlue">
                            +92 344 8890943
                        </p>
                    </div>
                    <div className="FooterBox6">
                        <p className="teamBlue">GET IN TOUCH</p>
                        <p className="teamDarkBlue">H4.Sector F-6/1</p>
                        <p className="teamDarkBlue">Islamabad, Pakistan</p>
                    </div>
                </div>
                {/* This is the div with 10% space */}
                <div></div>

            </div>
        </div>
    );

}

export default Footer;