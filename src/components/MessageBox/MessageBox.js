import React from 'react';
import classes from './MessageBox.css';
import Spinner from '../UI/Spinner/Spinner';

const MessageBox = ({ resources }) => {
  if (resources === null) {
    return null
  }
  else {
    let objArray = []
    
    Object.keys(resources).map(rscKey => {
      objArray.push({ rscKey: resources[rscKey] })
    }
      // objArray.push({ rscKey: resources.rscKey})
    )
    console.log(objArray)


    return (
      <div className={classes.MessageBox}>{resources.brain}</div>
    )
  }
}

export default MessageBox;
