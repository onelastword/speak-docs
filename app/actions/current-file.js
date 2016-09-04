export const SELECT_FILE = 'SELECT_FILE';

export function selectFile(file) {
  return {
    type: SELECT_FILE,
    file
  };
}
