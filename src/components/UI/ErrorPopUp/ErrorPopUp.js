import React from 'react';
import classes from './ErrorPupUp.css'

const errorPopUp = (props) => {
  return <div className={classes.ErrorPopUp}>{props.errormessage}</div>
}

export default errorPopUp