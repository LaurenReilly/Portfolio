import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Skills extends Component {
    render () {
        return (
            <div className="rounded" style={{border: "5px solid white", height: "600px", width:"400px"}}>
                <div className="m-auto">
                    <h1 className="text-center">Skills</h1>
                </div>
                <div className="text-center m-2">
                    <div className="rounded m-auto d-flex flex-wrap" style={{backgroundColor: "black", width: "80%", height: "400px"}}>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon={['fab', 'react']}/>
                            <p className="text-center">React.js</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon="sitemap"/>
                            <p className="text-center">Redux</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon={['fab', 'js-square']}/>
                            <p className="text-center">JavaScript</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon={['fab', 'node']}/>
                            <p className="text-center">Node.js</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon="server"/>
                            <p className="text-center">Express.js</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon="database"/>
                            <p className="text-center">PostgreSQL</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon={['fab', 'github-square']}/>
                            <p className="text-center">Git</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon="bug"/>
                            <p className="text-center">Debugging</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon={['fab', 'css3-alt']}/>
                            <p className="text-center">CSS3</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon={['fab', 'html5']}/>
                            <p className="text-center">HTML5</p>
                        </div>
                        <div className="m-1">
                            <FontAwesomeIcon size="4x" icon={['fab', 'bootstrap']}/>
                            <p className="text-center">Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;