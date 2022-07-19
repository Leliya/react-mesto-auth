import React from "react";
import api from "../utils/api.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, getCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((user) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    });
  }, [userName, userDescription, userAvatar]);

  React.useEffect(() => {
    api.getInitialCards().then((cards) => getCards(cards));
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__user-image">
            <button
              className="profile__avatar-edit"
              type="button"
              aria-label="Изменить аватар"
              onClick={props.onEditAvatar}
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
            onClick={props.onEditProfile}
          ></button>
          <button
            className="profile__add-button"
            aria-label="Добавить фотографию"
            type="button"
            onClick={props.onAddPlace}
          ></button>
        </section>
        <section class="photos">
          <ul class="cards">
            {cards.map((card) => (
              <Card card={card} onCardClick={props.onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
