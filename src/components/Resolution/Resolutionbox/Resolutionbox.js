import classes from './Resolutionbox.css';
import React from 'react';
import Button from '../../UI/Button/Button'

const resolutionbox = (props) => {


  return (<div
    className={[classes.Resolutionbox, classes[props.status]].join(' ')}>
    <p style={{
      height: '40%'
    }}>{props.title}</p>
    <div style={{
      display: "flex",
      boxSizing: "border-box",
      height: '20%'
    }}>
      <Button btnType='Success' clicked={props.resMore}>DETAILS</Button>
      {!props.resAdded ?
        <Button btnType='Success'
          clicked={props.resAdd}
          state={props.resAdded}>ADD</Button> :
        <Button btnType='Danger'
          clicked={props.resRemove}
          state={props.resAdded}>REMOVE</Button>

      }

    </div>

  </div>);
}

export default resolutionbox