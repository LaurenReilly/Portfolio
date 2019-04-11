import React, { Component } from 'react';
import Toggle from './Toggle';

class About extends Component {
    render () {
        return (
            <div className="rounded" style={{border: "1px solid lime", height: "600px", width:"400px"}}>
                <div className="m-auto d-flex justify-content-center align-items-center">
                    <Toggle direction="back"/>
                    <h1 className="text-center mt-3">About</h1>
                    <Toggle direction="forward"/>
                </div>
                <div className="text-center m-2">
                    <div className="rounded m-auto" style={{backgroundColor: "white", width: "80%", height: "400px"}}>
                        <p className="text-center">Underwater Gardener</p>
                        <p className="text-center">Cat Mom</p>
                        <p className="text-center">Video Gamer</p>
                        <p className="text-center">Nature Lover</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;