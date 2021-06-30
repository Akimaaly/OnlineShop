import { Form, Input, Button, Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';

const EditProfile = ({ setButtonEdit, buttonEdit }) => {
  const user = useSelector((state) => state.user);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label='Изменить имя' name='username'>
          <Input placeholder={user.name} suffix={<EditOutlined />} />
        </Form.Item>
        <Form.Item label='Изменить имя' name='email'>
          <Input placeholder={user.email} suffix={<EditOutlined />} />
        </Form.Item>
        <Form.Item label='Изменить имя' name='phone'>
          <Input placeholder={user.phone} suffix={<EditOutlined />} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Сохранить изменения
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditProfile;
