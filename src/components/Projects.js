import React, { Component } from 'react'
import Toggle from './Toggle'

import potions from '../assets/game.png';
import tanuki from '../assets/landing.png';
import colors from '../assets/colors.png'

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
                        <a href="http://tanukisensei.herokuapp.com" target="blank">
                            <img className="mb-2 project" 
                                style={{width: "70%", height:"auto"}} 
                                src={tanuki} alt="home page of tanuki sensei">
                            </img>
                        </a>
                        <a href="http://remedialpotions.herokuapp.com" target="blank">
                            <img className="my-2 project" 
                                style={{width: "70%", height:"auto"}} 
                                src={potions} alt="game page of remedial potions">
                            </img>
                        </a>
                        <a href="http://laurens-colors.surge.sh/" target="blank">
                            <img className="my-2 project" 
                                style={{width: "70%", height:"auto"}} 
                                src={colors} alt="home page of color generator">
                            </img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;