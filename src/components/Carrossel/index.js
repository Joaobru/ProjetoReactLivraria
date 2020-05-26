import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/img/gif.gif";
import img2 from "../../assets/img/gif2.gif";
import img3 from "../../assets/img/gif.gif";
import img4 from "../../assets/img/gif2.gif";
import { Carrossel } from './style.js';

class DemoCarousel extends Component {
    render() {
        return (
            <Carrossel>
                <Carousel width="100%" autoPlay transitionTime={2000} showStatus={false} infiniteLoop stopOnHover={false} showThumbs={false} dynamicHeight>
                    <div>
                        <img src={img1} alt="gif" />
                    </div>
                    <div>
                        <img src={img2} alt="Viagem ao centro da terra"/>
                    </div>
                    <div>
                        <img src={img3} alt="Viagem ao centro da terra"/>
                    </div>
                    <div>
                        <img src={img4} alt="Viagem ao centro da terra"/>
                    </div>
                </Carousel>
            </Carrossel>
        );
    }
};



export default DemoCarousel;
