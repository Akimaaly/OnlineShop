import { Input } from 'antd';

const { Search } = Input;

function SearchFunc() {
  const onSearch = value => console.log(value);

  return (
    <div style={{ marginBottom: '30px', width: '960px' }}>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  )
}

export default SearchFunc;
