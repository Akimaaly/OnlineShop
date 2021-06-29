import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import Cookie from 'js-cookie';
import { getUserInfo } from '../../Redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Auth.module.css';

console.log(styles);
const Auth = () => {
  const history = useHistory();
  const [role, setRole] = useState('user');
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // console.log(user);

  const handleClick = (role) => {
    setRole(role);
  };

  const handleSubmit = async (values) => {
    const { email, password, phone } = values;
    const body = {
      email: email,
      password: password,
      role,
    };
    console.log(body);
    try {
      const response = await api.postAuth(body);
      Cookie.set('key', response.token);
      dispatch(getUserInfo(response));
      history.push('/');
    } catch (error) {}
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <Form
        className={styles.login}
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
        onFinishFailed={onFinishFailed}
      >
        <p align='right' style={{ color: 'black' }}>
          AkimExpress style
        </p>
        <Form.Item
          name='email'
          label='Введите Email'
          rules={[
            {
              type: 'email',
              message: 'Такого E-mail не существует!',
            },
            {
              required: true,
              message: 'Введите Email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Введите пароль'
          name='password'
          rules={[
            {
              required: true,
              message: 'Введите пароль!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox
            name='user'
            onClick={() => handleClick('user')}
            checked={role === 'user'}
            onChange={() => {}}
            onChange={onChange}
          >
            Я - покупатель
          </Checkbox>
          <Checkbox
            name='seller'
            onClick={() => handleClick('seller')}
            checked={role === 'seller'}
            onChange={() => {}}
            onChange={onChange}
          >
            Я продавец
          </Checkbox>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Auth;
