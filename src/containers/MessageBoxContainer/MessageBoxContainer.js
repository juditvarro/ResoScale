import { connect } from 'react-redux';
import MessageBox from '../../components/MessageBox/MessageBox';
import * as actions from '../../actions/index';

const mapStateToProps = state => state.resoScaleReducer;

const mapDispatchToProps = dispatch => ({
  onInitResources: dispatch(actions.initResources()),
})

const MessageBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBox);

export default MessageBoxContainer;
