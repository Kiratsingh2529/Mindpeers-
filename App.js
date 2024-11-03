import React from 'react';
import './App.css';
import Header from './Header';
import NeuroscienceSection from './NeuroscienceSection';
import Approach from './Approach';
import PartnerSection from './PartnerSection';
import ResearchSection from './ResearchSection';
import MentalStrengthSection from './MentalStrengthSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NeuroscienceSection />
      <Approach />
      <PartnerSection />
      <ResearchSection />
      <MentalStrengthSection />
      <Footer />
    </div>
  );
}

export default App;

