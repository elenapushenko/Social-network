import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://cdn.wallpapersafari.com/30/78/PW8B7w.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;