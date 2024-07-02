import React from 'react';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";
const { Header } = Layout;

// const items1 = ['Home'].map((key) => ({
//   key,
//   label: <a href={key === 'Home' ? '/':key}  rel="noopener noreferrer">{key}</a>,
// }));
const items = [{
  key: 'Home',
  label: <a href="/movie">Home</a>,
}];

const NavBar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
          items={items}
          style={{
            flex: 1,
            minWidth: '0',
          }}
        ></Menu>
      </Header>
    </Layout>
  );
};
export default NavBar;