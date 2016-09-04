import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Editor from '../components/Editor';
import * as ProjectPathActions from '../actions/project-path';

function mapStateToProps(state) {
  return {
    projectPath: state.projectPath,
    directoryTree: state.directoryTree
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...ProjectPathActions, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
