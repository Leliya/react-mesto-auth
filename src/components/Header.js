import logo from '../images/header-logo.svg'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={logo} />
      <Link to='/sign-up' className='header__link'>Регистрация</Link>
    </header>
  );
}

export default Header;
