function ImagePopup(props) {
  return (
    <div className={`popup popup_type_photo ${props.card && "popup_opened"}`}>
      <figure className="popup__box">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption>
          <h2 className="popup__name">{props.card.name}</h2>
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
