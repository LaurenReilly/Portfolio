import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Projects extends Component {
    render () {
        return (
            <div className="rounded" style={{border: "5px solid white", height: "600px", width:"400px"}}>
                <div className="m-auto">
                    <h1 className="text-center">Projects</h1>
                </div>
                <div className="text-center m-2">
                    <div className="rounded m-auto d-flex flex-wrap" style={{backgroundColor: "white", width: "80%", height: "400px"}}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;