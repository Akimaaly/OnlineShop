// Шаблон antDesign : Header Sider 2
import "antd/dist/antd.css";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import React, { useState } from "react";
const { SubMenu } = Menu;

const CategoriesNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((pre) => !pre);
  };

  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        Категории
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Для дома">
          <Menu.Item key="1">Мебель</Menu.Item>
          <Menu.Item key="2">Посуда</Menu.Item>
          <Menu.Item key="3">Текстиль</Menu.Item>
          <Menu.Item key="4">Ремонт</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Электроника">
          <Menu.Item key="5">TV</Menu.Item>
          <Menu.Item key="6">Bluetooth</Menu.Item>
          <Menu.Item key="7">Computers</Menu.Item>
          <Menu.Item key="8">Phone</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Спорт">
          <Menu.Item key="9">Тренажеры/инвентарь</Menu.Item>
          <Menu.Item key="10">Одежда</Menu.Item>
          <Menu.Item key="11">Обувь</Menu.Item>
          <Menu.Item key="12">Здоровое питание/ПП</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default CategoriesNavBar;
