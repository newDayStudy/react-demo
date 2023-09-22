import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import logo from '@/assets/logo.svg'
import items from './menu.data'
import '@/assets/sideBar.less'
import {useDispatch} from "react-redux";
import {add} from "@/redux/modules/tabs-store";
const { Sider } = Layout;
function SideBar(props) {
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([])
  const Location = useLocation();
  const router= useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    setDefaultSelectedKeys([Location.pathname]);
    if (Location.pathname) {
        const tabData = items.find(item => item.key == Location.pathname)
        if (tabData) {
            dispatch(add(tabData))
        }
    }
  }, [Location]);
  const onClick = (e) => {
      router(e.key)
      dispatch(add({
          label: e.domEvent.target.textContent,
          key: e.key
      }))
  };
  return (
      <div className="side">
          <div className="logo-wrap">
              <img src={logo} className="logo"/>
              {
                  !props.collapsed ? 'React-Admin' : ''
              }
          </div>
          <Sider theme="dark" trigger={null} collapsible collapsed={props.collapsed}>
              <Menu theme="dark" mode="inline" selectedKeys={defaultSelectedKeys} items={items} onClick={(e) => onClick(e)}></Menu>
          </Sider>
      </div>
  )
}
export default SideBar
