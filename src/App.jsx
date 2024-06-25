import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutpage from "./components/Aboutpage";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <Home/>
      <Aboutpage/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
