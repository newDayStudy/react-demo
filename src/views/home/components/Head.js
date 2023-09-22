import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons'
import {Layout, Menu, Dropdown, Button} from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout
const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '0 50px 0 25px'
}
function Head(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigator = useNavigate()
  const handleMenuClick = e => {
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
        <a onClick={() => props.setCollapsed(!props.collapsed)}>
            {
                props.collapsed ? <Button type="primary" icon={<MenuUnfoldOutlined/>}></Button> : <Button type="primary" icon={<MenuFoldOutlined/>}></Button>
            }
        </a>
        <Dropdown menu={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <UserOutlined style={{ marginRight: 10 }} />{user.username}
            </a>
        </Dropdown>
    </Header>
  )
}
export default Head
