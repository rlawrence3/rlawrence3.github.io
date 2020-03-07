import React,{Component} from "react";
import{
    HashRouter,
    NavLink,
    Router,
    Route
}from "react-router-dom"
import WorkExperience from "./WorkExperience"
import PersonalProject from "./PersonalProject"
import AboutMyself from "./AboutMyself"
import Home from "./Home"


class Main extends Component{
    render(){
        return(
            <>
            <title>Reed's Resume</title>
                <HashRouter>
                    <div>
                        <h1>Reed Lawrence's Site</h1>
                        <ul className = "header">
                            <li><NavLink to = "/home">Home</NavLink></li>
                            <li><NavLink to="/projects">Personal Projects</NavLink></li>
                            <li><NavLink to="/experience">Work Experience</NavLink></li>
                            <li><NavLink to="/about">About Myself</NavLink></li>
                        </ul>
                        <div className = "contents">
                            <Route path = "/projects" component={PersonalProject}/>
                            <Route path = "/experience" component={WorkExperience}/>
                            <Route path = "/about" component = {AboutMyself}/>
                            <Route path = "/home" component = {Home}/>
                        </div>
                    </div>

                </HashRouter>
            </>
        )
    }
}

export default Main;