import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import { List, Avatar, Spin } from 'antd';

import styles from './index.less';

export default class ChatList extends React.Component {
  static defaultProps = {
    hasMore: true,
    loadMore: () => {},
    loading: false,
    initData: [],
  };
  static propTypes = {
    loadMore: PropTypes.func,
    initData: PropTypes.array,
    hasMore: PropTypes.bool,
    loading: PropTypes.bool,
  };

  render() {
    const { initData, hasMore, loadMore, loading } = this.props;

    return (
      <div className={styles['infinite-container']}>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          useWindow={false}
        >
          <List
            dataSource={initData}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
              </List.Item>
            )}
          >
            {loading &&
              hasMore && (
                <div className={styles['loading-container']}>
                  <Spin />
                </div>
              )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}
