import { PageHeader } from 'antd';

function Header() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="AKIM EXPRESS"
        subTitle="WELCOME TO AKIM EXPRESS!!!"
      />,
    </>
  );
}

export default Header;
