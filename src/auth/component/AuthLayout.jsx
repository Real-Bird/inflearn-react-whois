import { Col, Form, Row, Typography } from "antd";

export default function AuthLayout({ children, onFinish }) {
  return (
    <>
      <Row justify={"center"} style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: "Times New Roman, cursive" }}>
            찾 아 야 한 다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col>
          <Form
            style={{
              width: 300,
              marginTop: 50,
            }}
            onFinish={onFinish}
          >
            {children}
          </Form>
        </Col>
      </Row>
    </>
  );
}
