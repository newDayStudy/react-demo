import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Card } from 'antd';
import SideBar from './components/sideBar'
const { Content } = Layout;
import Head from './components/Head'
import Tabs from './components/tabs'
function SiderDemo() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{height:'100%'}}>
        <SideBar collapsed={collapsed} />
        <Layout>
            <Head collapsed={collapsed} setCollapsed={setCollapsed} />
            <Tabs />
            <Content
                style={{
                    margin: 10,
                    background:'#fff',
                    padding: 20,
                    overflow: 'hidden auto'
                }}
            >
                <Outlet />
            </Content>
        </Layout>
    </Layout>
  );
}

function Home() {
  return (
    <SiderDemo />
  )
}
export default Home
