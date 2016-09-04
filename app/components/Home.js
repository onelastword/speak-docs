import React, { Component, PropTypes } from 'react';
import electron from 'electron';
import styles from './Home.css';

export default class Home extends Component {
  static propTypes = {
    chooseDirectory: PropTypes.func.isRequired
  };

  render() {
    const { chooseDirectory } = this.props;
    return (
      <div>
        <div className={styles.container}>
          <h2>Let's Get Started</h2>
          <button onClick={chooseDirectory}>
            Choose File
          </button>
        </div>
      </div>
    );
  }
}
