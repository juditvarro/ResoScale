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
      <li className={classes.IconlistItem}><img src={brainicon}></img><div>Brain</div></li>
      <li className={classes.IconlistItem}><img src={energyicon}></img><div>Energy</div></li>
      <li className={classes.IconlistItem}><img src={freetimeicon}></img><div>Freetime</div></li>
      <li className={classes.IconlistItem}><img src={healthicon}></img><div>Health</div></li>
      <li className={classes.IconlistItem}><img src={moneyicon}></img><div>Money</div></li>
      <li className={classes.IconlistItem}><img src={socialvalueicon}></img><div>Social value</div></li>
      <li className={classes.IconlistItem}><img src={willpowericon}></img><div>Willpower</div></li>
    </ul>

  </div>)
}

export default iconExplain