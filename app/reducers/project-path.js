import { CHOOSE_PROJECT_PATH } from '../actions/project-path';

export default function counter(state = '', action) {
  switch (action.type) {
    case CHOOSE_PROJECT_PATH:
      return action.projectPath;
    default:
      return state;
  }
}
