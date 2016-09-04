import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import projectPath from './project-path';
import directoryTree from './directory-tree';
import currentFile from './current-file';
import tabs from './tabs';

const rootReducer = combineReducers({
  directoryTree,
  projectPath,
  currentFile,
  tabs,
  routing
});

export default rootReducer;
