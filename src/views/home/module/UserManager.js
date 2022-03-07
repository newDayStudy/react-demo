
import React, { useState, useEffect } from 'react'
import { Table, Button, message } from 'antd'
import { getUserList as getUserListApi } from '@/api'
import '@/assets/userManager.less'
function UserManager() {
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    showTotal: (total, range) => {
      return range[0] + '-' + range[1] + ' 共' + total + '条'
    },
    showQuickJumper: true,
    showSizeChanger: true,
    total: 0,
    size: 'large',
    showLessItems: true
  })
  const getUserList = async () => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const res = await getUserListApi(user)
      if (res.status == 200 && res.data.code == 200) {
        setUserList(res.data.data)
        setPagination({ ...pagination, total: res.data.data.length })
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getUserList()
  }, [])
  const deleteUser = index => {
    userList.splice(index, 1)
    setUserList([...userList])
    const total = pagination.total - 1 || 0
    setPagination({ ...pagination, total: total })
    message.success('删除成功')
  }
  const editUser = record => {
    message.success('修改成功')
  }
  const columns = [
    {
      title: '编号',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '电话',
      dataIndex: 'telephone',
    },
    {
      title: '住址',
      dataIndex: 'address',
    },
    {
      title: "操作",
      dataIndex: 'action',
      align: 'center',
      render(text, record, index) {
        return (
          <span>
            <Button type="primary" style={{ marginRight: 10 }} onClick={() => editUser(record)}>修改</Button>
            <Button onClick={() => deleteUser(index)}>删除</Button>
          </span>
        )
      }
    }
  ]
  const onChange = (pagination) => {
    setPagination(pagination)
  }
  return (
    <div>
      <Button type="primary" style={{ marginBottom: 10 }}>新增</Button>
      <Table
        rowKey='id'
        dataSource={userList}
        columns={columns}
        pagination={pagination}
        onChange={onChange}
        loading={loading}
      />
    </div>

  )
}
export default UserManager