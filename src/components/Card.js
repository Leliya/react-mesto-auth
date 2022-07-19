function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item" key={props.card._id}>
      <img
        className="cards__image"
        alt={props.card.name}
        src={props.card.link}
        onClick={handleClick}
        onError={(event) => (event.target.style.visibility = "hidden")}
      />
      <button
        type="button"
        className="cards__delete"
        aria-label="Удалить"
      ></button>
      <div className="cards__caption">
        <h2 className="cards__name">{props.card.name}</h2>
        <div className="cards__like-elements">
          <button
            type="button"
            className="cards__like"
            aria-label="Мне нравится"
          ></button>
          <span className="cards__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
