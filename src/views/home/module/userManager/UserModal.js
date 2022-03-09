import React, { useEffect, useState } from 'react'
import { Form, Input, Select, Modal, message } from 'antd'
import { getRoles as getRolesApi, addUser, editUser } from '@/api'
const { Option } = Select
function UserModal(props) {
  const [form] = Form.useForm()
  const [title, setTitle] = useState('新增用户')
  const [roles, setRoles] = useState([])
  useEffect(() => {
    getRoles()
    form.setFieldsValue({ ...props.form })
    props.form.id ? setTitle('编辑用户') : setTitle('新增用户')
  }, [])
  const getRoles = async () => {
    const res = await getRolesApi()
    if (res.status == 200 && res.data.code == 200) {
      setRoles(res.data.data)
    }
  }
  const onFinish = async () => {
    const params = form.getFieldsValue()
    const res = props.form.id ? await editUser({
      ...params,
      id: props.form.id
    }) : await addUser(params)
    if (res.status == 200 && res.data.code == 200) {
      message.success(res.data.message)
      props.getUserList()
      handleCancel()
    } else {
      message.error(res.data.message)
    }
  }
  const handleOk = e => form.submit()
  const handleCancel = () => props.setVisible(false)
  return (
    <Modal
      getContainer={false}
      title={title}
      visible={props.visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 4 }}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="用户身份"
          name="roleId"
          rules={[{ required: true, message: '请选择用户身份' }]}
        >
          <Select>
            {
              roles.map(item => {
                return <Option key={item.id} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        </Form.Item>
      </Form >
    </Modal>

  )
}
export default UserModal