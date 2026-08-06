import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './sections/Hero.tsx'; 
import Features from './sections/Features.tsx';
import Courses from './sections/Courses.tsx'; 
import Pricing from './sections/Pricing.tsx';
import TrialForm from './sections/TrialForm.tsx';
import Footer from './components/Footer.tsx';
import Testimonial from './sections/Testimonial.tsx';
import GymGallery from './sections/GymGallery.tsx';


const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <GymGallery />
        <div id="features">
          <Features />
        </div>
        <Courses /> 
        <Pricing />
        < Testimonial />
        <TrialForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;