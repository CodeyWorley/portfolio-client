import React, {useState, useEffect} from 'react';
import {getProjects} from '../utils/fetch-data';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const handleData = () => {
        getProjects()
            .then( res => {
                setProjects(res.data)
            });
    }

    useEffect( () => {
        handleData();
    }, [])

    return (
        <section id='projects' className='projects section-spacing'>
            <h2 className='section-title'>Projects</h2>
            <div className='section-container projects-container'>
                {projects.map( project => {
                    return (
                        <div className='project'>
                            <img className='project-img' src={project.image} alt={project.name}/>
                            <div className='project-info'>
                                <div className='project-header'>
                                    <h2 className='project-title'>
                                        <a href={project.website}>{project.name}</a>
                                    </h2>
                                    <div className='project-repos'>
                                        <a href={project.repos.client}>Client</a>/
                                        <a href={project.repos.server}>Server</a>
                                    </div>
                                </div>
                                <div className='project-stack'>
                                    {project.stack.map( tech => {
                                        return (
                                            <div className='tech'>
                                                <img className='icon' src={tech.icon} alt={tech.name} />
                                                <div>{tech.name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='project-description'>{project.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
export default Projects;