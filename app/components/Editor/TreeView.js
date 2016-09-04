import React, { Component, PropTypes } from 'react';
import TreeViewItem from './TreeViewItem';
import styles from './TreeView.css';

export default class TreeView extends Component {
  static propTypes = {
    directoryTree: PropTypes.object.isRequired,
  };

  render() {
    const { directoryTree } = this.props;

    return (
      <ul className={styles.sidebar}>
        <TreeViewItem directoryTree={directoryTree} />
      </ul>
    );
  }
}
