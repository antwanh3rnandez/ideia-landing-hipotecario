import HeroSection from '../src/components/heroComponent';
import Features from './components/featuresComponent';
import Simulador from './components/simuladorComponent';
import Benefits from './components/benefitsComponent';
import CallToAction from './components/callToActionComponent';
import Footer from './components/footerComponent';


export default function MyApp() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Simulador />
      <Benefits />
      <CallToAction/>
      <Footer/>
    </div>
  );
}
