import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './UserLists.module.css';

import User from '../../components/User/User';
import Spinner from '../../components/UI/Spinner/Spinner';

class UserLists extends Component {

    userClickedHandler = (id) => {
        this.props.history.push(`/user/${id}`);
    }

    render() {
        let users = <Spinner />;
        if(this.props.fetching === false) {
            users = this.props.users.map(user => {
                return <User 
                    key={user.id}
                    name={user.name}
                    picture={user.profilepicture}
                    clicked={() => this.userClickedHandler(user.id)} 
                    showBorder />
            });
        }

        return <div className={classes.Container}>
           <div className={classes.Container__box}>
                <div className={classes.Container__box__top}>
                     <span className="text-dark">Select an account</span>
                </div>
                <div className={classes.Container__box__list}>
                    { users }
                </div>
           </div>
        </div>;
    }
}

export default withRouter(UserLists);