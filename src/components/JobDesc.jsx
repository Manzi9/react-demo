import React, { Component } from "react";
class JobDesc extends Component {
  render() {
    return (
      <section>
        <p>{this.props.title}</p>
      </section>
    );
  }
}

export default JobDesc;
