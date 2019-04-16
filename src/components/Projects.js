import React, { Component } from 'react'
import Toggle from './Toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import potions from '../assets/game-small.png';
import tanuki from '../assets/landing-small.png';
import colors from '../assets/colors-small.png'

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
                    <div className="rounded m-auto d-flex flex-column justify-content-around align-items-center">
                        <div className="mb-4">
                            <h6 className="m-0">Tanuki Sensei</h6>
                            <p className="m-0">A game based approach to learning Japanese.</p>
                            <div className="d-flex justify-content-around">
                                <a className="projectAnchor" href="http://tanukisensei.herokuapp.com" target="blank">
                                    <img style={{width: "150px", height:"auto"}} className="mb-2 project" 
                                        src={tanuki} alt="home page of tanuki sensei">
                                    </img>
                                </a>
                                <a className="projectAnchor align-self-center" href="https://github.com/LaurenReilly/TanukiSensei" target="blank">
                                    <FontAwesomeIcon size="3x" icon={['fab', 'github-square']}/>
                                </a>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h6 className="m-0">Remedial Potions</h6>
                            <p className="m-0">Can you make it through a magical potions class?</p>
                            <div className="d-flex justify-content-around">
                                <a className="projectAnchor" href="http://remedialpotions.herokuapp.com" target="blank">
                                    <img style={{width: "150px", height:"auto"}} className="my-2 project" 
                                        src={potions} alt="game page of remedial potions">
                                    </img>
                                </a>
                                <a className="projectAnchor align-self-center" href="https://github.com/LaurenReilly/PotionsMaster" target="blank">
                                    <FontAwesomeIcon size="3x" icon={['fab', 'github-square']}/>
                                </a>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h6 className="m-0">Lauren's Colors</h6>
                            <p className="m-0">Create customizable color palettes to aid in design.</p>
                            <div className="d-flex justify-content-around">
                                <a className="projectAnchor" href="http://laurens-colors.surge.sh/" target="blank">
                                    <img style={{width: "150px", height:"auto"}} className="my-2 project" 
                                        src={colors} alt="home page of color generator">
                                    </img>
                                </a>
                                <a className="projectAnchor align-self-center" href="https://github.com/LaurenReilly/color-palette-generator" target="blank">
                                    <FontAwesomeIcon size="3x" icon={['fab', 'github-square']}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;