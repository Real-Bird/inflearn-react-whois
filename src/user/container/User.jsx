import { PageHeader } from "@ant-design/pro-layout";
import { Col, Descriptions, Row, Space, Spin, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Types, actions } from "../state";
import useFetchInfo from "../../common/hook/useFetchInfo";

export default function User() {
  const navigate = useNavigate(0);
  const { name } = useParams();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [name]);

  const { isFetched, isSlow } = useFetchInfo(Types.FetchUser);
  return (
    <Row justify={"center"}>
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={() => navigate("..")}
          title={
            <Space>
              사용자 정보
              {isSlow && <Spin size="small" />}
            </Space>
          }
        >
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이름">
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="소속">
                <Typography.Text>{user.department}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="태그">
                <Typography.Text>{user.tag}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="수정 내역">
                <Typography.Text>수정 내역</Typography.Text>
              </Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && (
            <Typography.Text>존재하지 않는 사용자입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}
