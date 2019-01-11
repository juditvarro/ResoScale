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
    canBeAdded: true,
    canBeRemoved: true,
    outRunnedRes: []
  }



  componentDidUpdate = () => {
    console.log('Comp DID UPDATE')

    Object.keys(this.props.rsltns).map(res => {
      let budgetObject = {}
      const resPlus = this.props.rsltns[res].resourceAdd
      const resMinus = this.props.rsltns[res].resourceCost

      Object.keys(resPlus).map(rscKey =>
        budgetObject[rscKey] = resPlus[rscKey] - resMinus[rscKey]
      )
      const actualBudget = this.props.actualRsrcs;
      // this.props.onResBudgetCheck(res, budgetObject, actualBudget)
    })
  }

  componentDidMount = () => {
    this.props.onListinResources()
    console.log('Comp DID MOUNT')
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
      // console.log('BUMM', rscKey, actualBudget[rscKey], budgetObject[rscKey], actualBudget[rscKey] + budgetObject[rscKey])
      if (actualBudget[rscKey] + budgetObject[rscKey] < 0) {
        outRunnedRes.push(rscKey)
      }
    })
    // console.log(outRunnedRes)


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
      // console.log('BUMMO', rscKey, actualBudget[rscKey], budgetObject[rscKey], actualBudget[rscKey] - budgetObject[rscKey])
      if (actualBudget[rscKey] - budgetObject[rscKey] < 0) {
        outRunnedRes.push(rscKey)
      }
    })
    // console.log(outRunnedRes)


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
        const resPlus = this.props.rsltns[res].resourceAdd
        const resMinus = this.props.rsltns[res].resourceCost

        Object.keys(resPlus).map(rscKey =>
          budgetObject[rscKey] = resPlus[rscKey] - resMinus[rscKey]
        )
        const actualBudget = this.props.actualRsrcs;
        console.log(actualBudget)
        // const outRunnedRes2 = []


        // Object.keys(actualBudget).map(rscKey => {
        //   console.log(actualBudget[rscKey] - budgetObject[rscKey] < 0)
        //   if (actualBudget[rscKey] + budgetObject[rscKey] < 1) {
        //     outRunnedRes2.push(rscKey)

        //   }
        // })

        let status = 'NotAdded'
        if (this.props.rsltns[res].resAdded) {
          status = 'Added'
        } else if (this.props.rsltns[res].resCritical) {
          status = 'Critical'
        } else if (this.props.rsltns[res].resCanBeAdded === false) {
          status = 'RunningOut'
        }

        return (<Resolutionbox
          key={res}
          resMore={() => this.resMoreHandler(res)}
          resAdd={() => this.resCanBeAddedHandler(res, budgetObject)}
          // resAdd={() => this.props.onAddResolution(res, budgetObject)}
          resRemove={() => this.resCanBeRemovedHandler(res, budgetObject)}
          // resRemove={() => this.props.onRemoveResolution(res, budgetObject)}
          title={this.props.rsltns[res].title}
          resAdded={this.props.rsltns[res].resAdded}
          status={status}
        // status={this.props.rsltns[res].resAdded ? 'Added' : 'NotAdded'}
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

    const errormsgtext = 'With this pick you are running out of ' + this.state.outRunnedRes.join(', ') + ' resources. You should consider prioritizing your resolutions'

    const errorMessage = <ErrorPopUp
      errormessage={errormsgtext} />


    return (<div className={classes.ResolContainer}>

      {reslist}

      <Modal show={this.state.popUpResClicked} modalClosed={this.resClosedHandler}>
        {resolutioncard}
      </Modal>
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
    onRemoveResolution: (resID, budgetObject) => dispatch(actions.removeResolution(resID, budgetObject)),
    onResBudgetCheck: (resID, budgetObject, actualObject) => dispatch(actions.resolutionBudgetFit(resID, budgetObject, actualObject))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Resolutions)