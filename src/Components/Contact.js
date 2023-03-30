const Contact = (props) => {
  return (
    <div id="contact-section" className='section contact-section card-section'>
      <h1 className="title-section">Contact</h1>
      <div className='contact-body'>
        <div className="container mb-5">
          <p className="text-center h4">Please use the following form if you want to get in touch directly.</p>
          <form id="contact-form" action="https://formsubmit.co/f1aa8b04c973b5f015f60fb3e5245d09" method="POST" className="p-4" encType="multipart/form-data">
              <input type="hidden" name="_captcha" value="false" />
              {/* <input type="hidden" name="_next" value="https://www.lluisguardia.host" /> */}
              <input type="hidden" name="_template" value="table" />

              <div className="container-form-top">
                <div className="container-name">
                  <input id="contact-name" type="text" name="name" className="form-control" placeholder='Your Name' required />
                </div>
                <div className="container-email">
                  <input id="contact-email" type="email" name="email" className="form-control" placeholder='Email Adress' required />
                </div>
              </div>
              <div className="container-message">
                <textarea id="contact-message" placeholder='Your Message' className="form-control" name="message" rows="7" required></textarea>
              </div>
              <div className="container-file">
                <input id="contact-file" type="file" name="attachment" accept=".doc, .docx, .txt, .odt, .pdf" />
              </div>
              <button type="submit" id="btn-contact-submit" className="btn btn-lg btn-dark btn-block mt-3">Send Message</button>
          </form>
        </div>
    </div>
    </div>
    );
};

export default Contact;