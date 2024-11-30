import { NavLink } from "react-router-dom";
import { Imgs } from "../../Images/Imgs";
import { Sling } from "hamburger-react";
import "./header.scss";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenuBurger, selectBurger, toggleMenu } from "../../store/Slices/headerSlice/headerSlice";
import { selectAdmin } from "../../store/Slices/admin/adminSlice";

const Header = () => {
  const burger_menu = useRef();
  const burger = useSelector(selectBurger);
  const { adminSt } = useSelector(selectAdmin);
  const dispatch = useDispatch();

  const closeModal = (ev) => {
    if (ev.target.localName === "li" || ev.target.localName === "a" || ev.target.localName === "img") {
      burger_menu.current.style.height = `0px`;
      dispatch(closeMenuBurger());
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
              <NavLink to="/languages">Все языки</NavLink>
            </li>
            <li>
              <NavLink to="/admin">{adminSt ? "Админ" : "Войти"}</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__btns">
          <div className="header__btns-contacts">
            <a href="tel:+37477873707">
              <img src={Imgs.call} alt="images" /> +374 77 87 37 07
            </a>
            <a href="mailto:meliksetyan415@gmail.com">
              <img src={Imgs.sms} alt="images" /> meliksetyan415@gmail.com
            </a>
          </div>
          <div className="header__btns-burger">
            <Sling
              size={28}
              duration={0.8}
              direction="right"
              color="#6B46C1"
              toggled={burger}
              onToggle={() => {
                dispatch(toggleMenu());
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
            <NavLink to="/languages">Все языки</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Войти</NavLink>
          </li>
          <a href="tel:+37477873707">
            <img src={Imgs.call} alt="images" /> +374 77 87 37 07
          </a>
          <a href="mailto:meliksetyan415@gmail.com">
            <img src={Imgs.sms} alt="images" /> meliksetyan415@gmail.com
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
