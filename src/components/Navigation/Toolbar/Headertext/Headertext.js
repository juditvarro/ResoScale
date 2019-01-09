import React from 'react';
import classes from './Headertext.css';

const headertext = (props) => {
  return (<div className={classes.Headertext}>{props.maintitle}</div>)
}

export default headertext