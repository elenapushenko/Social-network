import React from 'react';
import classes from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
            <img src={'https://www.netclipart.com/pp/m/176-1765985_pusheen-cat-so-lazy-cant-move-freetoedit-pusheen.png'}/>
            {props.message}

        </div>
    )
}

export default Message;