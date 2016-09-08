import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Editor from '../components/Editor';
import * as ProjectPathActions from '../actions/project-path';
import * as TabsActions from '../actions/tabs';
import * as CurrentFileActions from '../actions/current-file';

function mapStateToProps(state) {
  return {
    tabs: state.tabs,
    savedFile: state.savedFile,
    currentFile: state.currentFile,
    projectPath: state.projectPath,
    directoryTree: state.directoryTree
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...ProjectPathActions, ...TabsActions, ...CurrentFileActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
