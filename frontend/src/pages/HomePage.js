import React from 'react';
import HeroSection from '../components/HomePages/HeroSection';
import '../styles/HomePageCSS/HomePage.css'; // Đường dẫn đã được sửa
import AboutSection from '../components/HomePages/AboutSection';
import DestinationsSection from '../components/HomePages/DestinationsSection';
import TravelPlanSection from '../components/HomePages/TravelPlanSection';
import TestimonialsSection from '../components/HomePages/TestimonialsSection';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <DestinationsSection />
            <TravelPlanSection />
            <TestimonialsSection />
        </>
    );
};

export default HomePage;