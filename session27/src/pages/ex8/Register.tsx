import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';

type Receivedvalues = {
  email: string;
  password: string;
  confirm: string;
};

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate(); 

  const onFinish = (values: Receivedvalues) => {
    console.log('Received values of form: ', values.email, values.password, values.confirm);
    const rawUsers = localStorage.getItem("users");
    const users = rawUsers ? JSON.parse(rawUsers) : [];
    const newUser = {
      id: Date.now(),
      email: values.email.trim().toLowerCase(),
      password: values.password,
    };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    message.success("Đăng ký thành công! Vui lòng đăng nhập.");
    navigate("/login");
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail!' },
          { required: true, message: 'Please input your E-mail!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <div style={{display:"flex", justifyContent: "space-evenly" ,alignItems:"center"}}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <NavLink to={`/login`}>
            Login here
          </NavLink>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Register;
