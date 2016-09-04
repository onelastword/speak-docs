import { SELECT_FILE } from '../actions/current-file';

export default function counter(state = {}, action) {
  switch (action.type) {
    case SELECT_FILE:
      return action.file;
    default:
      return state;
  }
}
