// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions/index';
// import Resource from '../../components/Resource/Resource'

// class Resources extends Component {

//   componentDidMount = () => {
//     this.props.onInitResources()
//     console.log(this.props.resources)
//   }

//   render() {
//     console.log(this.props.resources)
//     console.log(this.props.error)
//     // const resources = this.props.resources.map((resKey) => {
//     //   return <div>resKey</div>
//     // })
//     return (<>
//       <div>Resources test</div>
//       {/* {resources} */}
//     </>)
//   }
// }

// const mapStateToProps = state => {
//   return {
//     resources: state.resoScaleReducer.resources,
//     error: state.resoScaleReducer.error
//   }
// }


// const mapDispatchToProps = dispatch => {
//   return {
//     onInitResources: () => dispatch(actions.initResources()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Resources)

