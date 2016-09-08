import {
  SET_FILE_SAVED_CONTENTS, SET_FILE_EDITED_CONTENTS, CLEAR_FILE
} from '../actions/current-file';

export default function savedFile(state = '', action) {
  switch (action.type) {
    case SET_FILE_SAVED_CONTENTS:
      return action.data;
    case SET_FILE_EDITED_CONTENTS:
      return action.data;
    case CLEAR_FILE:
      return '';
    default:
      return state;
  }
}
