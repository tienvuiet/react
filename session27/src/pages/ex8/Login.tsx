// import React from 'react'

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input,  } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';

type LoginFormValues = {
  username: string;
  password: string;
};
const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: LoginFormValues) => {
    console.log('Received values of form: ', values.username, values.password);
    const rawUsers = localStorage.getItem("users");
    const users = rawUsers? JSON.parse(rawUsers):[]
    if(users)
    navigate("/home")
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        <div style={{textAlign:"center"}}>  or <NavLink to={`/register`}>Register now!</NavLink></div>
      </Form.Item>
    </Form>
  );
};

export default Login;




