import React, { Component } from "react";
class JobTitle extends Component {
  state = {};
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
      </section>
    );
  }
}

export default JobTitle;
