import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ResCardButton.css'

const resCardButton = (props) => {
  return (<div className={classes.ResCardButton}>
    {!props.resAdded ?
      <Button btnType='Success'
        clicked={props.resAdd}
        state={props.resAdded}>ADD</Button> :
      <Button btnType='Danger'
        clicked={props.resRemove}
        state={props.resAdded}>REMOVE</Button>
    }
  </div>)
}

export default resCardButton