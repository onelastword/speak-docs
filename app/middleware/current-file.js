import fs from 'fs';

import { SELECT_FILE, clearFile, selectFile, setFileSavedContents } from '../actions/current-file';
import { ADD_TAB, REMOVE_TAB } from '../actions/tabs';


const projectPath = store => next => action => {
  const result = next(action);
  const { tabs } = store.getState();

  if (action.type === ADD_TAB) {
    store.dispatch(selectFile(action.file));
  }

  if (action.type === SELECT_FILE) {
    fs.readFile(action.file.path, 'utf8', (err, data) => {
      store.dispatch(setFileSavedContents(data));
    });
  }

  if (action.type === REMOVE_TAB && tabs.length === 0) {
    store.dispatch(clearFile());
  }

  if (action.type === REMOVE_TAB && tabs.length !== 0) {
    store.dispatch(selectFile(tabs[tabs.length - 1]));
  }

  return result;
};

export default projectPath;
