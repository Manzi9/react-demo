import React, { Component } from "react";
import Section from "./Section"; //filepath is underlined red again

class Jobs extends Component {
  render() {
    return (
      <main>
        <Section title={"LAVOIE"} />
        <Section title={"FuroSystems"} />
        <Section title={"Canyon Bikes"} />
      </main>
    );
  }
}

export default Jobs;
