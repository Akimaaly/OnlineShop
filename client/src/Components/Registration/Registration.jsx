import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import api from '../../api';
import Cookie from 'js-cookie';
import { useHistory } from 'react-router';
import { getUserInfo } from '../../Redux/actions/user.action';
import { useDispatch } from 'react-redux';
import styles from './Registration.module.css';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: 'Необходимо ввести имя',
  types: {
    email: 'Такой e-mail не подойдёт!',
    number: 'Такой телефон не подойдёт!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const prefixSelector = (
  <Form.Item name='prefix' noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      {/* <Option value='8'>8</Option> */}
      <Option value='+7'>+7</Option>
    </Select>
  </Form.Item>
);

const Registration = () => {
  const history = useHistory();
  const [role, setRole] = useState('user');
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (role) => {
    setRole(role);
  };

  const handleSubmit = async (values) => {
    const { email, name } = values.user;
    const { prefix, password, phone } = values;
    const body = {
      name,
      email,
      password,
      phone: prefix + phone,
      role,
    };
    // console.log(body);

    try {
      const response = await api.postReg(body);
      Cookie.set('key', response.token);
      dispatch(getUserInfo(response));
      history.push('/');
    } catch (error) {}
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form
      className={styles.login}
      size={'middle'}
      // onSubmit={(e) => handleSubmit(e)}
      {...layout}
      name='nest-messages'
      onFinish={(values) => handleSubmit(values)}
      validateMessages={validateMessages}
    >
      <p align='right' style={{ color: 'white', fontWeight: 'bold' }}>
        Введите свои данные
      </p>
      <Form.Item
        name={['user', 'name']}
        label='Введите свое имя'
        rules={[
          {
            required: true,
            message: 'Введите свое имя',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label='Введите свой Email'
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Введите свой Email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Придумайте пароль'
        rules={[
          {
            required: true,
            message: 'Введите пароль',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Подтвердите пароль'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Повторите пароль',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Введеные пароли не совпадают'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='phone'
        label='Введите свой номер'
        rules={[
          {
            required: true,
            message: 'Введите свой номер',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Checkbox
          name='user'
          onClick={() => handleClick('user')}
          checked={role === 'user'}
          onChange={() => {}}
          onChange={onChange}
          style={{ color: 'white' }}
        >
          Я - покупатель
        </Checkbox>
        <Checkbox
          name='seller'
          onClick={() => handleClick('seller')}
          checked={role === 'seller'}
          onChange={() => { }}
          onChange={onChange}
          style={{ color: 'white' }}
        >
          Я продавец
        </Checkbox>

        <Button type='submit' htmlType='submit'>
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registration;
