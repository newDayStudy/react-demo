import React from "react";
import {Breadcrumb} from 'antd'
function RcBreadcrumb(){
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>订单</Breadcrumb.Item>
                <Breadcrumb.Item>订单详情</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default RcBreadcrumb
