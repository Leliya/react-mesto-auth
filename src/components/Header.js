import React from "react";
import logo from "../images/header-logo.svg";
import { useLocation, Link } from "react-router-dom";
import Menu from "./Menu";

function Header({ loggedIn, onSignOut, email }) {
  let location = useLocation();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function onClickMenu() {
    setMenuOpen(true);
  }

  function onCloseMenu() {
    setMenuOpen(false);
  }

  function handleSignOut(){
    setMenuOpen(false);
    onSignOut()
  }

  return (
    <>
      <Menu isOpen={isMenuOpen} />
      <header className="header">
        <img className="header__logo" alt="Логотип" src={logo} />
        <h2
          className={`header__email ${
            isMenuOpen ? "header__email_position_menu" : ""
          }`}
        >
          {loggedIn && email}
        </h2>
        {location.pathname === "/sign-up" ? (
          <Link to="/sign-in" className="header__link">
            Войти
          </Link>
        ) : !loggedIn ? (
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
        ) : (
          <Link
            to="/sign-in"
            className={`header__link header__link_type_signout ${
              isMenuOpen ? "header__link_position_menu" : ""
            }`}
            onClick={handleSignOut}
          >
            Выйти
          </Link>
        )}

        {isMenuOpen&&loggedIn ? (
          <button
            className="header__close-button"
            type="button"
            aria-label="Закрыть"
            onClick={onCloseMenu}
          ></button>
        ) : loggedIn?(
          <button
            className="header__burger-menu"
            type="button"
            aria-label="Открыть меню"
            onClick={onClickMenu}
          ></button>
        ):<></>}
      </header>
    </>
  );
}

export default Header;
