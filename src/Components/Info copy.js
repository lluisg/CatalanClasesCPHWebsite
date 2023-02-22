
import sentences from "./data/sentences_website"

const Info = (props) => {
  return (
    <div className='section info-section'>
      <h2 className='title-section'>{sentences['title_info'][props.lang]}</h2>
      <div className='info-body'>
        <div className='container-info'>
          <div className='info-block' id='ubication'>
              <p>{sentences['title_ubi'][props.lang]}</p>
              <div className='separator-info-block'></div>
                <p>{sentences['ubi_place']}<br/>{sentences['ubi_map']}</p>
                <iframe 
                    id='maps' 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17995.08952813934!2d12.53995520629883!3d55.68227324666988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1196a883e215a10d!2sSkolen%20ved%20B%C3%BClowsvej!5e0!3m2!1ses!2sdk!4v1676932548076!5m2!1ses!2sdk"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className='info-block' id='timetable'>
              <p>{sentences['title_schedule'][props.lang]}</p>
              <div className='separator-info-block'></div>
              <p>{sentences['schedule_basic_name'][props.lang]}<br/>{sentences['schedule_basic_time'][props.lang]}</p>
              <p>{sentences['schedule_medium_name'][props.lang]}<br/>{sentences['schedule_medium_time'][props.lang]}</p>
            </div>
            <div className='info-block' id='price'>
              <p>{sentences['title_prices'][props.lang]}</p>
              <div className='separator-info-block'></div>
              <p>{sentences['prices_price'][props.lang]}</p>
              <p>{sentences['prices_time'][props.lang]}</p>
            </div>
          </div>
      </div>
    </div>
    );
};

export default Info;