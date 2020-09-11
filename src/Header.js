import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>
      <div className="header_search">
        <input className="header_seachInput" type="text" />
        <SearchIcon className="header_searchInputIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <Link to={!user && "/Login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionlineOne">Hello Guest</span>
            <span className="header_optionlineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionlineOne">Returns</span>
          <span className="header_optionlineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineOne">Your</span>
          <span className="header_optionlineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingBasketIcon />
            <span className="header_optionlineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
