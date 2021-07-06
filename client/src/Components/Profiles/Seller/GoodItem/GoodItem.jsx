import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import styles from './styles.module.css';

const { Meta } = Card;
export default function GoodItem({ image, _id, deletehandler, title }) {
  return (
    <Card
      className={styles.cardItem}
      cover={<img alt='example' src={image} />}
      actions={[
        <DeleteOutlined key='delete' onClick={() => deletehandler(_id)} />,
        <EditOutlined key='edit' />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
        }
        title={title}
      />
    </Card>
  );
}
