import React from "react";
import api from "../utils/api.js";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, getCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

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
            src={userAvatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
        </div>
        <h1 className="profile__name">{userName}</h1>
        <p className="profile__activity">{userDescription}</p>
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
            <Card card={card} onCardClick={onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
