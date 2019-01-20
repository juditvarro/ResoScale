import classes from './Resolutioncard.css';
import React from 'react';

const resolutioncard = (props) => {

  const resCost = Object.keys(props.resCost).map((resKey, index) => {
    return (<li key={resKey + index} className={classes.ResListItem}>
      {resKey}: <span className={classes.ResValueNeg}>{props.resCost[resKey]}</span> </li>)
  })

  const resValue = Object.keys(props.resValue).map((resKey, index) => {
    return (<li key={resKey + index} className={classes.ResListItem}>
      {resKey}: <span className={classes.ResValuePos}>{props.resValue[resKey]}</span> </li>)
  })

  return (<div className={classes.Resolutioncard}>
    <div className={classes.ResName}>{props.title}</div>
    <div className={classes.ResResource}>
      <ul className={classes.ResList}>
        <li className={classes.ResListItemHeaderNeg}>Cost</li>
        {resCost}
      </ul>
      <ul className={classes.ResList}>
        <li className={classes.ResListItemHeaderPos}>Benefit</li>
        {resValue}
      </ul>

    </div>
  </div >);
}

export default resolutioncard