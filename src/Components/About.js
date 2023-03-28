import sentences from "./data/sentences_website"
import aboutme_img from "../assets/aboutme.jpeg" 

const AboutMe = (props) => {
  return (
    <div id="about-section" className='section about-section card-section'>
      <h1 className="title-section">About Me</h1>
      <div className='about-body'>
        <div className="about-text">
          <p className='title-maria'>Maria Garcia: Catalan Teacher for Adults</p>
          <p className='text-maria'>{sentences['text_about1'][props.lang]}</p>
          <p className='text-maria'>{sentences['text_about2'][props.lang]}</p>
          <p className='text-maria'>{sentences['text_about3'][props.lang]}</p>
        </div>
        <img id='image-aboutme' src={aboutme_img} />
      </div>
    </div>
    );
};

export default AboutMe;