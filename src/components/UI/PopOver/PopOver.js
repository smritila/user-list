import React from 'react';

import classes from './PopOver.module.css';

const Popover = props => {
    const classArr = [classes.Popover__content];
    if(props.show) {
        classArr.push(classes[`Popover__content--show`]);
    }
    return <div className={classArr.join(' ')}>
        { props.children }
    </div>
};

export default Popover;