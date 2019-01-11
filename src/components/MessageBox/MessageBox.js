import React from 'react';
import classes from './MessageBox.css';


const MessageBox = (props) => {
  return (<div className={classes.MessageBox}>{props.text}</div>)

}

export default MessageBox;
