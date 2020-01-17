import React from 'react';

import Data from './data.json';

const Apps = (props) => (
  <div className="apps">
    <div className="apps__inner">
      <div className="apps__left">
        <img src={Data.img} alt="" />
      </div>
      <div className="apps__right">
        <div className="apps__title">{Data.title1}<br /> {Data.title2}</div>
        <ul className="apps__list">
          <li>{Data.li1}</li>
          <li>{Data.li2}<br className="br" />{Data.li3}</li>
          <li>{Data.li4}<br className="br" />{Data.li5}</li>
        </ul>
        <div id="sms-block">
          <div className="sms-block">
            <div className="sms-block__label">{Data.smsBlockLabel}</div>
            <input placeholder="+7" className="sms-block__input" />
            <div className="sms-block__button disabled">
              {Data.smsBlockButton}
            </div>
            <div className="vue-popup">
              <div className="vue-popup__overlay"></div>
              <div className="vue-popup__modal">
                <div className="vue-popup__close"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="apps__buttons">
          <a href={Data.link1} target="_blank" className="apps__button apps__button_apple"></a>
          <a href={Data.link2} target="_blank" className="apps__button apps__button_android"></a>
        </div>
      </div>
    </div>
  </div>
);

Apps.defaultProps = {
}

export default Apps;
