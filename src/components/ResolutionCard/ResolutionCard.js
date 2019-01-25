import React, { Component } from 'react';
import ResCardFront from './ResCardFront/ResCardFront';
import ResCardBack from './ResCardBack/ResCardBack';
import classes from './ResolutionCard.css';


class ResolutionCardContainer extends Component {
  state = {
    isflipped: false
  }

  handleClick = () => {
    console.log('i was clicked')
    this.setState(prevState => { return { isflipped: !prevState.isflipped } });
  }


  render() {
    return (
      <div className={classes.FlipContainer}>
        <div className={this.state.isflipped ? classes.ReactCardFlipped : classes.ReactCardFlipper}>
          <div className={classes.ReactCardFront} key="front">
            <ResCardFront
              title={this.props.title}
              resMore={this.handleClick}
              resAdd={this.props.resAdd}
              resAdded={this.props.resAdded}
              resRemove={this.props.resRemove}
              status={this.props.status}
              disabled={this.props.disabled}
            />
          </div>
          <div className={classes.ReactCardBack} key="back">
            <ResCardBack
              title={this.props.title}
              resMore={this.handleClick}
              resBudget={this.props.resBudget}
              resAdd={this.props.resAdd}
              resAdded={this.props.resAdded}
              resRemove={this.props.resRemove}
              status={this.props.status}
              disabled={this.props.disabled}
            />
          </div>
        </div>
      </div >

    )

  }
}



export default ResolutionCardContainer
