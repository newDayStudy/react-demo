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
    getItem("自定义图表", '/home/components/custom',<BarsOutlined />),
    getItem("面包屑", '/home/components/breadcrumb',<BarsOutlined />),
    getItem("表格", '/home/components/table',<BarsOutlined />),
    getItem("3D", 'subMenu',<BarsOutlined />, [
        getItem("3D1", '/home/components/3d'),
        getItem("3D2", '/home/components/3d2'),
        getItem("3D3", '/home/components/3d3'),
        getItem("360全景", '/home/components/360'),
    ]),

];
export default items
