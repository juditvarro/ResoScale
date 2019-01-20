import React, { Component } from 'react';
import ResCardFront from './ResCardFront/ResCardFront';
import ResCardBack from './ResCardBack/ResCardBack';
import classes from './ResolutionCard.css';


class ResolutionCardContainer extends Component {
  state = {
    isFlipped: false
  }

  handleClick = () => {
    console.log('i was clicked')
    this.setState(prevState => { return { isFlipped: !prevState.isFlipped } });
  }


  render() {
    return (
      <div className={classes.FlipContainer}>
        <div className={this.state.isFlipped ? classes.ReactCardFlipped : classes.ReactCardFlipper} isFlipped={this.state.isFlipped}>
          <div className={classes.ReactCardFront} key="front">
            <ResCardFront
              title={this.props.title}
              resMore={this.handleClick}
              resAdd={this.props.resAdd}
              resAdded={this.props.resAdded}
              resRemove={this.props.resRemove}
              status={this.props.status}
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
            />
          </div>
        </div>
      </div>

    )

  }
}



export default ResolutionCardContainer
