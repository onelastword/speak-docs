import electron from 'electron';

const { remote: { dialog } } = electron;

export const CHOOSE_PROJECT_PATH = 'CHOOSE_PROJECT_PATH';

export function changeDirectory(projectPath) {
  return {
    type: CHOOSE_PROJECT_PATH,
    projectPath
  };
}

export function chooseDirectory() {
  return (dispatch) => {
  // Open folder
    const selection = dialog.showOpenDialog({ properties: ['openDirectory'] });
    if (selection) {
      const [projectPath] = selection;

      dispatch(changeDirectory(projectPath));
    }
  };
}
