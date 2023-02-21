import sentences from "./data/sentences_website"
import logo from '../assets/logo.png';

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
            <h2 className='text-front'>
              {sentences['title1'][props.lang]}<br/>
              <span className='text-cat'>{sentences['title2'][props.lang]}</span><br/>
              {sentences['title3'][props.lang]}</h2>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    </div>
    );
};

export default Front;