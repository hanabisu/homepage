/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Interests from './components/interests/Interests';
import IntroBanner from './components/introBanner/IntroBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <IntroBanner />
        <Projects />
        <About />
        <Interests />
      </div>
    </div>
  );
}

export default App;
