import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Components/Layout'; 
import Loading from './Components/Loading'; 
import Homepage from './Components/Homepage';  
import About from './Components/About';
import Contact from './Components/Contact';
import Confirmation from './Components/Confirmation';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loading spinner whenever the route changes
    setIsLoading(true);

    // Simulate a delay for the loading spinner
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust timeout duration as needed

    return () => clearTimeout(timer);
  }, [location]); // Re-run the effect whenever the location changes

  if (isLoading) {
    // Render only the loading component while loading
    return <Loading />;
  }

  // Render the main content only after loading completes
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
  );
}

export default App;
