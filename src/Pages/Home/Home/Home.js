import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import IntroAboutAService from '../IntroAboutAService/IntroAboutAService';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <IntroAboutAService></IntroAboutAService>
            <AppointmentBanner></AppointmentBanner>
            <Contact></Contact>
        </div>
    );
};

export default Home;