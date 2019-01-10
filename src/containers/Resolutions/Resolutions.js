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
    popUpResID: null,
    popUpResTitle: null,
    popUpResresValue: null,
    popUpResresCost: null,
    popUpResClicked: false,


  }

  componentDidMount = () => {
    this.props.onListinResources()
    // console.log(this.state.resCost)
    // console.log(this.state.resValue)
  }

  resMoreHandler = (resID) => {
    console.log('clickedMore', resID)
    const selectedRes = this.props.rsltns.filter(res => res.id === resID)[0];
    console.log(selectedRes)
    this.setState({
      popUpResID: resID,
      popUpRes: selectedRes,
      popUpResClicked: true,
    })


  }

  resAddRemoveHandler = (resID) => {
    console.log('clickedADDMORE', resID)
  }

  resClosedHandler = () => {
    this.setState({ popUpResClicked: false })
  }

  render() {

    let reslist = <Spinner />;

    if (!this.props.resloading) {
      // console.log(this.props.rsltns)
      reslist = this.props.rsltns.map(res => {
        return (<Resolutionbox
          key={res.id}
          resMore={() => this.resMoreHandler(res.id)}
          resAddRemove={() => this.resAddRemoveHandler(res.id)}
          title={res.title}
          state={res.resClicked} />)
      })
    }

    // console.log(this.state.popUpResresValue)
    let resolutioncard = null;
    if (this.state.popUpResClicked) {
      resolutioncard = (<Resolutioncard
        resValue={this.state.popUpRes.resourceAdd}
        resCost={this.state.popUpRes.resourceCost}
        title={this.state.popUpRes.title}
      />)
      console.log(resolutioncard)
    }


    return (<div className={classes.ResolContainer}>

      {reslist}

      <Modal show={this.state.popUpResClicked} modalClosed={this.resClosedHandler}>
        {resolutioncard}
      </Modal>
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