const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initState = {
  goods: [],
  user: {},
  basket: {
    basketItems: cartItemsInLocalStorage,
  },
};

export default initState;
