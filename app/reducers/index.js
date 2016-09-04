import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import projectPath from './project-path';

const rootReducer = combineReducers({
  projectPath,
  routing
});

export default rootReducer;
