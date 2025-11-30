import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Scanner from './components/Scanner';
import PestMap from './components/PestMap';
import PredictionDashboard from './components/PredictionDashboard';
import SoilScanner from './components/SoilScanner';
import LossCalculator from './components/LossCalculator';
import AIAssistant from './components/AIAssistant';
import Community from './components/Community';
import PlantProgress from './components/PlantProgress';
import Marketplace from './components/Marketplace';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero onGetStarted={() => setActiveSection('scanner')} />
            <Features onFeatureClick={setActiveSection} />
          </>
        );
      case 'scanner':
        return <Scanner />;
      case 'map':
        return <PestMap />;
      case 'prediction':
        return <PredictionDashboard />;
      case 'soil':
        return <SoilScanner />;
      case 'calculator':
        return <LossCalculator />;
      case 'assistant':
        return <AIAssistant />;
      case 'community':
        return <Community />;
      case 'progress':
        return <PlantProgress />;
      case 'marketplace':
        return <Marketplace />;
      default:
        return (
          <>
            <Hero onGetStarted={() => setActiveSection('scanner')} />
            <Features onFeatureClick={setActiveSection} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="pb-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
