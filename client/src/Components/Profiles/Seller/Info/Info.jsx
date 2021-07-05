import { useSelector } from 'react-redux';
import { Card } from 'antd';

import styles from './styles.module.css';

export default function Info() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className={styles.wrapper}>
      <Card title={'Имя: ' + user.name} bordered={false} style={{ width: 300 }}>
        <p>E-mail: {user.email}</p>
        <p>Телефон: {user.phone}</p>
        <p>Адрес самовывоза: {user.location}</p>
      </Card>
    </div>
  );
}
