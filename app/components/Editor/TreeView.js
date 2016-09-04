import React, { Component, PropTypes } from 'react';
import TreeViewItem from './TreeViewItem';
import styles from './TreeView.css';

export default class TreeView extends Component {
  static propTypes = {
    // Actions
    addTab: PropTypes.func.isRequired,

    // State
    currentFile: PropTypes.object.isRequired,
    directoryTree: PropTypes.object.isRequired,
  };

  render() {
    const { addTab, currentFile, directoryTree } = this.props;

    return (
      <ul className={styles.sidebar}>
        <TreeViewItem directoryTree={directoryTree} currentFile={currentFile} addTab={addTab} />
      </ul>
    );
  }
}
