import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Toggle from './Toggle'


class Skills extends Component {
popover = (i) => {
    let array = [
        {title: "React.js", tag: "Finally, a library I can work in while screaming!"},
        {title: "Redux", tag: "Gamer Brain + State Management = Compatible"},
        {title: "JavaScript", tag: "Excited by the endless possibilites of coding"},
        {title: "Node.js", tag: "More packages than Christmas morning!"},
        {title: "Express.js", tag: "I used to work as a server, now I code servers!"},
        {title: "PostgreSQL", tag: "Scheming and querying with the best of them."},
        {title: "Git", tag: "I'm not afraid to commit."},
        {title: "Debugging", tag: "Gotta squash 'em all!"},
        {title: "CSS3", tag: "Enhancing user experience with beautiful functionality"},
        {title: "HTML5", tag: "Focused on SEO and accessibility"},
        {title: "Bootstrap", tag: "Coding things is nice, someone coding things for you is also nice"},
        {title: "Learning", tag: "See a skill I don't have yet? I'll learn it quickly."},
    ]
    let title = array[i].title
    let tag = array[i].tag
    return (
        <Popover id="popover-basic" title={title}>
            {tag}
      </Popover>
    )
}
    render () {
        return (
            <div className="rounded" style={{border: "1px solid lime", height: "600px", width:"400px"}}>
                <div className="m-auto d-flex justify-content-center align-items-center">
                    <Toggle direction="back"/>
                    <h1 className="text-center mt-3">Skills</h1>
                    <Toggle direction="forward"/>
                </div>
                <div className="text-center m-2">
                    <div className="rounded m-auto d-flex flex-wrap justify-content-around" style={{backgroundColor: "black", width: "80%", height: "400px"}}>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(0)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon={['fab', 'react']}/>
                                <p className="text-center">React.js</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(1)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon="sitemap"/>
                                <p className="text-center">Redux</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(2)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon={['fab', 'js-square']}/>
                                <p className="text-center">JavaScript</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(3)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon={['fab', 'node']}/>
                                <p className="text-center">Node.js</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(4)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon="server"/>
                                <p className="text-center">Express.js</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(5)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon="database"/>
                                <p className="text-center">PostgreSQL</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(6)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon={['fab', 'github-square']}/>
                                <p className="text-center">Git</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(7)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon="bug"/>
                                <p className="text-center">Debugging</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(8)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon={['fab', 'css3-alt']}/>
                                <p className="text-center">CSS3</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(9)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon={['fab', 'html5']}/>
                                <p className="text-center">HTML5</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(10)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon={['fab', 'bootstrap']}/>
                                <p className="text-center">Bootstrap</p>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={this.popover(11)}>
                            <div className="m-1 skillIcon" style={{width: "30%"}}>
                                <FontAwesomeIcon className="skill" size="4x" icon="laptop-code"/>
                                <p className="text-center">Learning</p>
                            </div>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;