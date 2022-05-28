import React, { useState } from 'react';
import './form.scss';
import { useLocation} from 'react-router-dom';

function Form(props) {
  const url = useLocation();
  const [result, setResult] = useState('');
  async function submitHandler(evt) {
   evt.preventDefault();
   const messageData = Object.fromEntries(new FormData(evt.target));
   
   try {
     const response = await fetch(`http://localhost:5000/api/guest/update-message${url.pathname}`, {
       method: "POST",
       headers:{
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(messageData),
     })

     if (response.ok) {
      setResult('Мы получили ваши данные! Спасибо!');
      setTimeout(() => {
        setResult('');
      }, 3000)
     }
   } catch (error) {
     console.log(error);
   }
  }

  return (
    <div className="form-block">
      <div className="form-block__inner">
        <div className="form-block__title">Мы очень хотим разделить этот день с вами</div>
        <div className="form-block__title-little">Ответьте на пару вопросов (обязательно!!!)</div>
      
        <ol>
          <li>1. Придёте<span className="gray">(-шь)</span> на свадьбу?</li>
          <li>2. Нужен ли трансфер до ресторана и обратно?</li>
          <li>3. Выберите<span className="gray">(-ри)</span> вариант горячего блюда: </li>
        </ol>

        <ul>
          <li><span className="fiolet">a)</span> Филе морского окуня под шафрановым соусом с овощным ризотто</li>
          <li><span className="fiolet">b)</span> Цыпленок Cordon Bleu в сливках с картофелем стоун</li>
          <li><span className="fiolet">c)</span> Я буду вегетарианское меню</li>
        </ul>

        <form onSubmit={submitHandler}>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Тут надо ответить на вопросы и еще можно написать все-все-все"></textarea>
          <button  type="submit">Отправить</button>
          <div className="result">{result}</div>
        </form>
      </div>
    </div>
  );
}

export default Form;
