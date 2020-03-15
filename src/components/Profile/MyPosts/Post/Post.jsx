import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyEk228fZ6Pm2s_z60DITWbHwxG5oeMMWeTSeRAceQxfqNXK7RQ&s'/>
            {props.message}
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    );
}

export default Post;