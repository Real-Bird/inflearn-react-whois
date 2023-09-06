import { PageHeader } from "@ant-design/pro-layout";
import { Col, Descriptions, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Types, actions } from "../state";
import useFetchInfo from "../../common/hook/useFetchInfo";
import History from "../../common/component/History";
import TagList from "./TagList";
import Department from "./Department";
import FetchLabel from "../component/FetchLabel";
import useNeedLogin from "../../common/hook/useNeedLogin";

export default function User() {
  useNeedLogin();
  const navigate = useNavigate(0);
  const { name } = useParams();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const userHistory = useSelector((state) => state.user.userHistory);

  useEffect(() => {
    dispatch(actions.fetchUser(name));
    dispatch(actions.fetchUserHistory(name));
  }, [dispatch, name]);

  useEffect(() => {
    return () => dispatch(actions.initialize());
  }, [dispatch]);

  const { isFetched } = useFetchInfo(Types.FetchUser);
  return (
    <Row justify={"center"}>
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={() => navigate("/")}
          title={
            <FetchLabel label={"사용자 정보"} actionType={Types.FetchUser} />
          }
        >
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이름">
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <FetchLabel
                    label={"소속"}
                    actionType={Types.FetchUpdateUser}
                    fetchKey="department"
                  />
                }
              >
                <Typography.Text>
                  <Department />
                </Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <FetchLabel
                    label={"태그"}
                    actionType={Types.FetchUpdateUser}
                    fetchKey="tag"
                  />
                }
              >
                <Typography.Text>
                  <TagList />
                </Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="수정 내역">
                <Typography.Text>
                  <History items={userHistory} />
                </Typography.Text>
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
