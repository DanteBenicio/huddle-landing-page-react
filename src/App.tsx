import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import data from './data';

function App() {
  return (
    <>
      <HeroSection />
      <Section {...data.section} />
      <Section rowReverse {...data.section2} />
      <Section {...data.section3} />
      <Footer />
    </>
  );
}

export default App;
