import { Input, Space } from 'antd';

const { Search } = Input;

const SearchFunc = () => {
  const onSearch = (value) => {
    // console.log(value);
  };

  return (
    <Space direction='vertical'>
      <Search
        placeholder='input search text'
        allowClear
        enterButton='Search'
        size='large'
        onSearch={onSearch}
      />
    </Space>
  );
};

export default SearchFunc;
