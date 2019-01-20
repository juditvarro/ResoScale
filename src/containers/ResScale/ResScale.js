import React from 'react'
import classes from './ResScale.css'
import Resolutions from '../Resolutions/Resolutions'
import ResourceBarContainer from '../ResourceBar/ResourcesBarContainer';
import MessageBoxContainer from '../MessageBoxContainer/MessageBoxContainer';
import IconExplain from '../../components/ResolutionCard/IconExplain/IconExplain'

const resScale = props => {
  return (< div className={classes.ResScale} >
    <div className={classes.ResWrapper}>
      <IconExplain />
      <Resolutions />
    </div>



    <div className={classes.BoxNBar}>
      <MessageBoxContainer className={classes.Box} />
      <ResourceBarContainer />
    </div>
  </div >)
}

export default resScale

