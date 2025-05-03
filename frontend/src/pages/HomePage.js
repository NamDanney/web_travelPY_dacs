import React from 'react';
import HeroSection from '../components/HomePages/HeroSection';
import '../styles/HomePageCSS/HomePage.css';
import AboutSection from '../components/HomePages/AboutSection';
import DestinationsSection from '../components/HomePages/DestinationsSection';
import TravelPlanSection from '../components/HomePages/TravelPlanSection';
import TestimonialsSection from '../components/HomePages/TestimonialsSection';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <main className="home-content">
                <AboutSection />
                <DestinationsSection />
                <TravelPlanSection />
                <TestimonialsSection />
            </main>
        </div>
    );
};

export default HomePage;