import React from 'react'
import {AppstoreOutlined, UserOutlined} from '@ant-design/icons'
const menu = [
  {
    path: '/home/userManager',
    icon: <UserOutlined/>,
    title: '用户管理'
  },
  {
    path: '/home/menuManager',
    icon: <AppstoreOutlined/>,
    title: '菜单管理'
  },
  {
    path: "/home/articleManager",
    icon: <AppstoreOutlined/>,
    title: '文章管理'
  }
]
export default menu