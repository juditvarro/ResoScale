import React, { Component } from 'react';
import Resolutionbox from '../../components/Resolution/Resolutionbox/Resolutionbox';
import Resolutioncard from '../../components/Resolution/Resolutioncard/Resolutioncard';
import Modal from '../../components/UI/Modal/Modal';
import classes from './Resolutions.css'
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';


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
    this.props.onListinResources()
    // console.log(this.state.resCost)
    // console.log(this.state.resValue)
  }

  resClickedHandler = (event) => {
    console.log('clicked', event.target)
    this.setState({
      ...this.state,
      resClicked: true,
      // resText: event.target.innerText,
    })
  }

  resClosedHandler = () => {
    this.setState({ resClicked: false })
  }

  render() {

    let reslist = <Spinner />;

    if (!this.props.resloading) {
      console.log(this.props.rsltns)
      reslist = this.props.rsltns.map(res => {
        return (<Resolutionbox
          key={res.id}
          clicked={() => this.resClickedHandler(res.id)}
          title={res.title} />)
      })
    }

    // const resolutioncard = (<Resolutioncard
    //   resValue={this.state.resValue}
    //   resCost={this.state.resCost}
    //   title={this.state.resText} />)

    return (<div className={classes.ResolContainer}>
      {reslist}
      {/* <Resolutionbox clicked={this.resClickedHandler} title={this.state.title} /> */}
      {/* <Modal show={this.state.resClicked} modalClosed={this.resClosedHandler}>
        {resolutioncard}
      </Modal> */}
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    rsltns: state.resoScaleReducer.resolutions,
    resloading: state.resoScaleReducer.resloading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onListinResources: () => dispatch(actions.fetchResolutions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resolutions)