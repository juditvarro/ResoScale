import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Layout/Logo/Logo';
import Headertext from './Headertext/Headertext'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo className={classes.Logo} />
    <Headertext maintitle='RESOLUTION SCALE' />
  </header>
)
export default toolbar;

