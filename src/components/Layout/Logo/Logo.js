import React from 'react';
import classes from './Logo.css'
import resoLogo from '../../../assets/resologo.png'


const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={resoLogo} alt='ResolutionScale'></img>
  </div>

)
export default logo