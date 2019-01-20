import classes from './ResCardFront.css';
import React from 'react';
import ResCardButton from '../ResCardButton/ResCardButton'

const resCardFront = (props) => {

  return (<div
    className={[classes.ResCardFront, classes[props.status]].join(' ')}>
    <div style={{
      height: '70%'
    }}>{props.title}</div>
    <ResCardButton resAdd={props.resAdd} resAdded={props.resAdded} resRemove={props.resRemove} />
  </div >);
}


export default resCardFront