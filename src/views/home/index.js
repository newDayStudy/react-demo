import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import SideBar from './components/sideBar'
const { Content } = Layout;
import Head from './components/Head'
function SiderDemo() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="outer-wrapper">
      <SideBar collapsed={collapsed} />
      <Layout className="outer-wrapper-container">
        <Head collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="outer-wrapper-content">
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
}

function Home() {
  return (
    <SiderDemo />
  )
}
export default Home