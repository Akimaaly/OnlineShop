import server from '../server';

export const getOrdersOfUser = (id) =>
  server.get(`/order/all/${id}`).then((data) => data.data);

export const createOrder = (body) =>
  server.post(`/order/new`, body).then((data) => data.data);

// export const deleteGoodfromBasket = (id) =>
//   server.delete(`/order/${id}`).then((data) => data.data);
