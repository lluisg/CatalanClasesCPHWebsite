import React, { createElement } from 'react';
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";

import logo from './imgs/logo.png';
// const logo = require('./logo.jpeg');
import sentences from "./extra/sentences_website"

// ---------------------------------- EDITOR COMPONENTS ---------------------------------------

let image_link = "https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
let lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit molestie nulla, in sagittis nisi viverra non. Proin dui sapien, laoreet elementum justo nec, porttitor malesuada sem. Aenean vitae nisi mi. Quisque vel neque sit amet velit fringilla tempus. Sed maximus mi efficitur neque convallis hendrerit. Etiam quis scelerisque dolor, sit amet egestas lorem. Nam ex metus, bibendum vitae auctor vel, feugiat non justo. Nullam suscipit mauris ut lectus malesuada, et feugiat justo hendrerit. Sed placerat erat sit amet sapien consequat scelerisque. In gravida placerat arcu, ut suscipit magna elementum sed.'

const Header = (props) => {
  return (
    <header>
      <div id='logo-div'>
        <div>
          <img id="logo-nav" src={logo} alt='logo cat' />
        </div>
        <h1>Learn Cat in CPH</h1>
      </div>
      <nav>
        <div className='nav-div'>
          <a className='nav-item' href="#front-section" accesskey="i">Front</a>
        </div>
        <div className='nav-div'>
          <a className='nav-item' href="#aboutclases-section" accesskey="i">Clases</a>
        </div>
        <div className='nav-div'>
          <a className='nav-item' href="#aboutme-section" accesskey="i">Me</a>
        </div>
        <div className='nav-div'>
          <a className='nav-item' href="#info-section" accesskey="i">Info</a>
        </div>
        <div className='nav-div'>
          <a className='nav-item' href="#contact-section" accesskey="i">Contact</a>
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
    <div id='front-section' className='section'>
      <div className='container-fluid container-front'>
        <div className='row align-items-center'>
          <div className='col-2'></div>
          <div className='col-2 div-logo-front'>
            <img id="logo-front" src={logo} />
          </div>
          <div className='col-1'></div>
          <div className='col-5 div-text-front'>
            <h2 className='text-front'>Learn<br/><span className='text-cat'>Catalan</span><br/>in<br/>Copenhaguen</h2>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    </div>
    );
};

const Methodology = (props) => {
  return (
    <div id='methodology-section' className='section'>
      <img id='image-method' src={image_link} />
      <p className='text-method'>{lorem_ipsum}</p>
    </div>
    );
};

const AboutMe = (props) => {
  return (
    <div id='aboutme-section' className='section'>
      <p className='text-aboutme'>{lorem_ipsum}</p>
      <img id='image-aboutme' src={image_link} />
    </div>
    );
};

const Info = (props) => {
  return (
    <div id='info-section' className='section'>
      <h2 className='title-info'>Classes Information:</h2>
      <div className='container-info'>
      <div className='info-block' id='ubication'>
          <p>Ubication</p>
          <div className='separator-info-block'></div>
          <p>Cole de Estudiantes<br/>Calle Yoquese 24</p>
          <iframe 
              id='maps' 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17995.08952813934!2d12.53995520629883!3d55.68227324666988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1196a883e215a10d!2sSkolen%20ved%20B%C3%BClowsvej!5e0!3m2!1ses!2sdk!4v1676932548076!5m2!1ses!2sdk"
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className='info-block' id='timetable'>
          <p>Schedule</p>
          <div className='separator-info-block'></div>
          <p>Basic level:<br/>Tuesdays at 18:00h until 19:00h</p>
          <p>Medium Level:<br/>Wednesdays at 18:00h until 19:00h</p>
        </div>
        <div className='info-block' id='price'>
          <p>Prices</p>
          <div className='separator-info-block'></div>
          <p>8 sessions x 1000dkk</p>
        </div>
      </div>
    </div>
    );
};

const Contact = (props) => {
  return (
    <div id='contact-section' className='section'>
      <div class="container mb-5">
        <p class="text-center h4">Please use the following form if you want to get in touch with me directly.</p>
        <form id="contact-form" action="https://formsubmit.co/f1aa8b04c973b5f015f60fb3e5245d09" method="POST" class="p-4" enctype="multipart/form-data">
            <input type="hidden" name="_captcha" value="false" />
            {/* <input type="hidden" name="_next" value="https://www.lluisguardia.host" /> */}
            <input type="hidden" name="_template" value="table" />

            <div class="container-form-top">
              <div class="container-name">
                <input id="contact-name" type="text" name="name" class="form-control" placeholder="Your Name" required />
              </div>
              <div class="container-email">
                <input id="contact-email" type="email" name="email" class="form-control" placeholder="Email Address" required />
              </div>
            </div>
            <div class="container-message">
              <textarea id="contact-message" placeholder="Your Message" class="form-control" name="message" rows="7" required></textarea>
            </div>
            <div class="container-file">
              <input id="contact-file" type="file" name="attachment" accept=".doc, .docx, .txt, .odt, .pdf" />
            </div>
            <button type="submit" id="btn-contact-submit" class="btn btn-lg btn-dark btn-block mt-3">Send Message</button>
        </form>
      </div>
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
          <div className='transition-section transition1'></div>
          <Methodology />
          <div className='transition-section transition2'></div>
          <AboutMe />
          <div className='transition-section transition3'></div>
          <Info />
          <div className='transition-section transition4'></div>
          <Contact />
        </main>
      </div>
    );
  }
};

export default CatalanWeb;