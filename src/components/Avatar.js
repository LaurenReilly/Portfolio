import React, { Component } from 'react';

class Avatar extends Component {
    render () {
        return (
            <div className="rounded avatar" style={{border: "1px solid lime", height: "600px", width:"400px"}}>
                <div className="m-auto">
                    <h1 className="text-center mt-3">Lauren Reilly</h1>
                    <p className="text-center">407-252-1431</p>
                    <p className="text-center">LaurenReillyNet@gmail.com</p>
                </div>
                <div className="text-center m-2">
                    <div className="rounded m-auto" style={{backgroundColor: "white", width: "80%", height: "400px"}}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatar;