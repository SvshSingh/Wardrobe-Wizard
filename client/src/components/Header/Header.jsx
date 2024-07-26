import "./Header.scss";
import logo from "../../asset/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="WiseWardro Logo" />
        <NavLink to="/men" className="header__list-item">MEN</NavLink>
        <NavLink to="/women" className="header__list-item">WOMEN</NavLink>
        <NavLink to="/kids" className="header__list-item">KIDS</NavLink>
        <NavLink to="/home-living" className="header__list-item">HOME & LIVING</NavLink>
        <NavLink to="/beauty" className="header__list-item">BEAUTY</NavLink>
        <NavLink to="/studio" className="header__list-item">STUDIO</NavLink>
        <NavLink to="/wizard-wardrobe" className="header__list-item wizard">WARDROBE WIZARD </NavLink>
      </div>
      <div className="header__center">
        <input type="text" className="header__search" placeholder="Search for products, brands and more" />
      </div>
      <div className="header__right">
        <NavLink to="/profile" className="header__icon">
          <i className="fas fa-user"></i>
          Profile
        </NavLink>
        <NavLink to="/wishlist" className="header__icon">
          <i className="fas fa-heart"></i>
          Wishlist
        </NavLink>
        <NavLink to="/bag" className="header__icon">
          <i className="fas fa-shopping-bag"></i>
          Bag
        </NavLink>
      </div>
    </nav>
  );
}
