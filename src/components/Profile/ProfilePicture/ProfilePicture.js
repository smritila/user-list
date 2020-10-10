import React from 'react';

import classes from './ProfilePicture.module.css';
import profileIcon from '../../../assets/images/profile-icon.png';

const profilePicture = props => {
    const classArr = [classes.ProfilePicture];
    if(props.size) {
        classArr.push(classes[`ProfilePicture--${props.size}`]);
    }

    const imageSrc = props.src ? props.src : profileIcon;
    
    return <div className={classArr.join(' ')}>
        <img src={imageSrc} alt="My profile pic" />
    </div>
};

export default profilePicture;