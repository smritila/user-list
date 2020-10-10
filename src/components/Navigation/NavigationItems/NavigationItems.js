import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

function navigationItems(props) {

    return <nav className={classes.NavigationItemsContainer}>
        <ul className={classes.NavigationItems}>
            {
                props.navItems.map((item, index) => {
                    return <NavigationItem key={index} link={item.link}>
                        {item.name}
                    </NavigationItem>
                })
            }
        </ul>
    </nav>
}

export default navigationItems;