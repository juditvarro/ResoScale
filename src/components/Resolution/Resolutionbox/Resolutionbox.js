import classes from './Resolutionbox.css';
import React from 'react';

const resolutionbox = (props) => {
  return (<div className={classes.Resolutionbox} onClick={props.clicked}>{props.title}</div>);
}

export default resolutionbox