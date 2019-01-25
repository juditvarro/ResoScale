import { connect } from 'react-redux';
import React, { Component } from 'react';
import MessageBox from '../../components/MessageBox/MessageBox';
import * as actions from '../../actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';


class MessageBoxContainer extends Component {
  componentDidMount = () => {
    this.props.onFetchingInspirations()
  }

  render() {
    let text = ''
    let inspirationList = <Spinner />;

    if (!this.props.insloading) {
      let randomIndex = Math.ceil(Math.random() * 6)

      text = Object.keys(this.props.inspirations).filter(insKey => insKey === `MSG00${randomIndex}`)
        .map(key => {
          return this.props.inspirations[key].text
        })

      inspirationList = (<MessageBox text={text} />)
    }

    return (inspirationList)
  }
}

const mapStateToProps = state => {
  return {
    inspirations: state.resoScaleReducer.inspirations,
    insloading: state.resoScaleReducer.insloading
  }
}
  ;
const mapDispatchToProps = dispatch => {
  return {
    onFetchingInspirations: () => dispatch(actions.fetchInspirations())
  }

}


export default connect(
  mapStateToProps, mapDispatchToProps)(MessageBoxContainer);
