import { Card, Descriptions } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const { Text } = Typography;

const CardForm = () => {
  const goods = useSelector((state) => state.goods);
  const currentItemID = useParams();


  const currentItem = goods.find((el) => el._id === currentItemID.id);
  return (
    <div align='center' className='container' style={{ paddingTop: '85px', }}>
      <Card
        style={{ width: "400px" }}
        cover={
          <img
            style={{width: "240px", heigth: "360px" }}
            alt="imageOfItem"
            src={currentItem.image}
          />
        }
        actions={[
          <DeleteOutlined key="delete" />,
          <EditOutlined key="edit" />,
        ]}
      >
        <Descriptions title={currentItem.title}>
          <Descriptions.Item label='Категория товара'>
            <Text>{currentItem.category}</Text>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label='Характеристики'>
            <Text>{currentItem.longDescription}</Text>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label='Артикул'>
            <Text>{currentItem.articul}</Text>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label="Стоимость">
            <Text>{currentItem.price} руб.</Text>
          </Descriptions.Item>
        </Descriptions>
      </Card>
      </div>
  );
};

export default CardForm;
