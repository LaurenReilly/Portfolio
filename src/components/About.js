import React, { Component } from 'react';
import Toggle from './Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class About extends Component {
    render () {
        return (
            <div className="rounded" style={{border: "1px solid lime", height: "600px", width:"400px"}}>
                <div className="m-auto d-flex justify-content-center align-items-center">
                    <Toggle direction="back"/>
                    <h1 className="text-center mt-3">About</h1>
                    <Toggle direction="forward"/>
                </div>
                <ul className="">
                    <li>Underwater Gardener</li>
                    <li>Cat Mom</li>
                    <li>Video Gamer</li>
                    <li>Nature Lover</li>
                </ul>
                <h4 className="text-center mb-5">Contact Info:</h4>
                <div className="d-flex flex-wrap text-center align-items-around">
                    <div  className="mb-5" style={{width:"50%"}}>
                        <a href="https://linkedin.com/in/laurenreillydev" target="blank">
                            <FontAwesomeIcon size="4x" icon={['fab', 'linkedin']}/>
                        </a>
                    </div>
                    <div className="mb-5" style={{width:"50%"}}>
                        <a href="https://github.com/LaurenReilly" target="blank">
                            <FontAwesomeIcon size="4x" icon={['fab', 'github-square']}/>
                        </a>
                    </div>
                    <div style={{width:"50%"}}>
                        <FontAwesomeIcon size="4x" icon="laptop"/>
                        <p className="mt-3">LaurenReillyNet@gmail.com</p>
                    </div>
                    <div style={{width:"50%"}}>
                        <FontAwesomeIcon size="4x" icon="mobile-alt"/>
                        <p className="mt-3">407-252-1431</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;