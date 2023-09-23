import React, {useState} from 'react'
import { Form, Input, Button } from 'antd';
import {useNavigate } from 'react-router-dom'
import {login} from '@/api'
import {add} from "@/redux/modules/tabs-store";
import {useDispatch} from "react-redux";

function Login(props){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinish = async (form) => {
      console.log(form)
    // const res = await login(user)
    // if (res.status == 200 && res.data.code == 200) {
    //   localStorage.setItem('user', JSON.stringify(res.data.data))
      localStorage.setItem('user', JSON.stringify({
        id:1,
        username: 'test',
        password: 'password',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTY5NTM1ODA1NH0.u2q1pXv6XtjA12zsW1h7lt44IELAJipCzRN3YXRM8qc'
      }))
      navigate('/home')
      dispatch(add({
        label: '首页',
        key: '/home'
      }))
    // }
  }
  return (
    <div className="wrapper">
      <h3>登录管理</h3>
      <Form
        className="login-form"
        labelCol={{ span: 4}}
        onFinish={onFinish}
        initialValues={{username: 'test', password: 123456}}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{required: true, message: '请输入用户名'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{required: true, message: '请输入密码'}]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 4}}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
