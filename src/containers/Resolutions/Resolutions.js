import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import classes from './Resolutions.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorPopUp from '../../components/UI/ErrorPopUp/ErrorPopUp';
import ResolutionCard from '../../components/ResolutionCard/ResolutionCard'

class Resolutions extends Component {

  state = {
    canBeAdded: true,
    canBeRemoved: true,
    outRunnedRes: []
  }

  componentDidMount = () => {
    this.props.onListinResources()
  }


  errorClosedHandler = () => {
    this.setState({
      ...this.state,
      canBeAdded: true
    })
  }

  resCanBeAddedHandler = (res, budgetObject) => {

    const actualBudget = this.props.actualRsrcs;

    const outRunnedRes = []

    Object.keys(actualBudget).map(rscKey => {
      if (actualBudget[rscKey] + budgetObject[rscKey] < 0) {
        outRunnedRes.push(rscKey)
      }
    })


    if (outRunnedRes.length === 0) {
      this.props.onAddResolution(res, budgetObject)
    } else {
      this.setState({
        ...this.state,
        canBeAdded: false,
        outRunnedRes: outRunnedRes
      })
    }
  }

  resCanBeRemovedHandler = (res, budgetObject) => {

    const actualBudget = this.props.actualRsrcs;
    const outRunnedRes = []

    Object.keys(actualBudget).map(rscKey => {
      if (actualBudget[rscKey] - budgetObject[rscKey] < 0) {
        outRunnedRes.push(rscKey)
      }
    })


    if (outRunnedRes.length === 0) {
      this.props.onRemoveResolution(res, budgetObject)
    } else {
      this.setState({
        ...this.state,
        canBeRemoved: false,
        outRunnedRes: outRunnedRes
      })
    }
  }

  render() {

    let reslist = <Spinner />;

    if (!this.props.resloading) {

      reslist = Object.keys(this.props.rsltns).map(res => {
        let budgetObject = {}
        const resBudget = this.props.rsltns[res].resourceContribution

        Object.keys(resBudget).map(rscKey =>
          budgetObject[rscKey] = resBudget[rscKey]
        )

        return (

          <ResolutionCard
            key={res}
            resMore={() => this.resMoreHandler(res)}
            resAdd={() => this.resCanBeAddedHandler(res, budgetObject)}
            resRemove={() => this.resCanBeRemovedHandler(res, budgetObject)}
            title={this.props.rsltns[res].title}
            resAdded={this.props.rsltns[res].resAdded}
            status={this.props.rsltns[res].resAdded ? 'Added' : 'NotAdded'}
            resBudget={resBudget}
          />)
      })
    }

    const errormsgtext = 'With this pick you are running out of ' + this.state.outRunnedRes.join(', ') + ' resources. You should consider prioritizing your resolutions'

    const errorMessage = <ErrorPopUp
      errormessage={errormsgtext} />


    return (<div className={classes.ResolContainer}>

      {reslist}

      <Modal show={!this.state.canBeAdded || !this.state.canBeRemoved} modalClosed={this.errorClosedHandler}>
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