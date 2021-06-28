import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import Cookie from 'js-cookie';
import { getUserInfo } from '../../Redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';

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
    const { email, password } = values;
    const body = {
      email: email,
      password: password,
      role,
    };
    // console.log(body);
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
    <Form
      style={{ paddingTop: '200px', width: '1000px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}
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
      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
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
  );
};

export default Auth;
