import { SELECT_FILE, selectFile, setFileSavedContents } from '../actions/current-file';
import { ADD_TAB } from '../actions/tabs';
import fs from 'fs';


const projectPath = store => next => action => {
  const result = next(action);

  if (action.type === ADD_TAB) {
    store.dispatch(selectFile(action.file));
  }

  if (action.type === SELECT_FILE) {
    fs.readFile(action.file.path, 'utf8', (err, data) => {
      store.dispatch(setFileSavedContents(data));
    });
  }

  return result;
};

export default projectPath;
