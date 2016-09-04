import React, { Component, PropTypes } from 'react';
import electron from 'electron';
import styles from './Home.css';

const { remote: { dialog } } = electron;

export default class Home extends Component {
  static propTypes = {
    chooseDirectory: PropTypes.func.isRequired
  };

  askForFolderPath() {
    const { chooseDirectory } = this.props;

    // Open folder
    const selection = dialog.showOpenDialog({ properties: ['openDirectory'] });
    if (selection) {
      const [directory] = selection;

      return chooseDirectory(directory);
    }
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Let's Get Started</h2>
          <button onClick={this.askForFolderPath.bind(this)}>
            Choose File
          </button>
        </div>
      </div>
    );
  }
}
