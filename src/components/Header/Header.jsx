import { NavLink } from "react-router-dom";
import "./header.scss";
import { Imgs } from "../../Images/Imgs";

const Header = () => {

  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__title">
          <NavLink to="/"> <img src={Imgs.logo} alt="logo" /></NavLink>
          <ul>
            <li>
              <NavLink to="/">Основной</NavLink>
            </li>
            <li>
              <NavLink to="/all-words">Все слова</NavLink>
            </li>
            <li>
              <NavLink to="/languages">Все языки</NavLink>
            </li>
            <li>
              <NavLink to="/languages">tasks</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__contact">
          <button>Dark</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
