import React from 'react'
import classes from './ResScale.css'
import Resolutions from '../Resolutions/Resolutions'
import ResourceBarContainer from '../ResourceBar/ResourcesBarContainer';

const resScale = props => {
  return (< div className={classes.ResScale} >
    <Resolutions />
    <ResourceBarContainer />
  </div >)
}

export default resScale

