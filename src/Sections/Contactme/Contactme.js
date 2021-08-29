import './Contactme.css';

const Contactme = () => {
    return (
        <div className="ContactmeContainer">
            {/* This is the div with 10% spacing */}
            <div></div>

            {/* This is the div with 80% spacing */}
            <div className="ContactContainer">
                <div className="ContactText">
                    <div className="ContactFirstText">
                        <p>CONTACT ME</p>
                    </div>
                    <h2>Send Me a Message</h2>
                </div>
                <div className="ContactForm">
                    <form>
                        <input type="text" id="fname" name="Name" placeholder="Name" />
                    </form>
                </div>
                <div className="ContactForm">
                    <form>
                        <input type="text" id="fname" name="Email" placeholder="Email" />
                    </form>
                </div>
                <div className="ContactForm">
                    <form>
                        <input type="text" id="fname" name="Phone#" placeholder="Phone#" />
                    </form>
                </div>
                <div className="ContactForm">
                    <form>
                        <select>
                            <option value="" selected disabled hidden>Budget</option>
                            <option value="$500">$500</option>
                            <option value="$1000">$1000</option>
                            <option value="$2000">$2000</option>
                        </select>
                    </form>
                </div>
                <div className="ContactForm2">
                    <form>
                        <input type="text" id="fname" name="Message" placeholder="Message" />
                    </form>
                </div>
                <div className="ContactBtn">
                    <button className="ContactBtnStyle">Send Message</button>
                </div>

            </div>

            {/* This is the div with 10% spacing */}
            <div className="ContactDotAlign">
                <div className="ContactDotted"></div>
            </div>
        </div>
    );
}

export default Contactme;