import React, { Component } from 'react';

class Avatar extends Component {
    render () {
        return (
            <div className="rounded" style={{border: "5px solid white", height: "600px", width:"400px"}}>
                <div className="m-auto">
                    <h1>Lauren Reilly</h1>
                    <p>407-252-1431</p>
                    <p>LaurenReillyNet@gmail.com</p>
                </div>
                <div className="text-center m-2">
                    <div className="rounded" style={{backgroundColor: "white"}}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatar;