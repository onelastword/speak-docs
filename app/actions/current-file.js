export const SELECT_FILE = 'SELECT_FILE';
export const SET_FILE_SAVED_CONTENTS = 'SET_FILE_SAVED_CONTENTS';

export function selectFile(file) {
  return {
    type: SELECT_FILE,
    file
  };
}

export function setFileSavedContents(data) {
  return {
    type: SET_FILE_SAVED_CONTENTS,
    data
  };
}
