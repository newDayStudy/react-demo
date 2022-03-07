import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Button, Menu, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}
function Head(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  const handleMenuClick = e => {
    const navigator = useNavigate()
    if (e.key == 0) {
      navigator('/login')
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="0">
        退出
      </Menu.Item>
    </Menu>
  )
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