import React from 'react';
import classes from './IconExplain.css';
import energyicon from './../../../assets/resicons/energy.svg'
import brainicon from './../../../assets/resicons/brain.svg';
import freetimeicon from './../../../assets/resicons/freetime.svg';
import healthicon from './../../../assets/resicons/health.svg';
import moneyicon from './../../../assets/resicons/money.svg';
import socialvalueicon from './../../../assets/resicons/socialvalue.svg';
import willpowericon from './../../../assets/resicons/willpower.svg';

const iconExplain = (props) => {
  return (<div className={classes.IconExplainContainer}>

    <ul className={classes.Iconlist}>
      <div className={classes.SectionLabel}> RESOURCE ICONS</div>
      <li className={classes.IconlistItem}><img src={brainicon} alt='Brain capacity'></img><div>Brain</div></li>
      <li className={classes.IconlistItem}><img src={energyicon} alt='Energy level'></img><div>Energy</div></li>
      <li className={classes.IconlistItem}><img src={freetimeicon} alt='Available freetime'></img><div>Freetime</div></li>
      <li className={classes.IconlistItem}><img src={healthicon} alt='Health level'></img><div>Health</div></li>
      <li className={classes.IconlistItem}><img src={moneyicon} alt='Financial resources'></img><div>Money</div></li>
      <li className={classes.IconlistItem}><img src={socialvalueicon} alt='Social connectedness'></img><div>Social value</div></li>
      <li className={classes.IconlistItem}><img src={willpowericon} alt='Willpower level'></img><div>Willpower</div></li>
    </ul>

  </div>)
}

export default iconExplain