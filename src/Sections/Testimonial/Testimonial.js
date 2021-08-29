import './Testimonial.css';
import Carousel from 'react-elastic-carousel';
import Item from './item'


const Testimonial = () => {
    return (
        <div className="TContainer">
            {/* This div contains 10% of the content */}
            <div>
                <div className="TDotted"></div>
            </div>

            {/* This div contains 80% of the content */}
            <div>
                <div>
                    <Carousel itemsToShow={1}>
                        <Item>
                            <div className="CarouselItem">
                                <p className="Tfirst">What People Says</p>
                                <p className="Tcommas">“</p>
                                <p className="Tpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                </p>
                                <p className="TName">Huzaifa Sheikh</p>
                                <p className="TSkills">UIUX, Graphic Designer</p>
                            </div>
                        </Item>
                        <Item>2</Item>
                        <Item>3</Item>
                        <Item>4</Item>
                        <Item>5</Item>
                        <Item>6</Item>
                    </Carousel>
                </div>
            </div>


            {/* This div contains 10% of the content */}
            <div></div>
        </div>
    );
}


export default Testimonial;