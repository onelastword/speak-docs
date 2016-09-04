import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './TreeViewItem.css';

export default class TreeViewItem extends Component {
  static propTypes = {
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
    const { directoryTree: { children } } = this.props;

    if (this.state.isOpen && children) {
      return (<ul>
        {children.map((file) => (<TreeViewItem key={file.path} directoryTree={file} />))}
      </ul>);
    }
  }

  choose() {
    const { directoryTree: { children } } = this.props;

    if (children) {
      this.expand();
    }
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
