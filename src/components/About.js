import React, { Component } from 'react'

class About extends Component {
    render () {
        return (
            <div className="rounded" style={{border: "5px solid white", height: "600px", width:"400px"}}>
                <div className="m-auto">
                    <h1 className="text-center">About</h1>
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