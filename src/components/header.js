import React from 'react';

export const Header = () => {
    return (
        <header className='header section-spacing'>
            <h1 className='header-title'>Codey Worley</h1>
            <div className='header-container'>
                <div className='header-sub-title'>Full-Stack JS Developer & Software Engineer</div>
                <div className='header-links top-spacing'>
                    <a href="https://www.linkedin.com/in/codey-worley/">
                        <div className='header-link'>
                            <img className='header-icon' src='https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697061-github-64.png' alt='LinkedIn' />
                            LinkedIn
                        </div>
                        
                    </a>
                    <a href="https://github.com/codeyworley">
                        <div className='header-link'>
                            <img className='header-icon' src='https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697061-github-64.png' alt='Github' />
                            Github
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
}
export default Header;