import { ADD_TAB } from '../actions/tabs';

export default function counter(state = [], action) {
  switch (action.type) {
    case ADD_TAB:
      return [...state, action.file];
    default:
      return state;
  }
}
