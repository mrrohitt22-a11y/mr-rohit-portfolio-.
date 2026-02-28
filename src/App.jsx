import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Ventures from './components/Ventures';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import AmbientBackground from './components/AmbientBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="app-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AmbientBackground />
          <Hero />
          <About />
          <Skills />
          <Ventures />
          <Services />
          <Testimonials />
          <Contact />
          <Chatbot />
        </motion.div>
      )}
    </>
  );
}

export default App;
