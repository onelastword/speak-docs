export const ADD_TAB = 'ADD_TAB';
export const REMOVE_TAB = 'REMOVE_TAB';

export function addTab(file) {
  return {
    type: ADD_TAB,
    file
  };
}

export function removeTab(file) {
  return {
    type: REMOVE_TAB,
    file
  };
}
