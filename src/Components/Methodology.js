import sentences from "./data/sentences_website"
import menuItems from "./data/menuItems"

let image_link = "https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"

const Methodology = (props) => {
  return (
    <div id="method-section" className='section method-section'>
      <h1 className="title-section">Methodology</h1>
      <div className='method-body'>
        <img id='image-method' src={image_link} />
        <p className='text-method'>{sentences['text_method'][props.lang]}</p>
      </div>

      <div className="div-center-btn2contact">
        <div className="btn2contact">
          <a>Would like more info?</a>
          <a>Write Us</a>
          <a href='#contact-section'><span className="link2contact"></span></a>
        </div>
      </div>
    </div>
    );
};

export default Methodology;