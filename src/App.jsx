import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Page from './assets/page'
import About from './About';
import Project from './Project';
import Contact from './Contact'
import ScrollToTop from './assets/ScrolltoTop';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

    </div>

  );
}

export default App