function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__item">
      <img
        className="cards__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
        onError={(event) => (event.target.style.visibility = "hidden")}
      />
      <button
        type="button"
        className="cards__delete"
        aria-label="Удалить"
      ></button>
      <div className="cards__caption">
        <h2 className="cards__name">{card.name}</h2>
        <div className="cards__like-elements">
          <button
            type="button"
            className="cards__like"
            aria-label="Мне нравится"
          ></button>
          <span className="cards__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
