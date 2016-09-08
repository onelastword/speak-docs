import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './TabViewItem.css';

export default class TabViewItem extends Component {
  static propTypes = {
    // Actions
    removeTab: PropTypes.func.isRequired,
    selectFile: PropTypes.func.isRequired,

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

  remove(ev) {
    ev.stopPropagation();
    const { file, removeTab } = this.props;

    removeTab(file);
  }

  select() {
    const { file, selectFile } = this.props;

    selectFile(file);
  }

  render() {
    const { file } = this.props;

    return (
      <li className={styles.item} onClick={this.select.bind(this)}>
        {this.getIcon()} {file.name}
        <button className={styles.removeButton} onClick={this.remove.bind(this)}>
          <FontAwesome name="times" fixedWidth />
        </button>
      </li>
    );
  }
}
