import React, { Component } from "react";
import JobTitle from "./JobTitle"; //filepath is underlined red again
import JobDesc from "./JobDesc"; //filepath is underlined red again

class Jobs extends Component {
  render() {
    return (
      <main>
        <JobTitle title={"LAVOIE"} />
        <JobDesc title={"Job Description"} />
        {/* Do I just paste the entire job Description here? */}
        <JobTitle title={"FuroSystems"} />
        <JobDesc title={"Job Description"} />
        <JobTitle title={"Canyon Bikes"} />
        <JobDesc title={"Job Description"} />
      </main>
    );
  }
}

export default Jobs;
