import { SET_FILE_SAVED_CONTENTS } from '../actions/current-file';

export default function savedFile(state = '', action) {
  switch (action.type) {
    case SET_FILE_SAVED_CONTENTS:
      return action.data;
    default:
      return state;
  }
}
