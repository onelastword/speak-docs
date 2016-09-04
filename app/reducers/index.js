import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import projectPath from './project-path';
import directoryTree from './directory-tree';

const rootReducer = combineReducers({
  directoryTree,
  projectPath,
  routing
});

export default rootReducer;
