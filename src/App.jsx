import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements /> 
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
