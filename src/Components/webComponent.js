import React, { createElement } from 'react';
import PropTypes from "prop-types";

import sentences from "./sentences_website"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";

// ---------------------------------- EDITOR COMPONENTS ---------------------------------------

const Header = (props) => {
  return (
    <header>
      <div id='logo-div'>
        <div>
          <img id="logo" src="imgs/catlogo.png" alt='logo cat' />
        </div>
        <h1>Title</h1>
      </div>
      <nav>
        <div className='nav-div'>
          <a className='nav-item' href="#front" accesskey="i">Front</a>
        </div>
        <div className='nav-div'>
          <a className='nav-item' href="#aboutclases" accesskey="i">Clases</a>
        </div>
        <div className='nav-div'>
          <a className='nav-item' href="#aboutme" accesskey="i">Me</a>
        </div>
        <div className='nav-div'>
          <a className='nav-item' href="#info" accesskey="i">Info</a>
        </div>
        <div className='nav-div'>
          <a className='nav-item' href="#contact" accesskey="i">Contact</a>
        </div>
        <div class="nav-div dropdown">
          <button class="dropbtn">
            <span className='icon spain-icon'></span>
            <FontAwesomeIcon icon={faCaretSquareDown} />
          </button>
          {/* <div class="dropdown-content">
            <a onClick={props.handleClick('cat')}>Cat</a>
            <a onClick={props.handleClick('eng')}>Eng</a>
            <a onClick={props.handleClick('dan')}>Dan</a>
          </div> */}
        </div>
      </nav>
    </header>
  );
};
// Editor.defaultProps = { text:'blue' };
// ButtonsDrum.propTypes = { text: PropTypes.string.isRequired };

const Front = (props) => {
  return (
    <div className='section'>
      <h2>Title Section: Front</h2>
    </div>
    );
};

const AboutCat = (props) => {
  return (
    <div className='section'>
      <h2>Title Section: About Cat</h2>
    </div>
    );
};

const AboutMe = (props) => {
  return (
    <div className='section'>
      <h2>Title Section: About Me</h2>
    </div>
    );
};

const Info = (props) => {
  return (
    <div className='section'>
      <h2>Title Section: Info</h2>
    </div>
    );
};

const Contact = (props) => {
  return (
    <div className='section'>
      <h2>Title Section: Contact</h2>
    </div>
    );
};


// ---------------------------------- CENTRAL COMPONENT ---------------------------------------

class CatalanWeb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hi: 0
    }

    this.handleClickLanguages = this.handleClickLanguages.bind(this);
  }

  // handleClick(song, key) {
  //   const btn_pressed = document.getElementById(song)
  //   btn_pressed.classList.add('btn-active')
  //   setTimeout(() => {
  //     btn_pressed.classList.remove('btn-active')
  //   }, 200);  

  //   if (this.props.power){
  //     const audio = document.getElementById(key)
  //     audio.volume = this.props.volume/100;
  //     audio.play()
 
  //     this.props.submitChangeText(song)
  //   }
  // };

  handleClickLanguages(lang){
    console.log('laang', lang)
  }


  render() {
    return (
      <div className="body">
        <Header handleClick={this.handleClickLanguages} />
        <main>
          <Front />
          <div className='line-separator'></div>
          <AboutCat />
          <div className='line-separator'></div>
          <AboutMe />
          <div className='line-separator'></div>
          <Info />
          <div className='line-separator'></div>
          <Contact />
        </main>
      </div>
    );
  }
};

export default CatalanWeb;