import React from 'react'
import {Button} from 'antd'

export const columns = [
    {
        key: 'hashId',
        dataIndex: 'hashId',
        title: 'ID'
    },
    {
        key: 'context',
        dataIndex: 'content',
        title: '内容'
    },
    {
        key: 'action',
        dataIndex: "action",
        title: '操作',
        render: () => (
            <>
                <Button type='primary'>打印</Button>
            </>
        )
    }
]
