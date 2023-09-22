import React from 'react'
import {HomeOutlined, ShopOutlined} from '@ant-design/icons';
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
    getItem("首页",  '/home', <HomeOutlined />),
    getItem("组件", 'subMenu', <ShopOutlined />, [
        getItem("button", '/home/components/button'),
        getItem("icon", '/home/components/icon'),
        getItem("divider", '/home/components/divider'),
        getItem("grid", '/home/components/grid'),
        getItem("layout", '/home/components/layout'),
        getItem("breadcrumb", '/home/components/breadcrumb'),
        getItem("dropdown", '/home/components/dropdown')
    ])
];
export default items
