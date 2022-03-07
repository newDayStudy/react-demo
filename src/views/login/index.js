import React, {useState} from 'react'
import { Form, Input, Button } from 'antd';
import {useNavigate } from 'react-router-dom'
import {login} from '@/api'
function Login(props){
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const navigate = useNavigate()
  const onFinish = async () => {
    const res = await login(user)
    if (res.status == 200 && res.data.code == 200) {
      localStorage.setItem('user', JSON.stringify(res.data.data))
      navigate('/home/userManager')
    }
  }
  return (
    <div className="wrapper">
      <h3>登录管理</h3>
      <Form
        className="login-form"
        labelCol={{ span: 4}}
        onFinish={onFinish}
      >
        <Form.Item 
          label="用户名"
          name="username"
          rules={[{required: true, message: '请输入用户名'}]}
        >
          <Input value={user.username} onInput={e => setUser({username: e.target.value, password: user.password})}/>
        </Form.Item>
        <Form.Item 
          label="密码"
          name="password"
          rules={[{required: true, message: '请输入密码'}]}
        >
          <Input.Password value={user.password} onInput={e => setUser({username: user.username, password: e.target.value})}/>
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