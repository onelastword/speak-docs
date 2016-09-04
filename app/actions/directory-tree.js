import dirTree from 'directory-tree';

export const UPDATE_DIRECTORY_TREE = 'UPDATE_DIRECTORY_TREE';

export function updateDirectoryTree(directoryTree) {
  return {
    type: UPDATE_DIRECTORY_TREE,
    directoryTree
  };
}

export function loadDirectoryTree() {
  return (dispatch, getState) => {
    const { projectPath } = getState();

    const directoryTree = dirTree(projectPath, ['.md']);

    dispatch(updateDirectoryTree(directoryTree));
  };
}
