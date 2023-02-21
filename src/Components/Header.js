import React, { useState, useEffect, useRef } from 'react';

import sentences from "./data/sentences_website"
import menuItems from "./data/menuItems"

import logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";

const LogoHeader = (props) => {
  return(
    <div id='logo-div'>
      <a className='nav-item' href="#front-section" accessKey="c">
        <img id="logo-nav" src={logo} alt='logo cat' />
      </a>
    </div>
  );
}

const Navbar = (props) => {
  return(
    <nav>
      <div className='nav-items'>
        {menuItems.map((menu, index) => {
          return (
            <a className="nav-item" key={index} href={menu.url}>{menu.title[props.lang]}</a>
          );
        })}
      </div>
      <LangMenu lang={props.lang} handleClick={props.handleClick} />
    </nav>
  );
}

const LangMenu = (props) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);
  
  return(
    <div className='div-dropdown'>
      <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)} className="dropbtn">
        <span id='icon-lang' className='icon eng-icon'></span> 
        <FontAwesomeIcon icon={faCaretSquareDown} />
      </button>
      <ul className={`dropdown-content ${dropdown ? "dropdown-show" : ""}`} ref={ref}>
        <li>
          <a onClick={()=>props.handleClick('ENG')}><span className='icon eng-icon' /> ENG</a>
        </li>
        <li>
          <a onClick={()=>props.handleClick('DAN')}><span className='icon dan-icon' /> DAN</a>
        </li>
        <li>
          <a onClick={()=>props.handleClick('CAT')}><span className='icon cat-icon' /> CAT</a>
        </li>
      </ul>
    </div>
  )
}

const Header = (props) => {
  return (
    <header>
        <LogoHeader />
        <Navbar lang={props.lang} handleClick={props.handleClick} />
    </header>
  );
};
// Editor.defaultProps = { text:'blue' };
// ButtonsDrum.propTypes = { text: PropTypes.string.isRequired };

export default Header;