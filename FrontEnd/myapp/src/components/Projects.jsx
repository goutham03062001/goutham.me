import React from 'react'
import "../component_styles/Projects.css";
const Projects = () => {
    return (
        <>
           <div className="projects ">
                <div id="arduino_projects">
                    <ul className='list_of_projects'>
                        <li>A simple Robot</li>
                        <li>Control of water level in overhead water tankers</li>
                        <li>A simple Robot</li>
                        <li>
                            <button><a href="/github">Follow Me on Github</a></button>
                        </li>
                    </ul>
                </div>
            </div> 
        </>
    )
}

export default Projects
