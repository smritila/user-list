import React from 'react';

import classes from './ChatPopup.module.css';
import User from '../../User/User';

const ChatPopup = props => {
    const classArr = [classes['Chatpopup']];
    if(props.show) {
        classArr.push(classes['Chatpopup--show']);
    }
    return <div className={classArr.join(' ')}>
        <div className={classes['Chatpopup__header']} onClick={props.toggle}>
            <span>Chats</span>
            <span className={[
                classes['Chatpopup__icon'],
                props.show ? classes['Chatpopup__icon--down'] : ''
            ].join(' ')}></span>
        </div>
        <div className={classes['Chatpopup__list']}>
            {
                props.users.map(user => {
                    return <User key={user.id} name={user.name} picture={user.profilepicture}>
                        <span className={[
                            classes['Chatpopup__status'],
                            user.id % 2 === 0 ? classes['Chatpopup__status--offline'] : classes['Chatpopup__status--online']
                        ].join(' ')}></span>
                    </User>;
                })
            }
        </div>
    </div>;
}

export default ChatPopup;