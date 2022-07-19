import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setAvatarPopupOpen("");
    setProfilePopupOpen("");
    setAddPlacePopupOpen("");
    setSelectedCard("");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title="Редактировать профиль"
          name="profile"
        >
          <>
            <div className="popup__fieldset">
              <input
                type="text"
                className="popup__input popup__input_type_name"
                name="name"
                id="name"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
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
                minlength="2"
                maxlength="200"
                required
              />
              <span className="popup__input-error about-input-error"></span>
            </div>
            <button className="popup__button" type="submit">
              Сохранить
            </button>
          </>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Новое место"
          name="add-photo"
        >
          <>
            <div className="popup__fieldset">
              <input
                type="text"
                className="popup__input popup__input_type_title"
                name="title"
                id="title"
                placeholder="Название"
                required
                minlength="2"
                maxlength="30"
              />
              <span className="popup__input-error title-input-error"></span>
            </div>
            <div className="popup__fieldset">
              <input
                type="url"
                className="popup__input popup__input_type_link"
                name="link"
                id="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error link-input-error"></span>
            </div>
            <button className="popup__button" type="submit" disabled>
              Создать
            </button>
          </>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Обновить аватар"
          name="avatar"
        >
          <>
            <div className="popup__fieldset">
              <input
                type="url"
                className="popup__input popup__input_type_url"
                name="url"
                id="url"
                placeholder="Ссылка на изображение"
                required
              />
              <span className="popup__input-error url-input-error"></span>
            </div>
            <button className="popup__button" type="submit" disabled>
              Сохранить
            </button>
          </>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
