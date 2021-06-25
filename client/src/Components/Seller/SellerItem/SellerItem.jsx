const SellerItem = ({
  _id,
  title,
  shortDescription,
  longDescription,
  articul,
  quantity,
  category,
  price,
  onDelete,
}) => {
  const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem',
    },

    input: {
      marginRight: '1rem',
    },
  };

  return (
    <li style={styles.li}>
      Title: {title}; Short Description: {shortDescription}; Quantity:{' '}
      {quantity}; Price: {price};
      <button onClick={() => onDelete(_id)}>Remove Item</button>
    </li>
  );
};

export default SellerItem;


