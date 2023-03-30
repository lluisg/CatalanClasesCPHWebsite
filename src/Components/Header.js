import menuItems from "./data/menuItems"
import logo from '../assets/logo.png';


const Header = (props) => {
  return (
    <header>
        <LogoHeader />
        <Navbar />
    </header>
  );
};

const LogoHeader = (props) => {
  return(
    <div className='logo-div'>
      <a className='nav-item' href="#front-section" accessKey="c">
        <img className="logo-img-nav" src={logo} alt='logo cat' />
      </a>
    </div>
  );
}

const Navbar = (props) => {
  return(
    <nav>
      {menuItems.map((menu, index) => {
        return (
          <a className="nav-item" key={index} href={menu.url}>{menu.title}</a>
        );
      })}
    </nav>
  );
}

// const LangSelector = (props) => {
//   return (
//     <div className='lang-selector'>
//       <div className='lang-div'>
//         <a id='eng-icon' onClick={()=>props.handleClick('ENG')} className='icon eng-icon'></a>
//         <div id='underline-lang-eng'></div>
//       </div>
//       <div className='separator-lang'></div>
//       <div className='lang-div'>
//         <a id='dan-icon' onClick={()=>props.handleClick('DAN')} className='icon dan-icon'></a>
//         <div id='underline-lang-dan'></div>
//       </div>
//     </div>
//   )
// }

export default Header;