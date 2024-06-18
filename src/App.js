import React, { Component } from "react";
import Header from "./components/Header"; //Why is this highligted with an error?
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import Socials from "./components/Socials";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Socials />
        <Jobs />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
