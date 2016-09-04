import React, { Component, PropTypes } from 'react';
import Nav from './Editor/Nav';
import TreeView from './Editor/TreeView';
import TabView from './Editor/TabView';
import style from './Editor.css';


export default class Editor extends Component {
  static propTypes = {
    // Actions
    chooseDirectory: PropTypes.func.isRequired,
    addTab: PropTypes.func.isRequired,
    removeTab: PropTypes.func.isRequired,

    // State
    tabs: PropTypes.array.isRequired,
    savedFile: PropTypes.string.isRequired,
    projectPath: PropTypes.string.isRequired,
    currentFile: PropTypes.object.isRequired,
    directoryTree: PropTypes.object.isRequired,
  };

  render() {
    const {
      chooseDirectory, addTab, removeTab,
      tabs, savedFile, projectPath, currentFile, directoryTree,
    } = this.props;

    return (
      <div className={style.fullscreen}>
        <Nav projectPath={projectPath} chooseDirectory={chooseDirectory} />
        <div className={style.editorPane}>
          <TreeView directoryTree={directoryTree} currentFile={currentFile} addTab={addTab} />
          <div className={style.tabContainer}>
            <TabView tabs={tabs} removeTab={removeTab} />
            <code><pre>{savedFile}</pre></code>
          </div>
        </div>
      </div>
    );
  }
}
