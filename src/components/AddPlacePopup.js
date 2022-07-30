import React from "react";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    if(isOpen){
      setTitle("")
      setLink("")}
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      title: title,
      link: link,
    });

    // setTitle("");
    // setLink("");
  }

  function handleChangeTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
      name="add-photo"
      buttonName="Создать"
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <>
        <div className="popup__fieldset">
          <input
            type="text"
            className="popup__input popup__input_type_title"
            name="title"
            id="title"
            value={title || ""}
            onChange={handleChangeTitle}
            placeholder="Название"
            required
          />
          <span className="popup__input-error title-input-error"></span>
        </div>
        <div className="popup__fieldset">
          <input
            type="url"
            className="popup__input popup__input_type_link"
            name="link"
            id="link"
            value={link || ""}
            onChange={handleChangeLink}
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
