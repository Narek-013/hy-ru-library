import { NavLink } from "react-router-dom";
import { Imgs } from "../../Images/Imgs";
import { Sling } from "hamburger-react";
import "./header.scss";
import { useRef } from "react";

const Header = () => {
  const burger_menu = useRef();

  const closeModal = (ev) => {
    if (ev.target.localName === "li" || ev.target.localName === "a" || ev.target.localName === "img") {
      burger_menu.current.style.height = `0px`;
    }
  };

  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__title">
          <NavLink to="/" onClick={closeModal}>
            {" "}
            <img src={Imgs.logo} alt="logo" />
          </NavLink>
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
          </ul>
        </div>
        <div className="header__btns">
          <button className="header__btns-mode">Dark</button>
          <div className="header__btns-burger">
            <Sling
              size={28}
              duration={0.8}
              direction="right"
              color="#6B46C1"
              onToggle={() => {
                if (burger_menu.current.offsetHeight < 10) {
                  burger_menu.current.style.height = `${burger_menu.current.scrollHeight}px`;
                } else {
                  burger_menu.current.style.height = `0px`;
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="burger-menu" ref={burger_menu}>
        <ul onClick={closeModal}>
          <li>
            <NavLink to="/">Основной</NavLink>
          </li>
          <li>
            <NavLink to="/all-words">Все слова</NavLink>
          </li>
          <li>
            <NavLink to="/languages">Все языки</NavLink>
          </li>
          <button>Dark</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
