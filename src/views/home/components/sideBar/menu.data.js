import React from 'react'
import {HomeOutlined, BarsOutlined} from '@ant-design/icons';
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
    getItem("笑话", '/home/components/layout',<BarsOutlined />),
    getItem("书籍", '/home/components/book',<BarsOutlined />),
    getItem("车品牌", '/home/components/car',<BarsOutlined />),
];
export default items
