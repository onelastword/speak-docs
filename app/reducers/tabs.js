import { ADD_TAB, REMOVE_TAB } from '../actions/tabs';

export default function counter(state = [], action) {
  switch (action.type) {
    case ADD_TAB:
      if (state.indexOf(action.file) === -1) {
        return [...state, action.file];
      }

      return state;
    case REMOVE_TAB:
      return state.filter((file) => file !== action.file);
    default:
      return state;
  }
}
