import React, { Component } from 'react';
import Resolutionbox from '../../components/Resolution/Resolutionbox/Resolutionbox';
import Resolutioncard from '../../components/Resolution/Resolutioncard/Resolutioncard';
import Modal from '../../components/UI/Modal/Modal';
import classes from './Resolutions.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorPopUp from '../../components/UI/ErrorPopUp/ErrorPopUp'


class Resolutions extends Component {

  state = {
    popUpResID: null,
    popUpRes: null,
    popUpResClicked: false,
    canBeAdded: true
  }

  componentDidMount = () => {
    this.props.onListinResources()
  }

  resMoreHandler = (resID) => {
    const selectedRes = this.props.rsltns[resID];

    this.setState({
      popUpResID: resID,
      popUpRes: selectedRes,
      popUpResClicked: true,
    })
  }


  resClosedHandler = () => {
    this.setState({
      ...this.state,
      popUpResClicked: false
    })
  }

  resCanBeAddedHandler = (res, budgetObject) => {

    const actualBudget = this.props.actualRsrcs;
    let canBeAddedActual = true

    Object.keys(actualBudget).map(rscKey => {
      if (actualBudget[rscKey] > budgetObject[rscKey] && canBeAddedActual) {
        canBeAddedActual = true
      } else {
        canBeAddedActual = false
      }
    })

    console.log(canBeAddedActual)
    if (canBeAddedActual) {
      this.props.onRemoveResolution(res, budgetObject)
    } else {
      this.setState({
        ...this.state,
        canBeAdded: false
      })
    }
  }

  render() {

    let reslist = <Spinner />;

    if (!this.props.resloading) {

      reslist = Object.keys(this.props.rsltns).map(res => {
        let budgetObject = {}
        const resPlus = this.props.rsltns[res].resourceAdd
        const resMinus = this.props.rsltns[res].resourceCost

        Object.keys(resPlus).map(rscKey =>
          budgetObject[rscKey] = resPlus[rscKey] - resMinus[rscKey]
        )


        return (<Resolutionbox
          key={res}
          resMore={() => this.resMoreHandler(res)}
          resAdd={() => this.resCanBeAddedHandler(res, budgetObject)}

          resRemove={() => this.props.onRemoveResolution(res, budgetObject)}
          title={this.props.rsltns[res].title}
          resAdded={this.props.rsltns[res].resAdded}
          status={this.props.rsltns[res].resAdded ? 'Added' : 'NotAdded'}
        />)
      })
    }

    let resolutioncard = null;
    if (this.state.popUpResClicked) {
      resolutioncard = (<Resolutioncard
        resValue={this.state.popUpRes.resourceAdd}
        resCost={this.state.popUpRes.resourceCost}
        title={this.state.popUpRes.title}
      />)
    }

    const errorMessage = <ErrorPopUp />


    return (<div className={classes.ResolContainer}>

      {reslist}

      <Modal show={this.state.popUpResClicked} modalClosed={this.resClosedHandler}>
        {resolutioncard}
      </Modal>
      <Modal show={!this.state.canBeAdded} modalClosed={this.resClosedHandler}>
        {errorMessage}
      </Modal>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    rsltns: state.resoScaleReducer.resolutions,
    resloading: state.resoScaleReducer.resloading,
    actualRsrcs: state.resoScaleReducer.resources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onListinResources: () => dispatch(actions.fetchResolutions()),
    onAddResolution: (resID, budgetObject) => dispatch(actions.addResolution(resID, budgetObject)),
    onRemoveResolution: (resID, budgetObject) => dispatch(actions.removeResolution(resID, budgetObject))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resolutions)