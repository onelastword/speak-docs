import React, { Component, PropTypes } from 'react';
import Nav from './Editor/Nav';

export default class Editor extends Component {
  static propTypes = {
    // Actions
    chooseDirectory: PropTypes.func.isRequired,

    // State
    projectPath: PropTypes.string.isRequired,
  };

  render() {
    const { chooseDirectory, projectPath } = this.props;
    return (
      <div>
        <Nav projectPath={projectPath} chooseDirectory={chooseDirectory} />
        <h1>Editor</h1>
      </div>
    );
  }
}
