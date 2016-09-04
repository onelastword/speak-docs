import { push } from 'react-router-redux';
import { CHOOSE_PROJECT_PATH } from '../actions/project-path';
import { loadDirectoryTree } from '../actions/directory-tree';

const projectPath = store => next => action => {
  const result = next(action);
  const nextState = store.getState();
  const { pathname } = nextState.routing.locationBeforeTransitions;

  if (action.type === CHOOSE_PROJECT_PATH) {
    store.dispatch(push('/editor'));
    store.dispatch(loadDirectoryTree());
  } else if (nextState.projectPath === '' && pathname !== '/') {
    store.dispatch(push('/'));
  }

  return result;
};

export default projectPath;
