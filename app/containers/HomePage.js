import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as ProjectPathActions from '../actions/project-path';

function mapStateToProps(state) {
  return {
    projectPath: state.projectPath
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectPathActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
