import React, { Component, PropTypes } from 'react';
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
          <button className={styles.button} onClick={chooseDirectory}>
            Choose Project
          </button>
        </div>
      </div>
    );
  }
}
