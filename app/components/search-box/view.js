import React from 'react';
import PropTypes from 'prop-types';


const SearchBox = (props) => (
  <div className="main__section main__section_intro main__section_new_screen">
    <div style={{margin: 'auto'}} className="container">
      <h2 className="search__title">Найдите проверенного врача <br /> и запишитесь на приём</h2>
      <div className="search">
		    <div className="forms">
			    <form id="searchForm" className="forms__form search_form" method="post" action="//docdoc.ru/site/searchRedirect">
            <input type="hidden" name="spec" className="js-choose-input-spec" id="spec" autocomplete="off" value="" />
            <input type="hidden" name="serviceId" className="js-choose-input-service" value="" autocomplete="off" />
            <input type="hidden" name="diag" className="js-choose-input-diag" id="diag" value="" autocomplete="off" />
            <input type="hidden" name="stations" className="js-choose-input-geo" id="stations" autocomplete="off" value="" />
            <input type="hidden" name="dist" className="js-choose-input-dist" autocomplete="off" value="" />
            <input type="hidden" name="regcity" className="js-choose-input-regcity" autocomplete="off" value="" />
            <input type="hidden" name="kidsReception" className="js-choose-input-kidsReception" autocomplete="off" value="" />
            <input type="hidden" name="departure" className="js-choose-input-departure" autocomplete="off" value="" />
            <input type="hidden" name="booking" className="js-choose-input-booking" autocomplete="off" value="" />
            <input type="hidden" name="all-day" className="js-choose-input-all-day" autocomplete="off" value="" />
            <input type="hidden" name="area" className="js-choose-input-area" autocomplete="off" value="" />
            <input type="hidden" name="district" className="js-choose-input-area" autocomplete="off" value="" />
            <input type="hidden" name="street" className="js-choose-input-area" autocomplete="off" value="" />
            <input type="hidden" name="isClinicList" autocomplete="off" value="0" />
            <input id="searchAutocompleteHost" type="hidden" autocomplete="off" value="" />
            <div className="search search_index">
              <div className="forms">             
                <div className="search__fields">
                  <div className="search__field search__field_zoom">
                    <input type="text" className="forms__input search__input js-suggest-search-new" name="specialist" data-suggestclassName="autocomplete-suggestion-withgroup" data-autocomplete-id="autocomplete-spec" placeholder="Врач, клиника, болезнь, услуга" value="" tabindex="1" data-event-tracker="1" data-tracker-event="input" data-tracker-action="search" data-tracker-label="speciality" data-tracker-value="__current__value__" autocomplete="off" />
                    <button className="search__button">
                      <i className="fa fa-search" /> 
                    </button>
                    <div className="autocomplete-suggestions autocomplete-suggestion-withgroup" style={{position: 'absolute'},{display: 'none'}, {'max-height': '300px'}, {'z-index': '9999'}} />
                  </div>
                  <div className="search__field search__field_select">
                    <div className="search__field_icon search__field_icon--pink" />
                    <input type="text" name="geo" className="forms__input search__input js-suggest-location" data-autocomplete-id="autocomplete-geo" placeholder="Метро, город МО" data-is-district="0" value="" tabindex="2" data-event-tracker="1" data-tracker-event="input" data-tracker-action="search" data-tracker-label="metro" data-tracker-value="__current__value__" autocomplete="off" />
                    <div className="autocomplete-suggestions" style={{position: 'absolute'}, {display: 'none'}, {'max-height': '300px'}, {'z-index': '9999'}} />
                  </div>
                  <div className="search__field search__field_button">
                    <button className="button button_search forms__button" type="submit">Найти</button>
                  </div>
                </div>
              </div>
            </div>
          </form>	
		    </div>
	    </div>
      <div className="suggestions-new">
        <div className="suggestions__content">
          <div className="recommended_today_title">Ещё на DocDoc можно</div>
            <ul className="suggested-features-showcase">
              <li>
                <div>
                  <div className="suggested-features-showcase-circle suggested-features-showcase-circle-pink" />
                </div>
                <div>
                  Записаться <br/> 
                  <a href="/doctor" target="_blank" data-category="doctor application">к врачу на приём</a>
                </div>
              </li>
              <li>
                <div>
                  <div className="suggested-features-showcase-circle suggested-features-showcase-circle-orange" />
                </div>
                <div>
                  Пройти <a href="https://shop.docdoc.ru/catalog/kompleksnye-obsledovaniya/?utm_source=ddmain&amp;utm_medium=first_screen" target="_blank" data-category="checkup application">комплексное <br /> обследование</a>
                </div>
              </li>
              <li>
                <div>
                  <div className="suggested-features-showcase-circle suggested-features-showcase-circle-blue" />
                </div>
                <div>
                  Записаться <br /> <a href="https://diagnostica.docdoc.ru" target="_blank" data-category="diagnostics application">на диагностику</a>
                </div>
              </li>
	            <li>
                <div>
                  <div className="suggested-features-showcase-circle suggested-features-showcase-circle-violet" />
                </div>
                <div>
	                Записаться <br /> 
                  <a href="/dms" target="_blank" data-category="dms application">по полису ДМС</a>
                </div>
              </li>
	            <li>
                <div>
                  <div className="suggested-features-showcase-circle suggested-features-showcase-circle-green" />
                </div>
                <div>
                  Получить 
                  <a href="https://shop.docdoc.ru/catalog/onlayn-konsultatsii/?utm_source=ddmain&amp;utm_medium=first_screen" target="_blank" data-category="telemedicine applicantion">онлайн- <br /> консультацию (телемедицина)</a>
                </div>
              </li>
	            <li>
                <div>
                  <div className="suggested-features-showcase-circle suggested-features-showcase-circle-red" />
                </div>
                <div>
                  Скачать <a href="#apps_anchor" data-category="mobile download">мобильное <br /> приложение</a>
                </div>
              </li>
	          </ul>
          </div>
        </div>
    </div>
  </div>
);

SearchBox.defaultProps = {
}

export default SearchBox;
