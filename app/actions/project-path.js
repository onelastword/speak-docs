export const CHOOSE_PROJECT_PATH = 'CHOOSE_PROJECT_PATH';

export function chooseDirectory(projectPath) {
  return {
    type: CHOOSE_PROJECT_PATH,
    projectPath
  };
}
