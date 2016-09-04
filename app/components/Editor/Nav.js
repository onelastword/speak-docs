import React, { Component, PropTypes } from 'react';
import styles from './Nav.css';

export default class Nav extends Component {
  static propTypes = {
    projectPath: PropTypes.string.isRequired,
    chooseDirectory: PropTypes.func.isRequired
  };

  render() {
    const { projectPath, chooseDirectory } = this.props;

    return (
      <div className={styles.container}>
        <p className={styles.projectPath}>{projectPath}</p>
        <button className={styles.button} onClick={chooseDirectory}>Change Project</button>
      </div>
    );
  }
}
