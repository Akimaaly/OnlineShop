import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import React from 'react';
import { Form, Input, Cascader, Button } from 'antd';
import { addGood } from '../../../../Redux/actions/goods.actions';
const { TextArea } = Input;
const residences = [
  {
    value: 'boots',
    label: 'Обувь',
    children: [
      {
        value: 'women',
        label: 'Женская',
      },
      {
        value: 'men',
        label: 'Мужская',
      },
      {
        value: 'children',
        label: 'Детская',
      },
    ],
  },
  {
    value: 'electronics',
    label: 'Электроника',
    children: [
      {
        value: 'tv',
        label: 'Телевизоры',
      },
      {
        value: 'computers',
        label: 'Компьютеры',
      },
      {
        value: 'phones',
        label: 'Телефоны',
      },
    ],
  },
  {
    value: 'books',
    label: 'Книги',
    children: [
      {
        value: 'literature',
        label: 'Художественная литература',
      },
      {
        value: 'educational_literature',
        label: 'Учебная литература',
      },
      {
        value: 'encyclopedias',
        label: 'Энциклопедии',
      },
    ],
  },
  {
    value: 'repairs',
    label: 'Ремонт',
    children: [
      {
        value: 'tools',
        label: 'Инструмент',
      },
      {
        value: 'power_tools',
        label: 'Электроинструмент',
      },
      {
        value: 'plumbing',
        label: 'Сантехника',
      },
      {
        value: 'paints',
        label: 'Краски',
      },
    ],
  },
  {
    value: 'other',
    label: 'Прочее',
    children: [
      {
        value: 'office_supplies',
        label: 'Канцтовары',
      },
      {
        value: 'sports',
        label: 'Спорт',
      },
      {
        value: 'products',
        label: 'Продукты',
      },
      {
        value: 'toys',
        label: 'Игрушки',
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AddGoodForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(addGood(values));
    history.push('/seller/profile');
  };

  return (
    <Form
      {...formItemLayout}
      encType='multipart/form-data'
      form={form}
      name='register'
      onFinish={onFinish}
      initialValues={{
        category: ['Обувь', 'женская'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item name='title' label='Название товара'>
        <Input />
      </Form.Item>
      <Form.Item rows={4} name='longDescription' label='Описание товара'>
        <TextArea />
      </Form.Item>
      <Form.Item
        name='residence'
        label='Категория'
        rules={[
          {
            type: 'array',
            message: 'Пожалуйста, выберите категорию',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>
      <Form.Item name='articul' label='Артикул'>
        <Input />
      </Form.Item>
      <Form.Item name='quantity' label='Количество'>
        <Input />
      </Form.Item>
      <Form.Item name='price' label='Цена'>
        <Input />
      </Form.Item>
      <Form.Item name='photo'   label='Загрузить фото'>
        <Input type='file'/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Добавить товар
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddGoodForm;
