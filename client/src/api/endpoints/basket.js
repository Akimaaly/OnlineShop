import server from '../server';

// export const getGoodsSeller = (id) =>
//   server.get(`/good/${id}`).then((data) => data.data);

// export const postAddGood = (body) =>
//   server.post(`/good/new`, body).then((data) => data.data);

export const addGoodToBasket = (id, body) =>
  server.patch(`/basket/${id}`, body).then((data) => data.data);