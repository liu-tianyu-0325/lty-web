import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.less'
import { NavLink } from 'react-router-dom'
import { textState } from '../../store'
import { useRecoilState } from 'recoil';

export default function Login() {
  const [text, setText] = useRecoilState(textState);
  const onFinish = (values: any) => {

    console.log('Received values of form: ', values);
    for (let j = 0; j < text.length; j++) {
      if (values.username == text[j].email) {
        if (values.password == text[j].password) {
          alert("登陆成功")
          // window.location.href="/login/HaLiGong/index.html"
          return
        } else {
          alert("密码错误")
          return
        }
      }
    }
    alert('该用户未注册')
  };
  return (
    <div className="loginbox ">

       <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <span id='log'>LOGIN</span>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <NavLink to="/register">register now!</NavLink>
        </Form.Item>
      </Form>
    </div>
  )
}
