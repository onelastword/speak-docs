import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './TabViewItem.css';

export default class TabViewItem extends Component {
  static propTypes = {
    // Actions
    removeTab: PropTypes.func.isRequired,

    // State
    file: PropTypes.object.isRequired,
  };

  remove() {
    const { file, removeTab } = this.props;

    removeTab(file);
  }

  render() {
    const { file } = this.props;

    return (
      <li className={styles.item}>
        {file.name}
        <button className={styles.removeButton} onClick={this.remove.bind(this)}>
          <FontAwesome name="times" fixedWidth />
        </button>
      </li>
    );
  }
}
