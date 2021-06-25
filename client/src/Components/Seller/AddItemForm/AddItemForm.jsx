import { Form, Input, Button, Select } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGood } from '../../../redux/actions/good';

const AddItemForm = () => {
  const [formFields, setFormFields] = useState({
    title: '',
    shortDescription: '',
    quantity: '',
    price: '',
  });

  const dispatch = useDispatch()

  const changeHandler = (e) => {
    const field = e.target.id;
    const newValue = e.target.value;

    setFormFields((oldFields) => ({ ...oldFields, [field]: newValue }));
  };
  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem',
    },
  };

  const onSubmit = (paramsForm) => {
    dispatch(addGood(paramsForm));
  };

  return (
    <form
      style={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formFields);
      }}
    >
      <input
        id='title'
        type='text'
        value={formFields.title}
        onChange={changeHandler}
      />
      <input
        id='quantity'
        type='text'
        value={formFields.quantity}
        onChange={changeHandler}
      />
      <input
        id='price'
        type='text'
        value={formFields.price}
        onChange={changeHandler}
      />
      <textarea
        id='shortDescription'
        value={formFields.shortDescription}
        rows='5'
        cols='21'
        onChange={changeHandler}
      ></textarea>
      <button>Add Item</button>
    </form>
  );
};

export default AddItemForm;


