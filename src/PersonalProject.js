import React, {Component} from "react";
import Project from "./Components/Project"

class PersonalProject extends Component{
    render(){
        return(
            <>
                <Project
                    title = "Test Project Alpha"
                    description = "This is to make sure that this component works"/>
            </>
        )
    }
}

export default PersonalProject;