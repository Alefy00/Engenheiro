import Header from './components/Header';
import About from './components/About';
import ProjectsCarousel from './components/ProjectsCarousel';
import Services from './components/Services';
import Contact from './components/Contact';
import MainSection from './components/MainSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <MainSection />
      <About />
      <Services />
      <ProjectsCarousel />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
