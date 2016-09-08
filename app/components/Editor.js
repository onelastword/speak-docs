import React, { Component, PropTypes } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/handlebars/handlebars';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/sass/sass';

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
    selectFile: PropTypes.func.isRequired,

    // State
    tabs: PropTypes.array.isRequired,
    savedFile: PropTypes.string.isRequired,
    projectPath: PropTypes.string.isRequired,
    currentFile: PropTypes.object.isRequired,
    directoryTree: PropTypes.object.isRequired,
  };

  render() {
    const {
      chooseDirectory, addTab, removeTab, selectFile,
      tabs, savedFile, projectPath, currentFile, directoryTree,
    } = this.props;

    const codeMirrorOptions = {
      lineWrapping: true,
      lineNumbers: true,
      mode: 'gfm',
      viewportMargin: 300,
      theme: 'ambiance',
      tabSize: 2,
      indentWithTabs: false,
    };

    return (
      <div className={style.fullscreen}>
        <Nav projectPath={projectPath} chooseDirectory={chooseDirectory} />
        <div className={style.editorPane}>
          <TreeView directoryTree={directoryTree} currentFile={currentFile} addTab={addTab} />
          <div className={style.tabContainer}>
            <TabView
              tabs={tabs} removeTab={removeTab}
              selectFile={selectFile} currentFile={currentFile}
            />
            <div className={style.editorPane}>
              <CodeMirror
                className={style.editorContainer} value={savedFile}
                options={codeMirrorOptions}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
