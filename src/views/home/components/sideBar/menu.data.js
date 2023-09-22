import React from 'react'
import {AppstoreOutlined, UserOutlined} from '@ant-design/icons';
function getItem(
    label,
    key,
    icon,
    children,
    type,
){
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items= [
    getItem("首页",  '/home', <UserOutlined/>),
    getItem('用户管理', '/home/userManager', <UserOutlined />),
    getItem('菜单管理', '/home/menuManager', <AppstoreOutlined />),
    getItem('文章管理', '/home/articleManager', <AppstoreOutlined />),
];
export default items
