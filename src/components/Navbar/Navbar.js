import './Navbar.css'
import navbar from '../../media/Navbar.png';

const Navbar = () => {
    return (
        <div className="navContainer">
            <div></div>
            <div className="NavC">
                <div className="GHS"><h2>GHS</h2></div>
                <ul className="navUL">
                    {/* <li className="GHS"><a href="/">GHS</a></li> */}
                    <li className="text"><a href="/">Home</a></li>
                    <li className="text"><a href="/">About Us</a></li>
                    <li className="text"><a href="/">Portfolio</a></li>
                    <li className="text"><a href="/">Contact Us</a></li>
                </ul>
                <div className="navImage"><button className="hire">Hire me!</button></div>

            </div>


            <div className="MobNavUL">
                <div className="mobNavContainer">
                    <span className="mobGHS">GHS</span>
                    <div className="MNC">
                        <img className="mobNavImg" src={navbar} alt="navbarpics" />
                    </div>
                </div>
                <div className="MobDropDownTxtC">
                    <ul className="MobDropDownTxt">
                        <li className="Mobtext"><a href="/">Home</a></li>
                        <li className="Mobtext"><a href="/">About Us</a></li>
                        <li className="Mobtext"><a href="/">Portfolio</a></li>
                        <li className="Mobtext"><a href="/">Contact Us</a></li>
                    </ul>
                </div>
            </div>


            <div></div>
        </div>
    );
}

export default Navbar;


// template for the every component
// const Filename = () => {
//     return (
//         <div className="Container">
//             <div></div> // div with 10% grid
//             <div        // div with 80% grid
//               
// 
// 
// 
// 
//
//             </div>
//             <div></div> // div with 10% grid
//         </div>
//     );
// }