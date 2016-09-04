import electron from 'electron';

const { remote: { dialog } } = electron;

export const CHOOSE_PROJECT_PATH = 'CHOOSE_PROJECT_PATH';

export function chooseDirectory() {
  // Open folder
  const selection = dialog.showOpenDialog({ properties: ['openDirectory'] });
  if (selection) {
    const [projectPath] = selection;

    return {
      type: CHOOSE_PROJECT_PATH,
      projectPath
    };
  }
}
