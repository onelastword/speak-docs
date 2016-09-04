import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import projectPath from './project-path';
import directoryTree from './directory-tree';
import currentFile from './current-file';
import savedFile from './saved-file';
import tabs from './tabs';

const rootReducer = combineReducers({
  directoryTree,
  projectPath,
  currentFile,
  savedFile,
  routing,
  tabs,
});

export default rootReducer;
