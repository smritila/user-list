
import React from "react";

import classes from "./User.module.css";

import ProfilePicture from '../Profile/ProfilePicture/ProfilePicture';


const User = (props) => {
  
  const classArr = [classes.User];
  if(props.showBorder) {
    classArr.push(classes['User--with-border']);
  }

  const handleClick = (event) => {
    event.preventDefault();
    if(props.clicked) {
      props.clicked();
    }
  }

  return <div className={classArr.join(' ')} onClick={handleClick}>
      <ProfilePicture size="small" src={props.picture} />
      <span className={classes.User__name}>
        { props.name }
      </span>
      { props.children }
  </div>;
}

export default User;