import logo from '../assets/logo.png';

const Front = (props) => {
  return (
    <div id="front-section" className='section front-section'>
      <div className="bg-overlay"></div>
      <div className="front-body">
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-1'></div>
            <div className='col-6'>
              <h2 className='text-front'>
                <a style={{fontFamily:'Comfortaa'}}>LEARN CATALAN</a>
                <br/>
                <a style={{fontFamily:'Caveat'}}>in Copenhagen</a>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center" style={{marginTop: '100px'}}>
            <div className="col-5">
              <div className="bubble">
                <div className="btn2contact">
                  <a>Classes start on the 17-04-23</a>
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