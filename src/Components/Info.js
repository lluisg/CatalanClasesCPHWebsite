
import sentences from "./data/sentences_website"
let image_link = "https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"

const Info = (props) => {
  return (
    <div id="info-section" className='section info-section'>
      <h2 className='title-section'>{sentences['title_info'][props.lang]}</h2>
      <div className='info-body'>
        <ClasesInfo />
        <PriceInfo />
        <UbicationInfo />
      </div>
    </div>
    );
};

const ClasesInfo = (props) => {
  return (
    <div className="container-levels">
      {/* container for the imgs and title */}
      <div className="container-levels-img">
        <div id='basic-level' className="level-info">
          <img className="level-img" src={image_link} />
          <p className="level-name">Basic Level</p>
        </div>
        <div id='medium-level' className="level-info">
          <img className="level-img" src={image_link} />
          <p className="level-name">Medium Level</p>
        </div>
        <div id='advanced-level' className="level-info">
          <img className="level-img" src={image_link} />
          <p className="level-name">Advance Level</p>
        </div>
      </div>

      {/* container for the info */}
      <div className="container-levels-info">
        <div id='basic-level' className="level-info">
          <p className="level-text">You don't have pajolera idea to talk catalan, you only know that Catalonia is inside Spain</p>
        </div>
        <div id='medium-level' className="level-info">
          <p className="level-text">You know things and some words, but you need grammar and more vocabulary. You know someone who talks it and tried to teach you while drunk.</p>
        </div>
        <div id='advanced-level' className="level-info">
          <p className="level-text">You know how to talk catalan, but you need someone who talk with and ccorrects you. And teaches you some advanced stuff.</p>
        </div>
      </div>

      {/* container for the schedule */}
      <div className="container-levels-time">
        <div id='basic-level-time' className="level-schedule">
          <p className="level-time">Tuesdays:<br/>18:00-19:30h</p>
        </div>
        <div id='medium-level-time' className="level-schedule">
          <p className="level-time">Wednesdays:<br/>18:00-19:30h</p>
        </div>
        <div id='advanced-level-time' className="level-schedule">
          <p className="level-time not-available">Not available for now.</p>
          <div className="btn2contact">
            <a>Write Us if Interested</a>
            <a href='#contact-section'><span className="link2contact"></span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

const PriceInfo = (props) => {
  return (
    <div className='container-info'>
      <div className='info-block' id='timetable'>
        {/* <p>{sentences['title_schedule'][props.lang]}</p> */}
        <p>{sentences['schedule_basic_name'][props.lang]}<br/>{sentences['schedule_basic_time'][props.lang]}</p>
        <div className='separator-info-block'></div>
        <p>{sentences['schedule_medium_name'][props.lang]}<br/>{sentences['schedule_medium_time'][props.lang]}</p>
      </div>
      <div className='info-block' id='price'>
        <p>{sentences['title_prices'][props.lang]}</p>
        <div className='separator-info-block'></div>
        <p>{sentences['prices_price'][props.lang]}</p>
        <p>{sentences['prices_time'][props.lang]}</p>
      </div>
    </div>
  )
}

const UbicationInfo = (props) => {
  return (
    <div className='container-ubi'>
      <iframe 
                id='maps' 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17995.08952813934!2d12.53995520629883!3d55.68227324666988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1196a883e215a10d!2sSkolen%20ved%20B%C3%BClowsvej!5e0!3m2!1ses!2sdk!4v1676932548076!5m2!1ses!2sdk"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" />
      <div className="info-ubi">
        <p className="info-ubi-name">Skolen Ved Bülosvej</p>
        <p className="info-ubi-ubi">Fuglevangsvej 8,<br/> 1962 Frederiksberg</p>
        <a className="info-ubi-map" href="https://goo.gl/maps/gSztHVPQKhpiXmZcA" target="_blank" >Open in Maps</a>
      </div>
    </div>
  )
}


export default Info;