import React, {Component} from "react";

function Project(prop){
    return <React.Fragment>
        <h2>
            {prop.title}
        </h2>
        <p>
            {prop.description}
        </p>
    </React.Fragment>;
}

export default Project;