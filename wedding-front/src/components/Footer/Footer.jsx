import React from 'react';
import './footer.scss'
function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__title">До встречи на свадьбе!</div>
      <img className="footer__avatar" src="/weare.png" width="216" height="216" alt="We" />
      <div className="footer__bottom">
        <div className="footer__left">...адьба свадьба пела</div>
        <div className="footer__right">И пЛяСалааа...</div>
      </div>
    </div>
  );
}

export default Footer;
