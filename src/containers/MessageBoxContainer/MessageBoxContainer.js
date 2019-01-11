import { connect } from 'react-redux';
import MessageBox from '../../components/MessageBox/MessageBox';

const mapStateToProps = state => state.resoScaleReducer;

const MessageBoxContainer = connect(
  mapStateToProps,
)(MessageBox);

export default MessageBoxContainer;
