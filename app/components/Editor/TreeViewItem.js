import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './TreeViewItem.css';

export default class TreeViewItem extends Component {
  static propTypes = {
    // Actions
    addTab: PropTypes.func.isRequired,

    // State
    directoryTree: PropTypes.object.isRequired,
  };

  state = {
    isOpen: false
  };


  getIcon() {
    const { directoryTree: { children } } = this.props;

    if (children) {
      if (this.state.isOpen) {
        return (<FontAwesome className={styles.icon} name="caret-down" />);
      }

      return (<FontAwesome className={styles.icon} name="caret-right" />);
    }
  }

  childFiles() {
    const { addTab, directoryTree: { children } } = this.props;

    if (this.state.isOpen && children) {
      return (<ul>
        {children.map((file) => (
          <TreeViewItem key={file.path} directoryTree={file} addTab={addTab} />
        ))}
      </ul>);
    }
  }

  choose() {
    const { addTab, directoryTree, directoryTree: { children } } = this.props;

    if (children) {
      return this.expand();
    }

    return addTab(directoryTree);
  }

  expand() {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  }

  render() {
    const { directoryTree } = this.props;

    return (
      <li className={styles.item}>
        <p className={styles.title} onClick={this.choose.bind(this)}>
          {this.getIcon()}
          {directoryTree.name}
        </p>
        {this.childFiles()}
      </li>
    );
  }
}
