import { Card, Avatar, Descriptions } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const {  Text } = Typography;

const CardForm = () => {
  const goods = useSelector((state)=>state.goods)
const currentItemID = useParams()
const currentItem = goods.find(el=>el.id === currentItemID._id )
console.log(currentItem);
  return (
    <div align="center" className="container">
      <Card
        style={{ width: 400 }}
        cover={
          
          <img
          style={{ maxheigth: '100px' }}
            alt="imageOfItem"
            src={currentItem.image}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Descriptions title={currentItem.title}>
          <Descriptions.Item label="Категория товара">
            <Text>{currentItem.category}</Text>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label="Характеристики">
            <Text>{currentItem.longDescription}</Text>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label="Артикул">
            <Text>{currentItem.articul}</Text>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label="Стоимость">
            <Text>{currentItem.price}</Text>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default CardForm;
