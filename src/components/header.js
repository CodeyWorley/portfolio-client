import React from 'react';
import linkedin from '../media/linkedin.png';
import emailIcon from '../media/email.png';
import googleIcon from '../media/google.png';

export const Header = () => {
    return (
        <header className='header section-spacing'>
            <h1 className='header-title'>Codey Worley</h1>
            <div className='header-container'>
                <div className='header-sub-title'>Full Stack Developer & Software Engineer</div>
                <div className='header-links top-spacing'>
                    <a href='https://drive.google.com/file/d/1_0xnx1e7lMDi8r4NVw72w8EkS-0xUXXv/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                        <div className='header-link'>
                            <img className='header-icon' src={googleIcon} alt='Google Drive' />
                            Resume
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/codey-worley/' target='_blank' rel='noopener noreferrer'>
                        <div className='header-link'>
                            <img className='header-icon' src={linkedin} alt='LinkedIn' />
                            LinkedIn
                        </div>
                        
                    </a>
                    <a href='https://github.com/codeyworley' target='_blank' rel='noopener noreferrer'>
                        <div className='header-link'>
                            <img className='header-icon' src='https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697061-github-64.png' alt='Github' />
                            GitHub
                        </div>
                    </a>
                    <a href='mailto:codeyworley@gmail.com'>
                        <div className='header-link'>
                            <img className='header-icon' src={emailIcon} alt='codeyworley@gmail.com' />
                            Email
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
}
export default Header;