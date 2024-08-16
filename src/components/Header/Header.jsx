import React from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import cart from "../../assets/svg/cart.svg";
import wishlist from "../../assets/svg/wishlist.svg";

function Header() {
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="top-header">
        <div className="container flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <strong>ShopNow</strong>
          </p>
          <select onChange={handleChange}>
            <option value="kg">KGZ</option>
            <option value="ru">RUS</option>
            <option value="en">ENG</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>{t("logo")}</h1>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="serach">
            <input type="text" />
            <img src="" alt="" />
          </div>
          <div className="right-icon">
            <Link to="/wishlist">
              <img src={wishlist} alt="" />
            </Link>
            <img src={cart} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
