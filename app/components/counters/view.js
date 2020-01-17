import React from 'react';

import Data from './data.json';

const Counters = (props) => (
  <div className="main__section main__section_counters">
    <div className="counters">
      <div className="counters__inner">
        <div className="main__title">Мы говорим спасибо всем, кто с нами!</div>
        <div className="counters__items">
          <div className="counters__main">
            <div className="counters__allready">Уже</div>
            <div className="counters__value counters__value_red">2 416 827</div>
              пациентов записались<br />
              к врачу через docdoc
            </div>
            <div className="counters__cols">
              <div className="counters__col">
                <div className="counters__cell">
                  <div className="counters__value">287 527</div>
                  отзывов о врачах<br />от их пациентов                                 
                </div>
              </div>
              <div className="counters__col">
                <div className="counters__cell">
                <div className="counters__value">181 308</div>
                  врачей работают по<br />
                  записи с docdoc
              </div>
            </div>
            <div className="counters__col">
              <div className="counters__cell">
                <div className="counters__value">3 812</div>
                  клиник принимают<br />
                  пациентов с docdoc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Counters.defaultProps = {
}

export default Counters;
