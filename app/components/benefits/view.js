import React from 'react';

import Data from './data.json';

const Benefits = (props) => (
  <div className="main__section main__section_benefits">
    <div className="benefits">
      <div className="benefits__mobile">
        <div className="benefits__mobile-item benefits__mobile-item_1">
          <div className="benefits__mobile-title">Проверенные врачи</div>
          <div className="benefits__mobile-text">Мы проверяем информацию о врачах и контролируем ее актуальность. Публикуем все отзывы пациентов вне зависимости от поставленной оценки</div>
        </div>
        <div className="benefits__mobile-item benefits__mobile-item_2">
          <div className="benefits__mobile-title">Запись на удобное время</div>
          <div className="benefits__mobile-text">У большинства врачей на сайте есть онлайн-расписание. Это значит, что вы за пару минут выберете подходящего врача и мгновенно запишетесь на прием. Оплачивать на сайте ничего не нужно.</div>
        </div>
        <div className="benefits__mobile-item benefits__mobile-item_3">
          <div className="benefits__mobile-title">Врачи рядом с вами</div>
          <div className="benefits__mobile-text">На сайте 16826 врачей из любого района города. Вы легко найдете врача в удобном месте и запишитесь на прием в пару кликов.</div>
        </div>
      </div>
      <div className="benefits__inner">
        <div className="main__title">Почему пользоваться docdoc так здорово?</div>
          <div className="benefits__tabs">
            <div className="benefits__buttons">
              <div className="benefits__button"><a className="" data-rel="benefits_1" href="#">Настоящие отзывы</a></div>
              <div className="benefits__button"><a data-rel="benefits_2" href="#" className="">Запись на удобное время</a></div>
              <div className="benefits__button"><a data-rel="benefits_3" href="#" className="active">Врачи рядом с вами</a></div>
            </div>
            <div className="benefits__content">
              <div className="benefits__tab active" data-tab="benefits_1" style={{"display": "none"}}>
                <div className="benefits__note benefits__note_1">
                  Рейтинг врача основан на проверенных отзывах его пациентов
                </div>
                <div className="benefits__note benefits__note_2">
                  Мы публикуем отзывы о враче только от его пациентов, побывавших на приеме.
                </div>
                <div className="benefits__img">
                  <img src="https://docdoc.ru/static/new-doc-doc/images/main/choose1.png" />
                </div>
              </div>
              <div className="benefits__tab" data-tab="benefits_2" style={{"display": "none"}}>
                <div className="benefits__note benefits__note_3">
                  Записывайтесь на свободное время в два клика
                </div>
              <div className="benefits__note benefits__note_4">
                Выбирайте удобный день и время приема
              </div>
              <div className="benefits__img">
                <img src="https://docdoc.ru/static/new-doc-doc/images/main/choose2.png" />
              </div>
            </div>
            <div className="benefits__tab" data-tab="benefits_3" style={{"display": "block"}} >
              <div className="benefits__note benefits__note_5">
                Поиск врачей поблизости от вашего местоположения
              </div>
              <div className="benefits__note benefits__note_6">
                Тысячи клиник в Москве и в других регионах
              </div>
              <div className="benefits__img">
                <img src="https://docdoc.ru/static/new-doc-doc/images/main/choose3_moscow.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Benefits.defaultProps = {
}

export default Benefits;
