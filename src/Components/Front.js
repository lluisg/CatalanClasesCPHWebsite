import sentences from "./data/sentences_website"
import logo from '../assets/logo.png';

const Front = (props) => {
  return (
    <div id="front-section" className='section front-section'>
      <div className="bg-overlay"></div>
      <div className="front-body">
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-1'></div>
            <div className='col-6 div-text-front'>
              <h2 className='text-front'>
                <a style={{fontFamily:'Comfortaa'}}>LEARN CATALAN</a>
                 <br/>
                <a style={{fontFamily:'Caveat'}}>in Copenhagen</a>
                {/* <img id="logo-front" src={logo} /> */}
              </h2>
              {/* <h2 className='text-front'>
                {sentences['title1'][props.lang]} <img id="logo-front" src={logo} />  <br/>
                <span className='text-cat'>{sentences['title2'][props.lang]}</span>   <br/>
                {sentences['title3'][props.lang]} {sentences['title4'][props.lang]}
              </h2> */}
            </div>
          </div>
          <div className="row" style={{marginTop: '100px'}}>
            <div className="col-4"></div>
            <div className="col-5">
              <div className="bubble">
                <div className="btn2contact">
                  <a>Classes start on the 13-1-12</a>
                  <a>Limited number of students</a>
                  <a>Contact Us!</a>
                  <a href='#contact-section'><span className="link2contact"></span></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default Front;