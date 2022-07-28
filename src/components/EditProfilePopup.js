import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");


  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="profile"
      buttonName="Сохранить"
      isLoading={isLoading}
    >
      <>
        <div className="popup__fieldset">
          <input
            type="text"
            className="popup__input popup__input_type_name"
            name="name"
            id="name"
            placeholder="Имя"
            value={name||''}
            onChange={handleChangeName}
            required
          />
          <span className="popup__input-error name-input-error"></span>
        </div>
        <div className="popup__fieldset">
          <input
            type="text"
            className="popup__input popup__input_type_about"
            name="about"
            id="about"
            placeholder="Профессия"
            value={description||''}
            onChange={handleChangeDescription}
            required
          />
          <span className="popup__input-error about-input-error"></span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
