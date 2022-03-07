import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import menu from './menu.data'
import Logo from '../Logo'
const { Sider } = Layout;
function SideBar(props) {
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([])
  const Location = useLocation()
  useEffect(() => {
    setDefaultSelectedKeys([Location.pathname])
  }, [Location])
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Logo />
        <Menu theme="dark" mode="inline" selectedKeys={defaultSelectedKeys}>
          { menu.map((item, index) => {
            return  <Menu.Item key={item.path} icon={item.icon} >
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          })}
        </Menu>
      </Sider>
  )
}
export default SideBar