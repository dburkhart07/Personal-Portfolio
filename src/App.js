import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout'; 
import Homepage from './Components/Homepage';  
import About from './Components/About';
import Contact from './Components/Contact';
import Confirmation from './Components/Confirmation';
import Projects from './Components/Projects';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
