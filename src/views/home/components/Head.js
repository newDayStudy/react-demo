import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Button, Menu, Dropdown } from 'antd';
const { Header } = Layout
const menu = (
  <Menu>
    <Menu.Item>
      退出
    </Menu.Item>
  </Menu>
)
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}
function Head(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <Header style={headerStyle}>
      <Button type="primary" onClick={() => props.setCollapsed(!props.collapsed)}>
        {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <UserOutlined style={{ marginRight: 10 }} />{user.username}
        </a>
      </Dropdown>
    </Header>
  )
}
export default Head