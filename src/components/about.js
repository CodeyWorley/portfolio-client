import React, {useState, useEffect} from 'react';
import {getAbout} from '../utils/fetch-data';

const About = () => {
    const [about, setAbout] = useState('Loading...');

    const handleData = () => {
        getAbout()
            .then( res => {
                setAbout(res.data)
            });
    }

    useEffect( () => {
        handleData();
    }, [])

    return (
        <section id='about' className='about section-spacing'>
            <h2 className='section-title'>About</h2>
            <div className='section-container about-container'>
                {about}
            </div>
        </section>
    );
}
export default About;