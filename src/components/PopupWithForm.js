function PopupWithForm({
  name,
  title,
  buttonName,
  children,
  isOpen,
  onClose,
  onSubmit,
  isLoading,
}) {
  function cancelClose(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={onClose}
    >
      <div className="popup__container" onClick={cancelClose}>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form name={name} onSubmit={onSubmit} className="popup__form">
          {children}
          <button className="popup__button" type="submit">
            {isLoading ? "Сохранение..." : buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
