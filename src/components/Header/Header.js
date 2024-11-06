import React from "react";
import classes from "./Header.module.css";
import { LiaSearchSolid } from "react-icons/lia";
import { BiSolidUserCircle } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.container}>
          <a href="" className={classes.logo}>
            Flatlogic
          </a>
          <nav>
            <ul className={classes.navlist}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </nav>
          <ul className={classes.controls}>
            <li>
              <a href="">
                <LiaSearchSolid size={"1.5em"} />
              </a>
            </li>
            <li>
              <a href="">
                <BiSolidUserCircle size={"1.5em"} />
              </a>
            </li>
            <li>
              <a href="">
                <LiaShoppingCartSolid size={"1.5em"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
