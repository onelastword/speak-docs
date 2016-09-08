import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './TabViewItem.css';

export default class TabViewItem extends Component {
  static propTypes = {
    // Actions
    removeTab: PropTypes.func.isRequired,

    // State
    file: PropTypes.object.isRequired,
    currentFile: PropTypes.object.isRequired,
  };

  getIcon() {
    const { currentFile, file } = this.props;

    if (currentFile === file) {
      return (<FontAwesome name="microphone-slash" />);
    }

    return;
  }

  remove() {
    const { file, removeTab } = this.props;

    removeTab(file);
  }

  render() {
    const { file } = this.props;

    return (
      <li className={styles.item}>
        {this.getIcon()} {file.name}
        <button className={styles.removeButton} onClick={this.remove.bind(this)}>
          <FontAwesome name="times" fixedWidth />
        </button>
      </li>
    );
  }
}
