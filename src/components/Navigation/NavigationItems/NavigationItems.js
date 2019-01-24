import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';


const navigationItems = (props) => (
  <ul className={classes.NavItems}>
    <NavigationItem link='/' >RESOLUTION SCALE</NavigationItem>
    <NavigationItem link='/questionaire' >PERSONALIZE</NavigationItem>
    <NavigationItem link='/aboutus' >ABOUT US</NavigationItem>
  </ul>
)


export default navigationItems