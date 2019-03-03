import React, { useState, useEffect } from "react";
import Skills from './skills';
import About from './about';
import Projects from './projects';
import {getSkills, getProjects, getAbout} from '../utils/fetch-data';

export const Display = () => {
    const [currentView, setCurrentView] = useState(null);
    const [skills, setSkills] = useState(null);
    const [projects, setProjects] = useState(null);
    const [about, setAbout] = useState(null);

    const handleData = () => {
        getAbout()
            .then( res => {
                setAbout(res.data)
            });
        getSkills()
            .then( res => {
                setSkills(res.data)
            });
        getProjects()
            .then( res => {
                setProjects(res.data)
            });
    }

    useEffect(() => {
        handleData();
    }, [])

    return (
        <section className='display'>
            <div>
                <div className='header'>
                    <h1>Codey Worley</h1>
                    <p>Full-Stack JavaScript Developer & Software Engineer</p>
                    <hr/>
                </div>
                <div className='view-buttons'>
                    <button className='skills-button' onClick={() => setCurrentView(<Skills data={skills}/>)}>Skills</button>
                    <button className='about-button' onClick={() => setCurrentView(<About data={about}/>)}>About</button>
                    <button className='projects-button' onClick={() => setCurrentView(<Projects data={projects}/>)}>Projects</button>
                </div>
            </div>
            <div className='view-container'>
                {currentView}
            </div>
        </section>
    );
}
export default Display;