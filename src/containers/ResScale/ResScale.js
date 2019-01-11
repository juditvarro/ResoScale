import React from 'react'
import classes from './ResScale.css'
import Resolutions from '../Resolutions/Resolutions'
import ResourceBarContainer from '../ResourceBar/ResourcesBarContainer';
import MessageBox from '../../components/MessageBox/MessageBox';

const resScale = props => {
  return (< div className={classes.ResScale} >
    <Resolutions />
    <div className={classes.BoxNBar}> 
    <MessageBox className={classes.Box}/>
    <ResourceBarContainer />
    </div>
  </div >)
}

export default resScale

