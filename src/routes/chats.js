import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Row, Col, Card, List, Avatar } from 'antd';
import { ChatMenu } from 'components/Chats';
import { Radar } from 'components/Charts';
import PageHeaderLayout from '../layouts/PageHeaderLayout';

import styles from './chats.less';

const initData = [
  {
    gender: 'male',
    name: { title: 'mr', first: 'etienne', last: 'french' },
    email: 'etienne.french@example.com',
    nat: 'CA',
  },
  {
    gender: 'female',
    name: { title: 'mrs', first: 'deborah', last: 'jensen' },
    email: 'deborah.jensen@example.com',
    nat: 'IE',
  },
  {
    gender: 'male',
    name: { title: 'monsieur', first: 'dorian', last: 'garcia' },
    email: 'dorian.garcia@example.com',
    nat: 'CH',
  },
  {
    gender: 'female',
    name: { title: 'miss', first: 'hanna', last: 'edwards' },
    email: 'hanna.edwards@example.com',
    nat: 'GB',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'dennis', last: 'lawson' },
    email: 'dennis.lawson@example.com',
    nat: 'US',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'etienne', last: 'french' },
    email: 'etienne.french@example.com',
    nat: 'CA',
  },
  {
    gender: 'female',
    name: { title: 'mrs', first: 'deborah', last: 'jensen' },
    email: 'deborah.jensen@example.com',
    nat: 'IE',
  },
  {
    gender: 'male',
    name: { title: 'monsieur', first: 'dorian', last: 'garcia' },
    email: 'dorian.garcia@example.com',
    nat: 'CH',
  },
  {
    gender: 'female',
    name: { title: 'miss', first: 'hanna', last: 'edwards' },
    email: 'hanna.edwards@example.com',
    nat: 'GB',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'dennis', last: 'lawson' },
    email: 'dennis.lawson@example.com',
    nat: 'US',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'etienne', last: 'french' },
    email: 'etienne.french@example.com',
    nat: 'CA',
  },
  {
    gender: 'female',
    name: { title: 'mrs', first: 'deborah', last: 'jensen' },
    email: 'deborah.jensen@example.com',
    nat: 'IE',
  },
  {
    gender: 'male',
    name: { title: 'monsieur', first: 'dorian', last: 'garcia' },
    email: 'dorian.garcia@example.com',
    nat: 'CH',
  },
  {
    gender: 'female',
    name: { title: 'miss', first: 'hanna', last: 'edwards' },
    email: 'hanna.edwards@example.com',
    nat: 'GB',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'dennis', last: 'lawson' },
    email: 'dennis.lawson@example.com',
    nat: 'US',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'etienne', last: 'french' },
    email: 'etienne.french@example.com',
    nat: 'CA',
  },
  {
    gender: 'female',
    name: { title: 'mrs', first: 'deborah', last: 'jensen' },
    email: 'deborah.jensen@example.com',
    nat: 'IE',
  },
  {
    gender: 'male',
    name: { title: 'monsieur', first: 'dorian', last: 'garcia' },
    email: 'dorian.garcia@example.com',
    nat: 'CH',
  },
  {
    gender: 'female',
    name: { title: 'miss', first: 'hanna', last: 'edwards' },
    email: 'hanna.edwards@example.com',
    nat: 'GB',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'dennis', last: 'lawson' },
    email: 'dennis.lawson@example.com',
    nat: 'US',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'etienne', last: 'french' },
    email: 'etienne.french@example.com',
    nat: 'CA',
  },
  {
    gender: 'female',
    name: { title: 'mrs', first: 'deborah', last: 'jensen' },
    email: 'deborah.jensen@example.com',
    nat: 'IE',
  },
  {
    gender: 'male',
    name: { title: 'monsieur', first: 'dorian', last: 'garcia' },
    email: 'dorian.garcia@example.com',
    nat: 'CH',
  },
  {
    gender: 'female',
    name: { title: 'miss', first: 'hanna', last: 'edwards' },
    email: 'hanna.edwards@example.com',
    nat: 'GB',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'dennis', last: 'lawson' },
    email: 'dennis.lawson@example.com',
    nat: 'US',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'etienne', last: 'french' },
    email: 'etienne.french@example.com',
    nat: 'CA',
  },
  {
    gender: 'female',
    name: { title: 'mrs', first: 'deborah', last: 'jensen' },
    email: 'deborah.jensen@example.com',
    nat: 'IE',
  },
  {
    gender: 'male',
    name: { title: 'monsieur', first: 'dorian', last: 'garcia' },
    email: 'dorian.garcia@example.com',
    nat: 'CH',
  },
  {
    gender: 'female',
    name: { title: 'miss', first: 'hanna', last: 'edwards' },
    email: 'hanna.edwards@example.com',
    nat: 'GB',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'dennis', last: 'lawson' },
    email: 'dennis.lawson@example.com',
    nat: 'US',
  },
];

@connect(({ project, activities, chart, loading }) => ({
  project,
  activities,
  chart,
  projectLoading: loading.effects['project/fetchNotice'],
  activitiesLoading: loading.effects['activities/fetchList'],
}))
export default class ChatsPage extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchNotice',
    });
    dispatch({
      type: 'activities/fetchList',
    });
    dispatch({
      type: 'chart/fetch',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  renderActivities() {
    const { activities: { list } } = this.props;
    return list.map(item => {
      const events = item.template.split(/@\{([^{}]*)\}/gi).map(key => {
        if (item[key]) {
          return (
            <a href={item[key].link} key={item[key].name}>
              {item[key].name}
            </a>
          );
        }
        return key;
      });
      return (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={item.user.avatar} />}
            title={
              <span>
                <a className={styles.username}>{item.user.name}</a>
                &nbsp;
                <span className={styles.event}>{events}</span>
              </span>
            }
            description={
              <span className={styles.datetime} title={item.updatedAt}>
                {moment(item.updatedAt).fromNow()}
              </span>
            }
          />
        </List.Item>
      );
    });
  }

  render() {
    const { activitiesLoading, chart: { radarData } } = this.props;

    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size="large"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>早安，曲丽丽，祝你开心每一天！</div>
          <div>交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
        </div>
      </div>
    );

    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>项目数</p>
          <p>56</p>
        </div>
        <div className={styles.statItem}>
          <p>团队内排名</p>
          <p>
            8<span> / 24</span>
          </p>
        </div>
        <div className={styles.statItem}>
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    );

    return (
      <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}>
        <Row gutter={24}>
          <Col xl={6} lg={8} md={10} sm={24} xs={24}>
            <Card
              bodyStyle={{ padding: 0 }}
              bordered={false}
              className={styles.activeCard}
              title="会话列表"
              loading={activitiesLoading}
            >
              <ChatMenu initData={initData} />
            </Card>
          </Col>
          <Col xl={18} lg={16} md={14} sm={0} xs={24}>
            <Card
              style={{ marginBottom: 24 }}
              bordered={false}
              title={<div>会话头部</div>}
              loading={radarData.length === 0}
            >
              <div className={styles.chart}>
                <Radar hasLegend height={343} data={radarData} />
              </div>
            </Card>
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}
