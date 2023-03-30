import method_img from "../assets/method.jpg" 

const Methodology = (props) => {
  return (
    <div id="method-section" className='section method-section card-section'>
      <h1 className="title-section">Methodology</h1>
      <div className='method-body'>
        <img id='image-aboutme' src={method_img} />
        <p className='method-text'>The first step is to know your interests and objectives you have to learning Catalan. This is very important to provide you with a meaningful learning process. That's why I design a program focused on your needs. Cultural content is also included in my classes. So, we will be working on the language while we will know more about customs, festivities, and the different variations of Catalan.</p>
      </div>
    </div>
    );
};

export default Methodology;