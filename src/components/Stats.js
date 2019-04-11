import React, { Component } from 'react';
import { connect } from 'react-redux';

import Skills from './Skills';
import About from './About';
import Projects from './Projects';


//based on what type of stats the user has selected will return the button to toggle between about/skills/projects and the corresponding menu of stats.
class Stats extends Component {
    toggleStats = () => {
        if (this.props.stats === "Skills") {
            this.props.about()
        } else if (this.props.stats === "About") {
            this.props.projects();
        } else if (this.props.stats === "Projects") {
            this.props.skills();
        } else {
            return
        }
    }

    render() {
        let { stats } = this.props;
        let information;
        if (stats === "Skills") {
            information = <Skills/>
        } else if (stats === "About") {
            information = <About/>
        } else if (stats === "Projects") {
            information = <Projects/>
        } else {
            information = null
        }
        return (
            <div className="stats">
                {information}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      stats: state.stats
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        about: () => dispatch({type: "ABOUT"}),
        projects: () => dispatch({type: "PROJECTS"}),
        skills: () => dispatch({type: "SKILLS"})
     }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Stats);