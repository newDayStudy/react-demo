
import React, { useState, useEffect } from 'react'
import { Table, Button, message } from 'antd'
import { getUserList as getUserListApi, deleteUser as deleteUserApi } from '@/api'
import '@/assets/userManager.less'
import UserModal from './userManager/userModal'
function UserManager() {
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(false)
  const [rowData, setRowData] = useState({})
  const [total, setTotal] = useState(0)
  const [paginationProps, setPaginationProps] = useState({
    current: 1,
    pageSize: 2,
  })
  const [visible, setVisible] = useState(false)
  const getUserList = async () => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const res = await getUserListApi({
        ...user,
        pageNo: paginationProps.current,
        pageSize: paginationProps.pageSize
      })
      if (res.status == 200 && res.data.code == 200) {
        setUserList(res.data.data.data)
        setTotal(res.data.data.total)
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(async () => {
    await getUserList()
  }, [paginationProps])
  const deleteUser = async record => {
    const res = await deleteUserApi({ id: record.id })
    if (res.status == 200 && res.data.code == 200) {
      message.success(res.data.message)
      await getUserList()
    }
  }
  const addUser = async () => {
    setRowData({})
    setVisible(true)
  }
  const editUser = async record => {
    setRowData(record)
    setVisible(true)
  }
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'username'
    },
    {
      title: '用户身份',
      dataIndex: 'name'
    },
    {
      title: "操作",
      dataIndex: 'action',
      align: 'center',
      render(text, record, index) {
        return (
          <span>
            <Button type="primary" onClick={() => editUser(record)} style={{ marginRight: 10 }}>修改</Button>
            <Button onClick={() => deleteUser(record)}>删除</Button>
          </span>
        )
      }
    }
  ]
  const handleChange =({current, pageSize, total}) => {
    const newProps = {
      ...paginationProps,
      ...{current, pageSize}
    }
    setPaginationProps(newProps)
  }

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 10 }} onClick={addUser}>新增</Button>
      <Table
        rowKey='id'
        dataSource={userList}
        columns={columns}
        pagination={{
          position: ['bottomRight'],
          current: paginationProps.current,
          pageSize: paginationProps.pageSize,
          showTotal: (total, range) => {
            return range[0] + '-' + range[1] + ' 共' + total + '条'
          },
          showQuickJumper: true,
          showSizeChanger: true,
          total: total,
          size: 'small',
          showLessItems: true
        }}
        size="middle"
        loading={loading}
        onChange={handleChange}
      />
      {
        visible && <UserModal
          form={rowData}
          visible={visible}
          setVisible={setVisible}
          getUserList={getUserList}
        />
      }
    </div>

  )
}
export default UserManager
