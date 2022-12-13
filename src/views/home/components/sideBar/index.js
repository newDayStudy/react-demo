import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import menu from './menu.data'
const { Sider } = Layout;
function SideBar(props) {
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([])
  const Location = useLocation()
  useEffect(() => {
    setDefaultSelectedKeys([Location.pathname])
  }, [Location])
  return (
    <Sider theme="light" trigger={null} collapsible collapsed={props.collapsed}>
        <Menu theme="light" mode="inline" selectedKeys={defaultSelectedKeys}>
          { menu.map((item) => {
            return  <Menu.Item key={item.path} icon={item.icon} >
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          })}
        </Menu>
      </Sider>
  )
}
export default SideBar
