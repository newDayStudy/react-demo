import React from "react";
import {Link} from 'react-router-dom'
import {Breadcrumb} from 'antd'
function RcBreadcrumb(){
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/home'>首页</Link>
                    </Breadcrumb.Item>
                <Breadcrumb.Item>订单</Breadcrumb.Item>
                <Breadcrumb.Item>订单详情</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default RcBreadcrumb
