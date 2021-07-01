import server from '../server';

export const getOrdersOfUser = () =>
  server.get(`/order/all/`).then((data) => data.data);

export const createOrder = (body) =>
  server.post(`/order/new`, body).then((data) => data.data);

// export const deleteGoodfromBasket = (id) =>
//   server.delete(`/order/${id}`).then((data) => data.data);
