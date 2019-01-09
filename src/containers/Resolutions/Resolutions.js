import React, { Component } from 'react';
import Resolutionbox from '../../components/Resolution/Resolutionbox/Resolutionbox';
import Resolutioncard from '../../components/Resolution/Resolutioncard/Resolutioncard';
import Modal from '../../components/UI/Modal/Modal'

class Resolutions extends Component {

  state = {
    resClicked: false,
    resText: '',
    resCost: {
      Energy: 2,
      Freetime: 3,
      Money: 1,
      Brain: 4,
      Health: 0,
      Socialvalue: 2,
      Willpower: 4
    },
    resValue: {
      Energy: 4,
      Freetime: 1,
      Money: 2,
      Brain: 5,
      Health: 4,
      Socialvalue: 1,
      Willpower: 2,
    },
    title: "I will do more sport"
  }

  componentDidMount = () => {
    // console.log(this.state.resCost)
    // console.log(this.state.resValue)
  }

  resClickedHandler = (event) => {
    console.log('clicked', event.target.innerText)
    this.setState({
      ...this.state,
      resClicked: true,
      resText: event.target.innerText,
    })
  }

  resClosedHandler = () => {
    this.setState({ resClicked: false })
  }

  render() {

    const resolutioncard = (<Resolutioncard
      resValue={this.state.resValue}
      resCost={this.state.resCost}
      title={this.state.resText} />)

    return (<>
      <Resolutionbox clicked={this.resClickedHandler} title={this.state.title} />
      <Modal show={this.state.resClicked} modalClosed={this.resClosedHandler}>
        {resolutioncard}
      </Modal>
    </>)
  }
}

export default Resolutions