import React from "react";
import imageRegOk from '../images/infoTooltip-ok.svg';
import imageRegError from '../images/infoTooltip-error.svg';

function InfoTooltip({isOpen, onClose, message, isRegOk}){

  function cancelClose(e) {
    e.stopPropagation();
  }
  
  return(
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={onClose}
    >
      <div className="popup__container" onClick={cancelClose}>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        {isRegOk?<img alt="Успешно" src={imageRegOk}/>:<img alt="Ошибка" src={imageRegError}/>}
        <h2 className="popup__title">{isRegOk?"Вы успешно зарегистрированы!":message}</h2>
        </div>
        </div>
  )
}

export default InfoTooltip;