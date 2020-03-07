import React,{Component} from "react";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
class WorkExperience extends Component{
    render(){
        return(
            <>
                <Experience
                    title = "Curriculum Specialist"
                    timeFrame = "06/2016 - current" 
                    description = "I created curriculum for the education of children that can be used by the rest of my team to consistently give the greatest result"/>
            </>
        )
    }
}

export default WorkExperience;