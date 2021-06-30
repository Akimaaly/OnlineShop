import { Form, Input, Button, Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import api from '../../api';
import { editInfo } from '../../Redux/actions/user.action';
import Cookie from 'js-cookie';

const EditProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmit = async (values) => {
    const { email, name, phone } = values;

    const body = {
      name,
      email,
      phone: phone,
      id: user.id,
    };

    try {
      const response = await api.editUser(body);
      Cookie.set('key', response.token);
      dispatch(editInfo(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: '40%' }}>
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
        onFinish={(values) => handleSubmit(values)}
      >
        <Form.Item label='Изменить имя' name='name'>
          <Input placeholder={user.name} suffix={<EditOutlined />} />
        </Form.Item>
        <Form.Item label='Изменить email' name='email'>
          <Input placeholder={user.email} suffix={<EditOutlined />} />
        </Form.Item>
        <Form.Item label='Изменить телефон' name='phone'>
          <Input placeholder={user.phone} suffix={<EditOutlined />} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='submit' htmlType='submit'>
            Сохранить изменения
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default EditProfile;
