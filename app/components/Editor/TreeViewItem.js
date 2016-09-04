import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './TreeViewItem.css';

export default class TreeViewItem extends Component {
  static propTypes = {
    // Actions
    addTab: PropTypes.func.isRequired,

    // State
    currentFile: PropTypes.object.isRequired,
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

  getItemStyle() {
    const { currentFile, directoryTree } = this.props;

    if (currentFile === directoryTree) {
      return `${styles.item} ${styles.itemActive}`;
    }

    return styles.item;
  }

  childFiles() {
    const { addTab, currentFile, directoryTree: { children } } = this.props;

    if (this.state.isOpen && children) {
      return (<ul>
        {children.map((file) => (
          <TreeViewItem
            key={file.path} currentFile={currentFile}
            directoryTree={file} addTab={addTab}
          />
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
      <li className={this.getItemStyle()}>
        <p className={styles.title} onClick={this.choose.bind(this)}>
          <span>{this.getIcon()}
          {directoryTree.name}</span>
        </p>
        {this.childFiles()}
      </li>
    );
  }
}
