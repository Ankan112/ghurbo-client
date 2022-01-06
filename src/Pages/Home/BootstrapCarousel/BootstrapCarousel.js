import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../img/caro2.jpg'
import img2 from '../../../img/caro1.jpg'
import img3 from '../../../img/caro3.jpg'
const BootstrapCarousel = () => {
    return (
        <Carousel  >
            <Carousel.Item>
                <img
                    style={{ height: '100vh' }}
                    className="d-block w-100 "
                    src={img1}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3 style={{ color: '#2C3E50' }}>Enjoy the tour with Ghurbo</h3>

                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '100vh' }}
                    className="d-block w-100 "
                    src={img2}
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
                    <h3 style={{ color: '#2C3E50' }}>Enjoy the tour with Ghurbo</h3>

                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '100vh' }}
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3 style={{ color: '#2C3E50' }}>Enjoy the tour with Ghurbo</h3>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
};

export default BootstrapCarousel;