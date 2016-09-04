import { UPDATE_DIRECTORY_TREE } from '../actions/directory-tree';

export default function counter(state = {}, action) {
  switch (action.type) {
    case UPDATE_DIRECTORY_TREE:
      return action.directoryTree;
    default:
      return state;
  }
}
