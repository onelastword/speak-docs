import React, { Component, PropTypes } from 'react';
import styles from './Nav.css';

export default class Nav extends Component {
  static propTypes = {
    projectPath: PropTypes.string.isRequired,
  };

  render() {
    const { projectPath } = this.props;

    return (
      <div className={styles.container}>
        <p className={styles.projectPath}>{projectPath}</p>
      </div>
    );
  }
}
