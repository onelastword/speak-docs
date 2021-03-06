import React, { Component, PropTypes } from 'react';
import TabViewItem from './TabViewItem';
import styles from './TabView.css';

export default class TabView extends Component {
  static propTypes = {
    // Actions
    removeTab: PropTypes.func.isRequired,
    selectFile: PropTypes.func.isRequired,

    // State
    tabs: PropTypes.array.isRequired,
    currentFile: PropTypes.object.isRequired,
  };

  render() {
    const { tabs, removeTab, currentFile, selectFile } = this.props;

    return (
      <ul className={styles.navbar}>
        {tabs.map((file) => (
          <TabViewItem
            key={file.path} file={file} selectFile={selectFile}
            removeTab={removeTab} currentFile={currentFile}
          />
        ))}
      </ul>
    );
  }
}
