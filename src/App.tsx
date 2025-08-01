import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FollowSection from './components/FollowSection';
import DonationSection from './components/DonationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FollowSection />
      <DonationSection />
      <Footer />
    </div>
  );
}

export default App;