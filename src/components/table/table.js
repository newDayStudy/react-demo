
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "antd";
import {columns} from './columns'
function RcTable() {
    const [pagination, setPagination] = useState({
        page: 1,
        pagesize: 10,
        total: 0
    })
    const [list, setList] = useState([])
    useEffect(async () => {
        const res = await axios({
            url: '/api/joke',
            method: 'GET',
            params: pagination
        })
        console.log(res)
        setList([...res.data.result])
    }, [pagination]);

    return (
        <Table
            size='small'
            rowKey="hashId"
            dataSource={list}
            columns={columns}
        >

        </Table>
    )
}

export  default RcTable
