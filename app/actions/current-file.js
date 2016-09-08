export const SELECT_FILE = 'SELECT_FILE';
export const SET_FILE_SAVED_CONTENTS = 'SET_FILE_SAVED_CONTENTS';
export const CLEAR_FILE = 'CLEAR_FILE';

export function selectFile(file) {
  return {
    type: SELECT_FILE,
    file
  };
}

export function clearFile() {
  console.log('clear');

  return {
    type: CLEAR_FILE,
  };
}

export function setFileSavedContents(data) {
  return {
    type: SET_FILE_SAVED_CONTENTS,
    data
  };
}
