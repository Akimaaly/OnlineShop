import server from '../server';

export const getGoodsSeller = (id) =>
  server.get(`/good/${id}`).then((data) => data.data);

export const postAddGood = (body) =>
  server.post(`/good/new`, body).then((data) => data.data);

export const deleteGoodfromBasket = (id) =>
  server.delete(`/good/${id}`).then((data) => data.data);
