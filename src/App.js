import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";
  const color1 = "green";

  return (
    <>
      <Nav color={color1} />
      <Header color={color1} />
      <About color={color1} />
      <Experience color={color1} />
      <Projects color={color1} />
      <Contact color={color1} />
    </>
  );
}

export default App;
