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
    }
  }

  render() {
    return (
      <div className="body">
        <Header />
        <main>
          <Front />
          <div className='container-section'>
            <AboutMe />
          </div>
          <div className='container-section'>
            <Methodology />
          </div>
          <div className='container-section'>
            <Info />
          </div>
          <div className='container-section'>
            <Contact />
          </div>
        </main>
      </div>
    );
  }
};

export default CatalanWeb;