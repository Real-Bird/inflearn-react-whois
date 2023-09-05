import { SettingFilled } from "@ant-design/icons";
import { Button, Dropdown } from "antd";

export default function Settings({ logout }) {
  return (
    <Dropdown
      menu={{
        items: [
          {
            label: "로그아웃",
            key: "0",
            onClick: logout,
          },
        ],
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingFilled />} />
    </Dropdown>
  );
}
