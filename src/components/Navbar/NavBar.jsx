import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Massages</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        {/*    <div className={classes.friends}>*/}
        {/*        <div className={classes.title}>*/}
        {/*    Friends*/}
        {/*</div>*/}
        {/*    <div className={classes.friend}>{props.siteBar[0].name}*/}
        {/*        <img src='https://i.pinimg.com/736x/18/63/7d/18637d75b9642c9bbae6eab77fea1d9d.jpg'/>*/}
        {/*    </div>*/}
        {/*    <div className={classes.friend}>{props.siteBar[1].name}*/}
        {/*        <img src='https://i.pinimg.com/736x/37/d6/a4/37d6a45c83aa7b196693685445669325.jpg'/>*/}
        {/*    </div>*/}
        {/*    <div className={classes.friend}>{props.siteBar[2].name}*/}
        {/*        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcA9pCnIqCzxxJ1LqDbtFlVKs1Cd7VkwMciUC_Z04SBc85Q7agg&s'/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </nav>
    )
}

export default NavBar;