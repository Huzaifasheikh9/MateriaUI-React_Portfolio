import "./Blog.css";
import BI1 from '../../media/BlogImage1.jpg';
import BI2 from '../../media/BlogImage2.jpg';
import BI3 from '../../media/BlogImage3.jpg';

const Blog = () => {
    return (
        <div className="BlogContainer">
            {/* Div with the 10% space */}
            <div></div>


            {/* Div with the 80% space */}
            <div className="BContainer">
                <div className="BlogText">
                    <div className="BlogFirstText"><p>BLOG</p></div>
                    <div><h2>Trendy News Feeds</h2></div>
                </div>
                <div className="BlogBlocks">
                    <div className="BlogBlocksItem1">
                        <img className="BlogImageStyling" src={BI1} alt="" />
                        <div className="BLOGtxtC">
                            <p className="BlogItemDate">26th October, 2019</p>
                            <p className="BlogText2">I Used The Web For A Day On A 50MB Budget</p>
                            <p className="BlogText3">─ ─ ─</p>
                            <p className="BlogText4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                            </p>
                            <p className="BlogText5">Know More →</p>
                        </div>
                    </div>
                    <div className="BlogBlocksItem2">
                        <img className="BlogImageStyling" src={BI2} alt="" />
                        <div className="BLOGtxtC">
                            <p className="BlogItemDate">21th November, 2019</p>
                            <p className="BlogText2">I Used The Web For A Day On A 50MB Budget</p>
                            <p className="BlogText3">─ ─ ─</p>
                            <p className="BlogText4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                            </p>
                            <p className="BlogText5">Know More →</p>
                        </div>
                    </div>
                    <div className="BlogBlocksItem3">
                        <img className="BlogImageStyling" src={BI3} alt="" />
                        <div className="BLOGtxtC">

                            <p className="BlogItemDate">29th November, 2019</p>
                            <p className="BlogText2">I Used The Web For A Day On A 50MB Budget</p>
                            <p className="BlogText3">─ ─ ─</p>
                            <p className="BlogText4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                            </p>
                            <p className="BlogText5">Know More →</p>
                        </div>
                    </div>

                </div>
                <div className="BlogBtn">
                    <button className="BlogBtnStyle">View All</button>
                </div>
            </div>


            {/* Div with the 10% space */}
            <div></div>
        </div>
    );
}

export default Blog;