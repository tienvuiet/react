// import React from 'react'

import React, {  useState } from 'react';

import {

    Button,

    Form,
    Input,
    Select,
} from 'antd';
import { useNavigate } from 'react-router-dom';
// import Password from 'antd/es/input/Password';


type User = {
    email: string,
    password: string,
    role: string
}
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const Login: React.FC = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [user] = useState<User>({ 
        email: "admin@gmail.com",
        password:"123456",
        role: "admin"
    })
    const onFinish = (values: User) => {
        
        const input: User = {
            email: values.email,
            password: values.password,
            role: values.role
        }
        const checkInput = input.email===user.email&& input.password === user.password && input.role ===user.role
        if(checkInput){
           alert(`Đăng nhập thành công`)
            navigate("/account")
        }else{
          alert(`Quyền sai hoặc tài khoản mật khẩu không đúng`)
        }
       
    };
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="login"
            onFinish={onFinish}
            initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="role"
                label="Quyền"
                rules={[{ required: true, message: 'Please select role!' }]}
            >
                <Select placeholder="select your role">
                    <Option value="admin">admin</Option>
                    <Option value="user">user</Option>
                    {/* <Option value="other">Other</Option> */}
                </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;







