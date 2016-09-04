import { ADD_TAB } from '../actions/tabs';
import { selectFile } from '../actions/current-file';

const projectPath = store => next => action => {
  const result = next(action);

  if (action.type === ADD_TAB) {
    store.dispatch(selectFile(action.file));
  }

  return result;
};

export default projectPath;
