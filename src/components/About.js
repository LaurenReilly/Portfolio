import React, { Component } from 'react';
import Toggle from './Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class About extends Component {
    render () {
        return (
            <div className="rounded" style={{border: "1px solid lime", height: "600px", width:"400px"}}>
                <div className="m-auto d-flex justify-content-between align-items-center">
                    <Toggle direction="back"/>
                    <h1 className="text-center mt-3">About</h1>
                    <Toggle direction="forward"/>
                </div>
                <p className="m-2">I’ve been a gamer since I was a little kid which is what first inspired me to learn how to code. It wasn't long before I realized that not only do I love coding games, I just love coding in general! Software engineering allows me to exercise some of my greatest strengths: creativity, logic, and my love of learning. One thing that excites me most about this field is that there is always something new to learn which is why I am searching for a job that will encourage me to grow.</p>
                <h4 className="text-center my-3">Contact Info:</h4>
                <div className="d-flex flex-wrap text-center align-items-around">
                    <div  className="mb-3" style={{width:"50%"}}>
                        <a href="https://linkedin.com/in/laurenreillydev" target="blank">
                            <FontAwesomeIcon className="aboutLinks" size="4x" icon={['fab', 'linkedin']}/>
                        </a>
                    </div>
                    <div className="mb-3" style={{width:"50%"}}>
                        <a href="https://github.com/LaurenReilly" target="blank">
                            <FontAwesomeIcon className="aboutLinks" size="4x" icon={['fab', 'github-square']}/>
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