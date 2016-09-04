import React, { Component, PropTypes } from 'react';
import styles from './TabViewItem.css';

export default class TabViewItem extends Component {
  static propTypes = {
    // Actions
    // addTab: PropTypes.func.isRequired,

    // State
    file: PropTypes.object.isRequired,
  };

  render() {
    const { file } = this.props;

    return (
      <li className={styles.item}>
        {file.name}
      </li>
    );
  }
}
