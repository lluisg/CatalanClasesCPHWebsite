import sentences from "./data/sentences_website"

let image_link = "https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"

const AboutMe = (props) => {
  return (
    <div id='aboutme-section' className='section'>
      <p className='text-aboutme'>{sentences['text_about'][props.lang]}</p>
      <img id='image-aboutme' src={image_link} />
    </div>
    );
};

export default AboutMe;