import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const Info = (props) => {
  return (
    <div id="info-section" className='section info-section card-section'>
      <h2 className='title-section'>Information</h2>
      <div className='info-body'>
        {/* <ClasesInfo /> */}
        <SubQuestion text='When?' icon={faClock} />
        <TimeInfo />
        <SubQuestion text='Where?' icon={faLocationDot} />
        <UbicationInfo />
        <SubQuestion text='How much?' icon={faMoneyBill} />
        <PriceInfo />
      </div>
    </div>
    );
};

const SubQuestion = (props) => {
  return (
    <div className='container-question'>
      <div className='div-question'>
        <p className="question-info">
          <FontAwesomeIcon icon={props.icon} />
          {props.text}
        </p>
      </div>
    </div>
  )
}


const TimeInfo = (props) => {
  return (
    <div className='container-info'>
      <div className='info-card' id='infotime'>
        <p className="info-date-dayweek">Mondays</p>
        <p className="info-date-hour">18:00 - 19:30h</p>
        <p className="info-date-days">17/04/2023 - 22/05/2023</p>
      </div>
    </div>
  )
}

const PriceInfo = (props) => {
  return (
    <div className='container-info'>
      <div className='info-card' id='infoprice'>
        <p className="info-price-money">800 DKK</p>
        <p className="info-price-sessions">6 sessions</p>
      </div>
    </div>
  )
}

const UbicationInfo = (props) => {
  return (
    <div className='container-info'>
      <div className='info-card' id='infoubi'>
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
    </div>
  )
}


export default Info;