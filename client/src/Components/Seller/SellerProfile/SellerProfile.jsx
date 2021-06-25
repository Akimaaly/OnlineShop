import AddItemForm from '../AddItemForm/AddItemForm';
import SellerItems from '../SellerItems/SellerItems';

const SellerProfile = ({ id, name, email, phoneNumber, location, balance }) => {
  return (
    <div>
      <div>
        <h2>Здравствуйте юзернейм!</h2>
        <br />
        <span>{id}</span>
        <span>{name}</span>
        <span>{email}</span>
        <span>{phoneNumber}</span>
        <span>{location}</span>
        <span>{balance}</span>
      </div>
      <AddItemForm />
      <SellerItems />
    </div>
  );
};

export default SellerProfile;
