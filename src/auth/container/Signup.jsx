import { Button, Form, Input } from "antd";
import AuthLayout from "../component/AuthLayout";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../state";
import useBlockLoginUser from "../hook/useBlockLoginUser";

export default function Signup() {
  useBlockLoginUser();
  const dispatch = useDispatch();
  function onFinish({ username }) {
    const email = `${username}${EMAIL_SUFFIX}`;
    dispatch(actions.fetchSignup(email));
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
        <Input
          autoFocus
          prefix={<MailOutlined />}
          placeholder=""
          addonAfter={EMAIL_SUFFIX}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          인증 메일 받기
        </Button>
        Or <Link to={"/login"}>로그인하기</Link>
      </Form.Item>
    </AuthLayout>
  );
}

const EMAIL_SUFFIX = "@example.com";
