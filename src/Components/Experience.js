import React,{Component} from "react";

function Experience(prop) {
    return <React.Fragment>
        <h2>{prop.title} ({prop.timeFrame})</h2>
        <p>{prop.description}</p>
    </React.Fragment>
}

export default Experience;