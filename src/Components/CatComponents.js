import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";

import Header from "./Header"
import Front from "./Front"
import Methodology from "./Methodology"
import AboutMe from "./About"
import Info from "./Info"
import Contact from "./Contact"


class CatalanWeb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_lang: 'ENG'
    }

    this.handleClickLanguages = this.handleClickLanguages.bind(this);
  }

  handleClickLanguages(lang){
    console.log('change lang to:', lang)
    this.setState({
      curr_lang: lang
    });

    let icon = document.getElementById('icon-lang')
    let remove1, remove2, add1
    if(lang=='ENG'){
      remove1 = 'cat-icon'
      remove2 = 'dan-icon'
      add1 = 'eng-icon'
    }else if(lang == 'CAT'){
      remove1 = 'eng-icon'
      remove2 = 'dan-icon'
      add1 = 'cat-icon'
    }else if(lang == 'DAN'){
      remove1 = 'eng-icon'
      remove2 = 'cat-icon'
      add1 = 'dan-icon'
    }

    icon.classList.remove(remove1, remove2)
    icon.classList.add(add1)
  }


  render() {
    return (
      <div className="body">
        <Header handleClick={this.handleClickLanguages} lang={this.state.curr_lang} />
        <main>
          <Front lang={this.state.curr_lang} />
          <div className='transition-section transition1'></div>
          <Methodology lang={this.state.curr_lang} />
          <div className='transition-section transition2'></div>
          <AboutMe lang={this.state.curr_lang} />
          <div className='transition-section transition3'></div>
          <Info lang={this.state.curr_lang} />
          <div className='transition-section transition4'></div>
          <Contact lang={this.state.curr_lang} />
        </main>
      </div>
    );
  }
};

export default CatalanWeb;