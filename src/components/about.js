import React, {useState, useEffect} from 'react';
import {getAbout} from '../utils/fetch-data';

// quick fix to space out about paragraph in a janky way **fix before next push
const About = () => {
    const [about1, setAbout] = useState('Loading...');
    const [about2, setAbout2] = useState('');

    const handleData = () => {
        getAbout()
            .then( res => {
                setAbout(res.data.about1)
                setAbout2(res.data.about2)
            });
    }

    useEffect( () => {
        handleData();
    }, [])

    return (
        <section id='about' className='about section-spacing'>
            <h2 className='section-title'>About</h2>
            <div className='section-container about-container'>
                {about1}
                <br/>
                <br/>
                {about2}
            </div>
        </section>
    );
}
export default About;