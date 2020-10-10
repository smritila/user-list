import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './ChangeProfile.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

const changeProfile = props => {

    const signOut = () => {
        props.history.replace('/');
    }

    return <div className={classes.ChangeProfile}>
        <ProfilePicture src={props.detail.profilepicture} />
        <div className={classes.ChangeProfile__activeuser}>
            <span className="text-dark align-center">{props.detail.name}</span>
            <span className="text-light align-center">{props.detail.email}</span>
        </div>
        <div className={classes.ChangeProfile__otheruser}>
            <ProfilePicture size="small" />
            <span className={['text-dark', classes.ChangeProfile__otheruser__name].join(' ')}>Clementine Bauch</span>
        </div>
        <div className={classes.ChangeProfile__otheruser}>
            <ProfilePicture size="small" />
            <span className={['text-dark', classes.ChangeProfile__otheruser__name].join(' ')}>Clementine Bauch</span>
        </div>
        <button className={classes.Button} onClick={signOut}>Sign out</button>
    </div>;
}

export default withRouter(changeProfile);