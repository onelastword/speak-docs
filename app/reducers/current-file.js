import { SELECT_FILE, CLEAR_FILE } from '../actions/current-file';

export default function counter(state = {}, action) {
  switch (action.type) {
    case SELECT_FILE:
      return action.file;
    case CLEAR_FILE:
      return {};
    default:
      return state;
  }
}
