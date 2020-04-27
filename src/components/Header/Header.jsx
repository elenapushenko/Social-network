import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://mpng.pngfly.com/20180821/cre/kisspng-pusheen-cat-pusheen-cat-kitten-pusheen-card-boaz-ars-usye-yarma-5b7c0d6c147d86.7491639715348565560839.jpg' />
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
           : <NavLink to={'/login'}>Login</NavLink>}
        </div>
  </header>
}

export default Header;