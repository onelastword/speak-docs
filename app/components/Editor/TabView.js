import React, { Component, PropTypes } from 'react';
import TabViewItem from './TabViewItem';
import styles from './TabView.css';

export default class TabView extends Component {
  static propTypes = {
    // Actions
    removeTab: PropTypes.func.isRequired,

    // State
    tabs: PropTypes.array.isRequired,
  };

  render() {
    const { tabs, removeTab } = this.props;

    return (
      <ul className={styles.navbar}>
        {tabs.map((file) => (
          <TabViewItem key={file.path} file={file} removeTab={removeTab} />
        ))}
      </ul>
    );
  }
}
