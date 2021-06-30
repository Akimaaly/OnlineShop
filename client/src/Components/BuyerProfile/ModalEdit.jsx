import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import api from '../../api';
import { editInfo } from '../../Redux/actions/user.action';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';

const ModalEdit = ({ visible, handleCancel, type, user }) => {
  const dispatch = useDispatch();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    setConfirmLoading(true);

    let body = {};

    if (type === 'name') {
      body = { ...user, name, type };
    } else {
      body = { ...user, phone: Number(phone), type };
    }

    try {
      const response = await api.editUser(body);
      Cookie.set('key', response.token);
      dispatch(editInfo(response));
    } catch (error) {
      console.log(error);
    }
    setConfirmLoading(false);
    handleCancel();
  };

  return (
    <>
      <Modal
        title='Title'
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {type === 'name' && (
          <Input
            placeholder='Логин'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {type === 'phone' && (
          <Input
            placeholder='Телефон'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )}
      </Modal>
    </>
  );
};

export default ModalEdit;
