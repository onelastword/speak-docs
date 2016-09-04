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

    // State
    tabs: PropTypes.array.isRequired,
    projectPath: PropTypes.string.isRequired,
    directoryTree: PropTypes.object.isRequired,
  };

  render() {
    const {
      chooseDirectory, addTab,
      projectPath, directoryTree, tabs,
    } = this.props;

    return (
      <div className={style.fullscreen}>
        <Nav projectPath={projectPath} chooseDirectory={chooseDirectory} />
        <div className={style.editorPane}>
          <TreeView directoryTree={directoryTree} addTab={addTab} />
          <div className={style.tabContainer}>
            <TabView tabs={tabs} />
          </div>
        </div>
      </div>
    );
  }
}
