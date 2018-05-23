import React, { Component } from 'react';
import styles from './chats.less';

export default class ChatsPage extends Component {
  state = {};

  render() {
    return (
      <div className={styles.main}>
        <p className={styles.p}>ChatsPage</p>
      </div>
    );
  }
}
