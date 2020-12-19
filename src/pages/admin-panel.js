import React from 'react';
import MainPosts from '../components/admin-utils/main_posts';
import HomeWork from '../components/admin-utils/homework';
import { Tab, Tabs } from 'react-bootstrap';

export default class Admin extends React.Component {
  render() {
    return (
      <div className="page page-admin">
        <Tabs defaultActiveKey="addHome" transition={false} id="noanim-tab-example">
          <Tab eventKey="addHome" title="Добавить на главную">
            <MainPosts />
          </Tab>
          <Tab eventKey="addHW" title="Добавить ДЗ">
            <HomeWork />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
