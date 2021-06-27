import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import api from '../../api';
import Cookie from 'js-cookie';
import { useHistory } from 'react-router';

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
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
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
      <Option value='8'>8</Option>
      <Option value='+7'>+7</Option>
    </Select>
  </Form.Item>
);

const Registration = () => {
  const history = useHistory();
  const [role, setRole] = useState('user');

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
    console.log(body);

    try {
      const response = await api.postReg(body);
      Cookie.set('key', response.token);
      history.push('/');
    } catch (error) {}
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form
      // onSubmit={(e) => handleSubmit(e)}
      {...layout}
      name='nest-messages'
      onFinish={(values) => handleSubmit(values)}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label='Name'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label='Email'
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error('The two passwords that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='phone'
        label='Phone Number'
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
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

        <Button type='submit' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registration;
