import React from 'react';
import './about.scss';


function About(props) {
  return (
    <div className="about">
      <div className="about__title">Организационная информация</div>
      <div className="about__container">
        <img src="/pastor.png" alt="Ресторан" className="about__img" />
        <div className="about__info info">
          <div className="info__title">Дата</div>
          <div className="info__par"><p>22 июня 2022 года</p></div>
          <div className="info__title">Место</div>
          <div className="info__par"><p>Ресторан «Пасторское озеро», Выборгское шоссе, 39 км</p>
          <p><a href="https://yandex.ru/maps/?um=constructor%3A6b935458137d42b72175cd325e74cddd4034c7606d52d83e4b0c4aa563795bab&source=constructorLink">Тыкни, чтобы посмотреть на карте</a></p>
          </div>
          <div className="info__title">Время</div>
          <div className="info__par"><p>Фуршет в 16:00, выездная регистрация в 16:30</p></div>
          <div className="info__title">Трансфер</div>
          <div className="info__par"><p>Автобус будет ждать у метро Проспект Просвещения (здесь скоро появится ссылка на карту) за 30 мин. до выезда. Отправление в 15:00. Не опаздывайте!</p>
          <p>Обратный трансфер будет от ресторана в 23:00 и привезет всех к метро проспект Просвещения.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
