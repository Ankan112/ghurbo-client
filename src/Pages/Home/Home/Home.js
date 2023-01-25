import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import BootstrapCarousel from '../BootstrapCarousel/BootstrapCarousel';
import FAQ from '../FAQ/FAQ';
import Gallery from '../Gallery/Gallery';
import Guide from '../Guide/Guide';
import NewsLetter from '../NewsLetter/NewsLetter';
import Offer from '../Offer/Offer'
import PriceSection from '../PriceSection/PriceSection';
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
            <FAQ></FAQ>
            <PriceSection></PriceSection>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;