import sentences from "./data/sentences_website"

const Contact = (props) => {
  return (
    <div id="contact-section" className='section contact-section'>
      <h1 className="title-section">Contact</h1>
      <div className='method-body'>
        <div className="container mb-5">
          <p className="text-center h4">{sentences['use_form'][props.lang]}</p>
          <form id="contact-form" action="https://formsubmit.co/f1aa8b04c973b5f015f60fb3e5245d09" method="POST" className="p-4" encType="multipart/form-data">
              <input type="hidden" name="_captcha" value="false" />
              {/* <input type="hidden" name="_next" value="https://www.lluisguardia.host" /> */}
              <input type="hidden" name="_template" value="table" />

              <div className="container-form-top">
                <div className="container-name">
                  <input id="contact-name" type="text" name="name" className="form-control" placeholder={sentences['placeholder_name'][props.lang]} required />
                </div>
                <div className="container-email">
                  <input id="contact-email" type="email" name="email" className="form-control" placeholder={sentences['placeholder_email'][props.lang]} required />
                </div>
              </div>
              <div className="container-message">
                <textarea id="contact-message" placeholder={sentences['placeholder_text'][props.lang]} className="form-control" name="message" rows="7" required></textarea>
              </div>
              <div className="container-file">
                <input id="contact-file" type="file" name="attachment" accept=".doc, .docx, .txt, .odt, .pdf" />
              </div>
              <button type="submit" id="btn-contact-submit" className="btn btn-lg btn-dark btn-block mt-3">{sentences['placeholder_btn'][props.lang]}</button>
          </form>
        </div>
    </div>
    </div>
    );
};

export default Contact;