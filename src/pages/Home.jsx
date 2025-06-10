import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HomeServices from '../components/HomeServices';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import HomeContact from '../components/HomeContact';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <HomeServices />
      <Testimonials />
      <Gallery />
      <HomeContact />
    </div>
  );
};

export default Home;

