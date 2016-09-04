export const ADD_TAB = 'ADD_TAB';

export function addTab(file) {
  return {
    type: ADD_TAB,
    file
  };
}
