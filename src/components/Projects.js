import React, { Component } from 'react'
import Toggle from './Toggle'

class Projects extends Component {
    render () {
        return (
            <div className="rounded" style={{border: "1px solid lime", height: "600px", width:"400px"}}>
                <div className="m-auto d-flex justify-content-center align-items-center">
                    <Toggle direction="back"/>
                    <h1 className="text-center mt-3">Projects</h1>
                    <Toggle direction="forward"/>
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