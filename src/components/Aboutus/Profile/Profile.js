import React from 'react';
import classes from './Profile.css';

const profile = props => {
  return (<div className={classes.Profile}>
    <div className={classes.ProfileUpper}>
      <img className={classes.ProfileImg} src={props.imgsrc} alt={props.alttext}></img>
      <div className={classes.TextCard}>
        <div className={classes.NameText}>{props.name}</div>
        <div className={classes.TitleText}>{props.title}</div>
        <div className={classes.TechText}>{props.tech}</div>
      </div>
    </div>
    <div className={classes.Intro}>{props.intro}</div>
  </div>)
}

export default profile