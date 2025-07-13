import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Work from './Pages/Work/Work';
import SocialBar from './components/SocialBar/SocialBar';
import About from './Pages/About/About';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  const location = useLocation();
  const isHero = location.pathname === '/';

  return (
    <>
      { isHero ? <SocialBar /> : <Navigation /> }
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
