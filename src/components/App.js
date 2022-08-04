import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ConfirmationDeletePopup from "./ConfirmationDeletePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopup, setConfirmPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [deletedCard, setDeletedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, updateCards] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => updateCards(cards))
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
    setConfirmPopupOpen(false);
    setImagePopupOpen(false);
    //setSelectedCard({});
  }

  function handleCardLike(card, isLiked) {
    api
      .changeLikeCard(card._id, isLiked)
      .then((res) =>
        updateCards((cards) => cards.map((c) => (c._id === card._id ? res : c)))
      )
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true)
  }

  function handleCardDelete(card) {
    setDeletedCard(card);
    setConfirmPopupOpen(true);
  }

  function handleDeleteConfirmation() {
    setLoading(true);
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        setLoading(false);
        updateCards((cards) => cards.filter((c) => c._id !== deletedCard._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(data) {
    setLoading(true);
    api
      .postNewCard(data)
      .then((card) => {
        setLoading(false);
        updateCards([card, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(user) {
    setLoading(true);
    api
      .setUserInfo(user)
      .then((newUser) => {
        setLoading(false);
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(avatar) {
    setLoading(true);
    api
      .setAvatar(avatar)
      .then((newUser) => {
        setLoading(false);
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={isLoading}
        />
        <ConfirmationDeletePopup
          isOpen={isConfirmPopup}
          onClose={closeAllPopups}
          onDeleteCard={handleDeleteConfirmation}
          isLoading={isLoading}
        />
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
