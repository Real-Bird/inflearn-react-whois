import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import AuthLayout from "../component/AuthLayout";
import { useDispatch } from "react-redux";
import { actions } from "../state";
import useBlockLoginUser from "../hook/useBlockLoginUser";

export default function Login() {
  useBlockLoginUser();
  const dispatch = useDispatch();
  function onFinish({ username, password }) {
    dispatch(actions.fetchLogin(username, password));
  }
  return (
    <AuthLayout onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input autoFocus prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          로그인
        </Button>
        Or <Link to={"/signup"}>가입하기</Link>
      </Form.Item>
    </AuthLayout>
  );
}
