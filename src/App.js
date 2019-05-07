import React from 'react';
import Nav from './components/nav';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

export class App extends React.Component {
  render() {
    return (
      <div className='portfolio'>
        <Header />
        <Nav />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    );
  }
}
export default App;