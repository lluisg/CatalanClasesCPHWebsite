import aboutme_img from "../assets/aboutme.jpeg" 

const AboutMe = (props) => {
  return (
    <div id="about-section" className='section about-section card-section'>
      <h1 className="title-section">Catalan Teacher for Adults</h1>
      <div className='about-body-top'>
        <div className="about-text">
          <p className='text-maria'>My name is Maria Garcia. I was born in the beautiful city of Barcelona but I am currently living in Copenhagen, a city that I fell in love when I was 21. I am a book lover, I am very curious and I love to discover new places and languages. I speak Spanish, Catalan, English, a little bit of French and my next objective is Danish.</p>
          <p className='text-maria'>5 years ago I was lucky to have the opportunity to study for 6 months in Roskilde (Denmark) while I was finishing my degree in Education. From this experience, I knew that I wanted to share my language and culture with people from all over the world and learn from them in the same way. That is why I decided to train myself in order to be a Spanish and Catalan teacher.</p>
        </div>
        <div className="about-img">
          <img id='image-aboutme' src={aboutme_img} />
        </div>
      </div>
      <div className='about-body-bottom'>
        <div className="about-text">
          <p className='text-maria'>During the last four years, I have worked as a teacher in primary schools, associations and different language academies for adults in Barcelona. Teaching my languages has allowed me to see the world with different eyes and learn every day from my students. Without a doubt I can say that being a teacher is the most beautiful challenge.</p>
        </div>
      </div>
    </div>
    );
};


export default AboutMe;