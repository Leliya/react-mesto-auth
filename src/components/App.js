import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    setAvatarPopupOpen(false);
    setProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
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
          buttonName="Сохранить"
        >
          <>
            <div className="popup__fieldset">
              <input
                type="text"
                className="popup__input popup__input_type_name"
                name="name"
                id="name"
                placeholder="Имя"
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
                required
              />
              <span className="popup__input-error about-input-error"></span>
            </div>
          </>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Новое место"
          name="add-photo"
          buttonName="Создать"
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
          </>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Обновить аватар"
          name="avatar"
          buttonName="Сохранить"
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
          </>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
