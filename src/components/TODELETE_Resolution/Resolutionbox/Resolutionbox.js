import classes from './Resolutionbox.css';
import React, { Component } from 'react';
import Button from '../../UI/Button/Button'

class resolutionbox extends Component {

  state = {
    flipped: false
  }

  render() {
    

    return (<div
      className={[classes.Resolutionbox, classes[this.props.status]].join(' ')}>
      <p style={{
        height: '40%'
      }}>{this.props.title}</p>
      <div style={{
        display: "flex",
        boxSizing: "border-box",
        height: '20%'
      }}>
        <Button btnType='Success' clicked={this.props.resMore}>DETAILS</Button>
        {!this.props.resAdded ?
          <Button btnType='Success'
            clicked={this.props.resAdd}
            state={this.props.resAdded}>ADD</Button> :
          <Button btnType='Danger'
            clicked={this.props.resRemove}
            state={this.props.resAdded}>REMOVE</Button>

        }

      </div>

    </div >);
  }



}

export default resolutionbox