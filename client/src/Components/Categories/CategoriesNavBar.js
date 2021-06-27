// Шаблон antDesign : Header Sider 2
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BookOutlined,
  DesktopOutlined,  NotificationOutlined, SkinOutlined ,
  TableOutlined,
  ToolOutlined
} from "@ant-design/icons";
import { Menu, Button,Typography} from "antd";
const { Text} = Typography
const { SubMenu } = Menu;

const CategoriesNavBar = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed((pre) => !pre);
  };
  const handleGetNameOfCategory = (event) => {
    history.push(`/cardlist/${event}`);
  };
  const handleGetAllItems = ()=>{
    history.push("/cardlist");
  }
  return (
    <div style={{ width: 256, marginLeft: "5px" }}>
      <div>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: '5px'}}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      <Text strong icon={<TableOutlined/>}  style={{marginLeft: '50px'}} onClick={handleGetAllItems}>Все товары</Text>
      </div>
      <Menu mode="inline" theme="light" inlineCollapsed={collapsed}>
        <SubMenu key="sub11" icon={<SkinOutlined />} title="Обувь">
          <Menu.Item
            key="11"
            onClick={() => handleGetNameOfCategory("women_shoes")}
          >
            Женская обувь
          </Menu.Item>
          <Menu.Item
            key="21"
            onClick={() => handleGetNameOfCategory("men_shoes")}
          >
            Мужская обувь
          </Menu.Item>
          <Menu.Item
            key="31"
            onClick={() => handleGetNameOfCategory("child_shoes")}
          >
            Детская обувь
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<DesktopOutlined />} title="Электроника">
          <Menu.Item key="52" onClick={() => handleGetNameOfCategory("tv")}>
            Телевизоры
          </Menu.Item>
          <Menu.Item key="62" onClick={() => handleGetNameOfCategory("comp")}>
            Компьютеры
          </Menu.Item>
          <Menu.Item key="82" onClick={() => handleGetNameOfCategory("phones")}>
            Телефоны
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<BookOutlined />} title="Книги">
          <Menu.Item
            key="93"
            onClick={() => handleGetNameOfCategory("literature")}
          >
            Художественная литература
          </Menu.Item>
          <Menu.Item
            key="103"
            onClick={() => handleGetNameOfCategory("educational_literature")}
          >
            Учебная литература
          </Menu.Item>
          <Menu.Item
            key="113"
            onClick={() => handleGetNameOfCategory("encyclopedias")}
          >
            Энциклопедии
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<ToolOutlined />} title="Ремонт">
          <Menu.Item key="94" onClick={() => handleGetNameOfCategory("tools")}>
            Инструмент
          </Menu.Item>
          <Menu.Item
            key="104"
            onClick={() => handleGetNameOfCategory("power_tools")}
          >
            Электроинструмент
          </Menu.Item>
          <Menu.Item
            key="114"
            onClick={() => handleGetNameOfCategory("plumbing")}
          >
            Сантехника
          </Menu.Item>
          <Menu.Item
            key="124"
            onClick={() => handleGetNameOfCategory("paints")}
          >
            Краски
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<TableOutlined />} title="Прочее">
          <Menu.Item
            key="95"
            onClick={() => handleGetNameOfCategory("office_supplies")}
          >
            Канцтовары
          </Menu.Item>
          <Menu.Item
            key="105"
            onClick={() => handleGetNameOfCategory("sports")}
          >
            Спорт
          </Menu.Item>
          <Menu.Item
            key="115"
            onClick={() => handleGetNameOfCategory("products")}
          >
            Продукты
          </Menu.Item>
          <Menu.Item key="125" onClick={() => handleGetNameOfCategory("toys")}>
            Игрушки
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default CategoriesNavBar;
