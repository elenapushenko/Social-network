import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../common/Preloader/Preloader";
import smile from "../../assets/images/yes.png";
import sad from "../../assets/images/no.png"


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img
                src='https://cdn.wallpapersafari.com/30/78/PW8B7w.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <div>Name: {props.profile.fullName}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Contacts: {props.profile.contacts.facebook}</div>
            <div>Looking for a job: <img src={props.profile.lookingForAJob ? smile : sad} className={classes.job}/></div>
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    </div>
}

export default ProfileInfo;