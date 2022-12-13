import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Card } from 'antd';
import SideBar from './components/sideBar'
const { Content } = Layout;
import Head from './components/Head'
function SiderDemo() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{height:'100%'}}>
        <Head collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
            <SideBar collapsed={collapsed} />
            <Content>
                <Card>
                    <Outlet />
                </Card>
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
