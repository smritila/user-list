import React, { useState } from 'react';

import classes from './ProfileHeader.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import ChangeProfile from '../ChangeProfile/ChangeProfile';
import Popover from '../../UI/PopOver/PopOver';

const ProfileHeader = props => {
    const [state, setState] = useState({ showPopover: false });

    const togglePopover = () => {
        setState(prevState => ({ ...prevState, showPopover: !prevState.showPopover }));
    }

    return <header className={classes.ProfileHeader}>
        <div className={classes.ProfileHeader__title}>Profile</div>
        <div className={classes.ProfileHeader__additional} onClick={togglePopover}>
            <ProfilePicture size="small" src={props.detail.profilepicture} />
            <div className={classes.ProfileHeader__additional__text}>{ props.detail.name }</div>
        </div>
        <Popover show={state.showPopover}>
            <ChangeProfile detail={props.detail} />
        </Popover>
    </header>
}

export default ProfileHeader;