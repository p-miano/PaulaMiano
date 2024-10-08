import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import GithubStats from './components/GithubStats';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <GithubStats />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;