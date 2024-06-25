import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutpage from "./components/Aboutpage";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home/>
      <Aboutpage/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
