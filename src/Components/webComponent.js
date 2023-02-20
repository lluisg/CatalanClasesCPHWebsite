import React, { createElement } from 'react';
import PropTypes from "prop-types";

import sentences from "./sentences_website"

// ---------------------------------- EDITOR COMPONENTS ---------------------------------------

const Navbar = (props) => {
  return (
    <button id={props.sound} onClick={()=>props.handleClick(props.sound, props.letter)} className="drum-pad">
      <b>{props.letter}</b>
      <audio id={props.letter} src={props.src} className="clip"></audio>
    </button>
  );
};
// Editor.defaultProps = { text:'blue' };
// ButtonsDrum.propTypes = { text: PropTypes.string.isRequired };

const Options = (props) => {
  return (
    <div className="options-container p-0 m-0">
      <ButtonOption name="Power" onClick={props.changePower} />
      <p id="display" className='my-3'>{props.value}</p>
      <Slider volume={props.volume} onChange={props.changeVolume} />
      <ButtonOption name="Bank" onClick={props.changeBank} />
    </div>
    );
};

function Slider(props) {
  return(
    <input id="slider" type="range" min="0" max="100" step="1" value={props.volume} onChange={props.onChange} />
  );
}

function ButtonOption(props) {
  return(
    <div id={props.name} className='btn-onoff mt-3 mb-1'>
      <p className='p-0 m-0'><b>{props.name}</b></p>
      <div className="container-onoff p-1">
        <div id={props.name=='Power'?'power-btn-off':'bank-btn-off'} className="btn-off hide-btn" onClick={props.onClick}></div>
        <div id={props.name=='Power'?'power-btn-on':'bank-btn-on'} className="btn-on" onClick={props.onClick}></div>
      </div>
    </div>
  );
}


// ---------------------------------- CENTRAL COMPONENT ---------------------------------------

class CatalanWeb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hi: 0
    }

    // this.changeVolume = this.changeVolume.bind(this);
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


  render() {
    return (
      <div className="base-container">
        <Navbar />
        <Front />
        <AboutCat />
        <AboutMe />
        <Contact />
        <Info />
      </div>
    );
  }
};

export default CatalanWeb;