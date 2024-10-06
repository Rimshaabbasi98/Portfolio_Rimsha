import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import LeftNav from './components/LeftNav';

const App = () => {
  return (
    <div>
      <LeftNav />
      <div id="Home"><Home /></div> {/* Wrap in div with id */}
      <div id="About"><About /></div> {/* Wrap in div with id */}
      <div id="Skills"><Skills /></div> {/* Wrap in div with id */}
      <div id="Projects"><Projects /></div> {/* Wrap in div with id */}
      <div id="Contact"><ContactForm /></div> {/* Wrap in div with id */}
    </div>
  );
};

export default App;
