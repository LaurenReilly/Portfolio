import React, { Component } from 'react';
import { connect } from 'react-redux';

//based on what type of stats the user has selected will return the button to toggle between about/skills/projects and the corresponding menu of stats.
class Toggle extends Component {
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

    toggleStatsBack = () => {
        if (this.props.stats === "Skills") {
            this.props.projects();
        } else if (this.props.stats === "About") {
            this.props.skills();
        } else if (this.props.stats === "Projects") {
            this.props.about()
            
        } else {
            return
        }
    }

    render() {
        if (this.props.direction === "forward") {
            return (
                <h2 className="toggle ml-4 mt-4" onClick={() => this.toggleStats()}>&gt;</h2>
            )
        } else if (this.props.direction === "back") {
            return (
                <h2 className="toggle mr-4 mt-4" onClick={() => this.toggleStatsBack()}>&lt;</h2>
            )
        }

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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Toggle);