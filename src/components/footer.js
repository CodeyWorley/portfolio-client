import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <a className='footer-link' href='https://github.com/codeyworley/portfolio-client' target='_blank' rel='noopener noreferrer'>&copy;2019CodeyWorley</a> |
                <a className='footer-link' href="#about">About</a> | 
                <a className='footer-link' href="#projects">Projects</a> | 
                <a className='footer-link' href="#skills">Skills</a> |
                <a className='footer-link' href='https://drive.google.com/file/d/1-4dEVj5MVENnUV1zh_Zio0xYVX1qncm1/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a> | 
                <a className='footer-link' href='https://github.com/codeyworley' target='_blank' rel='noopener noreferrer'>Github</a> | 
                <a className='footer-link' href='https://www.linkedin.com/in/codey-worley/' target='_blank' rel='noopener noreferrer'>LinkedIn</a> | 
                <a className='footer-link' href={`mailto:codeyworley@gmail.com`}>codeyworley@gmail.com</a>
            </div>
        </footer>
    );
}
export default Footer;