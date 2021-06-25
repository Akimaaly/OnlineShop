import { PageHeader } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
    <div className='d-flex justify-content-evenly'>
      <Link to="/">Home</Link>
      <Link to="/logup">Logup</Link>
      <Link to="/login">Login</Link> 
    </div>

      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="AKIM EXPRESS"
        subTitle="WELCOME TO AKIM EXPRESS!!!"
      />
      </div>

  );
}

export default Header;
