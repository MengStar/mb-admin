import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import { Menu, Avatar, Spin } from 'antd';
import styles from './index.less';

export default class ChatMenu extends React.Component {
  static defaultProps = {
    hasMore: true,
    loadMore: () => {},
    loading: false,
    initData: [],
    handleOnclick: e => {
      console.log(e);
    },
  };
  static propTypes = {
    loadMore: PropTypes.func,
    initData: PropTypes.array,
    hasMore: PropTypes.bool,
    loading: PropTypes.bool,
    handleOnclick: PropTypes.func,
  };

  render() {
    const { initData, hasMore, loadMore, loading, handleOnclick } = this.props;

    return (
      <div className={styles['infinite-container']}>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          useWindow={false}
        >
          <Menu
            theme="light"
            mode="inline"
            onClick={handleOnclick}
            style={{ padding: '0', width: '100%' }}
          >
            {initData.map(item => (
              <Menu.Item key={item.id}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                {item.email}
              </Menu.Item>
            ))}
            {loading &&
              hasMore && (
                <div className={styles['loading-container']}>
                  <Spin />
                </div>
              )}
          </Menu>
        </InfiniteScroll>
      </div>
    );
  }
}
