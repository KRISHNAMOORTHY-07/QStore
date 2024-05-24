import React, { useContext} from 'react';
import Slider from "react-slick";
import './index.css';

import Slide1 from '../../../assets/images/slider-1.png';
import Slide2 from '../../../assets/images/slider-2.png';
import Slide3 from '../../../assets/images/slider-3.png';
import Slide4 from '../../../assets/images/slider-4.png';



import Newsletter from '../../../components/newsletter';

import { MyContext } from '../../../App';

const HomeSlider = () => {

    const context = useContext(MyContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: context.windowWidth>992 ? true : false,
        autoplay:true
    };



    return (
        <section className='homeSlider'>
            <div className='container-fluid position-relative'>
                <Slider {...settings} className='home_slider_Main'>
                    <div className="item">
                        <img src={Slide1} className='w-100' />
                        <div className='info'>
                            <h2 class="mb-4">
                                Don’t miss amazing<br />
                                grocery deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide2} className='w-100' />
                        <div className='info'>
                            <h2 class="mb-3">
                               All grocery Home Products<br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide3} className='w-100' />
                        <div className='info'>
                            <h2 class="mb-3">
                                Big Sales<br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide4} className='w-100' />
                        <div className='info'>
                            <h2 class="mb-3">
                                Grocery Products<br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    
                </Slider>

                {
                    context
                    .windowWidth>992 && <Newsletter/>
                }
                

            </div>
        </section>
    )
}

export default HomeSlider;