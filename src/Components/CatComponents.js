import React, { useState, useEffect, useRef } from 'react';

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

    this.ChangeLangActive = this.ChangeLangActive.bind(this);
  }

  ChangeLangActive(lang){
    // for now only in english
    console.log('only eng')
    // console.log('change lang to:', lang)
    // this.setState({
    //   curr_lang: lang
    // });

    // let underline_eng = document.getElementById('underline-lang-eng')
    // let underline_dan = document.getElementById('underline-lang-dan')

    // if(lang=='ENG'){
    //   underline_eng.classList.add('active-lang')
    //   underline_dan.classList.remove('active-lang')
    // }else if(lang == 'DAN'){
    //   underline_eng.classList.remove('active-lang')
    //   underline_dan.classList.add('active-lang')
    // }
  }

  componentDidMount(){
    this.ChangeLangActive('ENG')
  }


  render() {
    return (
      <div className="body">
        <Header handleClick={this.ChangeLangActive} lang={this.state.curr_lang} />
        <main>
          <Front lang={this.state.curr_lang} />
          {/* <div className='transition-section transition2'></div> */}
          <div className='container-section'>
            <AboutMe lang={this.state.curr_lang} />
          </div>
          {/* <div className='transition-section transition1'></div> */}
          <div className='container-section'>
            <Methodology lang={this.state.curr_lang} />
          </div>
          {/* <div className='transition-section transition3'></div> */}
          <div className='container-section'>
            <Info lang={this.state.curr_lang} />
          </div>
          {/* <div className='transition-section transition4'></div> */}
          <div className='container-section'>
            <Contact lang={this.state.curr_lang} />
          </div>
        </main>
      </div>
    );
  }
};

export default CatalanWeb;