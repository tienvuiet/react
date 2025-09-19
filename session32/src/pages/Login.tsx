// src/pages/Login.tsx
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { useSelector, useDispatch } from "react-redux";
// import type { RootState } from "../redux/rootReducer";

export default function Login() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state: any) => state.auth);

  const onFinish = (values: any) => {
    // Giả sử username là email
    const emailFromForm = values.username?.trim();
    if (emailFromForm) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { email: emailFromForm },
      });
    }
    console.log("Login with: ", values);
    // ví dụ: navigate('/dashboard')
  };

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
        username: email || "",
        password: password || "",
      }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username (email)" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        {" "}or <a href="/register">Register now!</a>
      </Form.Item>
    </Form>
  );
}
