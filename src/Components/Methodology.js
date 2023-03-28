import sentences from "./data/sentences_website"
import menuItems from "./data/menuItems"
import method_img from "../assets/method.jpg" 

const Methodology = (props) => {
  return (
    <div id="method-section" className='section method-section card-section'>
      <h1 className="title-section">Methodology</h1>
      <div className='method-body'>
        <img id='image-aboutme' src={method_img} />
        <p className='method-text'>{sentences['text_method'][props.lang]}</p>
      </div>
    </div>
    );
};

export default Methodology;