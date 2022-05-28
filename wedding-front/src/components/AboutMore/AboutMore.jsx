import React from 'react';
import './aboutMore.scss';

function AboutMore(props) {
  return (
    <div className="about-more">
      <div className="about-more__title">И ещё капельку информации</div>

      <div className="about-more__title2">У нас нет никакого особого дресс кода</div>
      <div className="about-more__text">(Просто приходите в том, в чём считаете себя неотразимым :)) )</div>
      <div className="about-more__title2">Наше видение свадьбы – красивая и веселая туса </div>
      <div className="about-more__text">(Давайте уберем шлейф официальности события и просто классно проведём время)</div>
      <div className="about-more__title2">Мы будем очень рады в подарок получить денежку</div>
      <div className="about-more__text">(Через пару месяцев после свадьбы мы уедем из России и уже распродаем все вещи)</div>
      <div className="about-more__title2">До 24 июня мы остаёмся в коттедже на Пасторском </div>
      <div className="about-more__text">(Если у вас есть возможность и желание тоже остаться, то варианты бронирования посмотрите <a href="https://pastorskoelake.ru/">здесь</a>)</div>
    </div>
  );
}

export default AboutMore;
