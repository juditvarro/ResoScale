import classes from './ResCardBack.css';
import React from 'react';
import energyicon from '../../../assets/resicons/energy.svg'
import brainicon from '../../../assets/resicons/brain.svg';
import freetimeicon from '../../../assets/resicons/freetime.svg';
import healthicon from '../../../assets/resicons/health.svg';
import moneyicon from '../../../assets/resicons/money.svg';
import socialvalueicon from '../../../assets/resicons/socialvalue.svg';
import willpowericon from '../../../assets/resicons/willpower.svg';
import ResCardButton from './../ResCardButton/ResCardButton'

const resIconDict = {
  energy: energyicon,
  freetime: freetimeicon,
  brain: brainicon,
  health: healthicon,
  money: moneyicon,
  socialvalue: socialvalueicon,
  willpower: willpowericon
}

const resCardBack = (props) => {

  let resBudget = null
  if (props.resBudget) {
    resBudget = Object.keys(props.resBudget).map((resKey, index) => {
      return (<div key={resKey + index} className={classes.ResListItem}>
        <img src={resIconDict[resKey]} alt={resKey} ></img>
        <span className={props.resBudget[resKey] < 0 ? classes.ResValueNeg : classes.ResValuePos}>{props.resBudget[resKey]}</span> </div>)
    })
  }


  return (<div
    className={[classes.ResCardBack, classes[props.status]].join(' ')}>
    <div className={classes.ResResource}>
      {resBudget}
    </div>
    <ResCardButton
      resAdd={props.resAdd}
      resAdded={props.resAdded}
      resRemove={props.resRemove}
      disabled={props.disabled} />
  </div >);
}

export default resCardBack