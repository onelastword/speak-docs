import React, { Component, PropTypes } from 'react';
import Nav from './Editor/Nav';
import TreeView from './Editor/TreeView';
import style from './Editor.css';


export default class Editor extends Component {
  static propTypes = {
    // Actions
    chooseDirectory: PropTypes.func.isRequired,

    // State
    projectPath: PropTypes.string.isRequired,
    directoryTree: PropTypes.object.isRequired,
  };

  render() {
    const { chooseDirectory, projectPath, directoryTree } = this.props;
    return (
      <div className={style.fullscreen}>
        <Nav projectPath={projectPath} chooseDirectory={chooseDirectory} />
        <div className={style.editorPane}>
          <TreeView directoryTree={directoryTree} />
        </div>
      </div>
    );
  }
}
