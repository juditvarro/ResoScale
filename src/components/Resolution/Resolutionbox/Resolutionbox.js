import classes from './Resolutionbox.css';
import React from 'react';
import Button from '../../UI/Button/Button'

const resolutionbox = (props) => {
  return (<div className={classes.Resolutionbox}>
    <p style={{
      height: '40%'
    }}>>{props.title}</p>
    <div style={{
      display: "flex",
      boxSizing: "border-box",
      height: '20%'
    }}>
      <Button btnType='Success' clicked={props.resMore}>DETAILS</Button>
      <Button btnType='Success' clicked={props.resAddRemove} state={props.resAdded}>{!props.resAdded ? 'ADD' : 'REMOVE'}</Button>
    </div>

  </div>);
}

export default resolutionbox