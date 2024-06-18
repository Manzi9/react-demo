import React, { Component } from "react";
class Socials extends Component {
  render() {
    //Do I wrap socials in a Div or have indiviual files for each one?
    return (
      <div className="Socials">
        <img
          src="https://gcdnb.pbrd.co/images/xy1SxY6UBCwV.png?o=1"
          alt="Linkedin Logo"
        />
        <img
          src="https://gcdnb.pbrd.co/images/WLrjEhe4aygL.png?o=1"
          alt="Twitter Logo"
        />
        <img
          src="https://gcdnb.pbrd.co/images/GvLkIdykqi71.png?o=1"
          alt="GitHub Logo"
        />
      </div>
    );
  }
}

export default Socials;
