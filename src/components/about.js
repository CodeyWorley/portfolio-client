import React from 'react';
import {about} from '../utils/data';

const About = () => {
    return (
        <section id='about' className='about section-spacing'>
            <h2 className='section-title'>About</h2>
            <div className='section-container about-container'>
                {about.intro}
                <br/>
                <br/>
                {about.closing}
            </div>
        </section>
    );
}
export default About;