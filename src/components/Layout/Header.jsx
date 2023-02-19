import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicius food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
