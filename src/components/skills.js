import React from 'react';
import {skills} from '../utils/data';

const Skills = () => {
    return (
        <section id='skills' className='skills section-spacing'>
            <h2 className='section-title'>Skills</h2>
            <div className='section-container'>
                {skills.map( skill => {
                    return (
                        <div className='skill'>
                            <img className='icon' src={skill.icon} alt={skill.name} />
                            <div>{skill.name}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
export default Skills;