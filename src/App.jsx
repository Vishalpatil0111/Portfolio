
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './assets/page';
import About from './About';
import Project from './Project';
import Contact from './Contact';




function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Page/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
  


  );
}

export default App;
