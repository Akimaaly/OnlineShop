// Шаблон antDesign : Header Sider 2
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
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
        
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Обувь">
          <Menu.Item key="11">Женская обувь</Menu.Item>
          <Menu.Item key="21">Мужская обувь</Menu.Item>
          <Menu.Item key="31">Детская обувь</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Электроника">
          <Menu.Item key="52">Телевизоры</Menu.Item>
          <Menu.Item key="62">Компьютеры</Menu.Item>
          <Menu.Item key="82">Телефоны</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Книги">
          <Menu.Item key="93">Художественная литература</Menu.Item>
          <Menu.Item key="103">Учебная литература</Menu.Item>
          <Menu.Item key="113">Энциклопедии</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<NotificationOutlined />} title="Ремонт">
          <Menu.Item key="94">Инструмент</Menu.Item>
          <Menu.Item key="104">Электроинструмент</Menu.Item>
          <Menu.Item key="114">Сантехника</Menu.Item>
          <Menu.Item key="124">Краски</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<NotificationOutlined />} title="Прочее">
          <Menu.Item key="95">Канцтовары</Menu.Item>
          <Menu.Item key="105">Спорт</Menu.Item>
          <Menu.Item key="115">Продукты</Menu.Item>
          <Menu.Item key="125">Игрушки</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  ); 

};

export default CategoriesNavBar;
