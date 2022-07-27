import React from "react";
import api from "../utils/api.js";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  // const [userName, setUserName] = React.useState("");
  // const [userDescription, setUserDescription] = React.useState("");
  // const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, getCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card, isLiked) {
    // const isLiked = card.likes.some(likeOwner => likeOwner._id === currentUser._id);
    api
      .changeLikeCard(card._id, isLiked)
      .then((res) =>
        getCards((cards) => cards.map((c) => (c._id === card._id ? res : c)))
      )
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card){
    api.deleteCard(card._id).then(() =>
    getCards((cards) => cards.filter((c) => (c._id !== card._id)))
    )
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    // setUserName(currentUser.name);
    // setUserDescription(currentUser.about);
    // setUserAvatar(currentUser.avatar);

    api
      .getInitialCards()
      .then((cards) => getCards(cards))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__user-image">
          <button
            className="profile__avatar-edit"
            type="button"
            aria-label="Изменить аватар"
            onClick={onEditAvatar}
          ></button>
          <img
            src={currentUser.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
        </div>
        <h1 className="profile__name">{currentUser.name}</h1>
        <p className="profile__activity">{currentUser.about}</p>
        <button
          className="profile__edit-button"
          aria-label="Редактировать профиль"
          type="button"
          onClick={onEditProfile}
        ></button>
        <button
          className="profile__add-button"
          aria-label="Добавить фотографию"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="photos">
        <ul className="cards">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              key={card._id}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
