import logo from "../images/header-logo.svg";
import { useLocation, Link } from "react-router-dom";

function Header({ loggedIn, onSignOut, email }) {
  let location = useLocation();
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={logo} />
      <h2 className="header__email">{loggedIn&&email}</h2>
      {location.pathname==='/sign-up'?
      <Link to="/sign-in" className="header__link">
        Войти
      </Link>
       :!loggedIn?
      <Link to="/sign-up" className="header__link">
        Регистрация
      </Link>
      :<Link to="/sign-in" className="header__link header__link_type_signout" onClick={onSignOut}> 
        Выйти
      </Link>}
    </header>
  );
}

export default Header;
