import React from 'react';

import classes from './Titlebar.module.css';
import Logo from '../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const titlebar= (props) => (
    <header className={classes.Titlebar}>
        {/* <DrawerToggle clicked={props.drawerToggleClicked}/> */}
        <div className={classes.Logo}>
            <Logo />        
        </div>

        <nav className={classes.DesktopOnly}>
            {/* <NavigationItems /> */}
            <div>NavItem</div>
        </nav>
    </header>
);

export default titlebar;