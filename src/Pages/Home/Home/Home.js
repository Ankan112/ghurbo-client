import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import BootstrapCarousel from '../BootstrapCarousel/BootstrapCarousel';
import Gallery from '../Gallery/Gallery';
import Guide from '../Guide/Guide';
import Offer from '../Offer/Offer'
import Review from '../Review/Review';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <BootstrapCarousel></BootstrapCarousel>
            <Offer></Offer>
            <Gallery></Gallery>
            <Review></Review>
            <Guide></Guide>
            <Footer></Footer>
        </div>
    );
};

export default Home;