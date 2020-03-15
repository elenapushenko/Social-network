import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src={'https://images-na.ssl-images-amazon.com/images/I/91Dm3nkL0bL._AC_SL1500_.jpg'} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;