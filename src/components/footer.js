import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <p className='footer-item'>&copy;CodeyWorley</p> | 
                <a className='footer-link' href="#about">About</a> | 
                <a className='footer-link' href="#projects">Projects</a> | 
                <a className='footer-link' href="#skills">Skills</a> | 
                <a className='footer-link' href='https://github.com/codeyworley'>Github</a> | 
                <a className='footer-link' href='https://www.linkedin.com/in/codey-worley/'>LinkedIn</a> | 
                <p className='footer-item'>codeyworley@gmail.com</p>
            </div>
        </footer>
    );
}
export default Footer;