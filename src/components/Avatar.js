import React, { Component } from 'react';
import lauren from '../assets/lauren-avatar.png'

class Avatar extends Component {
    render () {
        return (
            <div className="rounded avatar m-2" style={{border: "1px solid lime", height: "600px", width:"400px"}}>
                <div className="m-auto">
                    <h1 className="text-center mt-3">Lauren Reilly</h1>
                    <p className="ml-3 p-0"><span className="label mr-3">Class:</span>Full Stack Web Developer</p>
                    <p className="ml-3 p-0"><span className="label mr-3">Alignment:</span>Lawful Good</p>
                </div>
                <div className="text-center m-2">
                    <div className="rounded m-auto" style={{ width: "80%", height: "400px"}}>
                    <img alt="avatar of lauren" src={lauren} style={{width: "227.5px", height: "390px"}}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatar;