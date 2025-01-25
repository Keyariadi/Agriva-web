import React from 'react';
import './App.css';

import Header from './components/Header';
import Cover from './components/Cover';
import About from './components/About';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Cover />
      <About />
      <Services />
      <Portofolio />
      <Contact />
    </div>
  );
}

export default App;
