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
                {sentences['title1'][props.lang]} <img id="logo-front" src={logo} />  <br/>
                <span className='text-cat'>{sentences['title2'][props.lang]}</span>   <br/>
                {sentences['title3'][props.lang]} {sentences['title4'][props.lang]}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Front;