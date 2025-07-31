import React from 'react';
import Header from '../Header/Header';
import CoreAspect from '../CoreAspect/CoreAspect';
import AboutUs from '../AboutUs/AboutUs';
import TrainingProgram from '../TrainingProgram/TrainingProgram';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <CoreAspect></CoreAspect>
           <AboutUs></AboutUs>
           <TrainingProgram></TrainingProgram>
           <WhyChooseUs></WhyChooseUs>
           <Footer></Footer> 
        </div>
    );
};

export default Home;