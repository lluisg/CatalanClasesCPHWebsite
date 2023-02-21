import sentences from "./data/sentences_website"

let image_link = "https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"

const Methodology = (props) => {
  return (
    <div id='methodology-section' className='section'>
      <img id='image-method' src={image_link} />
      <p className='text-method'>{sentences['text_method'][props.lang]}</p>
    </div>
    );
};

export default Methodology;