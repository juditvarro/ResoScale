import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ResourceBarNew from '../../components/Bar/ResourceBarNew'

const mapStateToProps = state => state.resoScaleReducer;

const mapDispatchToProps = dispatch => ({
  // onInitResources: dispatch(actions.initResources()),
})

const ResourceBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResourceBarNew);

export default ResourceBarContainer;
