import sentences from "./data/sentences_website"

let image_link = "https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"

const AboutMe = (props) => {
  return (
    <div id="about-section" className='section about-section'>
      <h1 className="title-section">About Me</h1>
      <div className='about-body'>
        <div className="about-text">
          <p className='title-maria'>Maria Garcia: Spanish Teacher for Adults</p>
          <p className='text-maria'>{sentences['text_about1'][props.lang]}</p>
          <p className='text-maria'>{sentences['text_about2'][props.lang]}</p>
          <p className='text-maria'>{sentences['text_about3'][props.lang]}</p>
        </div>
        <img id='image-aboutme' src={image_link} />
      </div>
    </div>
    );
};

export default AboutMe;