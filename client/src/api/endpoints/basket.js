import server from '../server';

// export const getBasketItem = (id) =>
//   server.get(`/good/${id}`).then((data) => data.data);

// export const postAddGood = (body) =>
//   server.post(`/good/new`, body).then((data) => data.data);

export const addGoodToBasket = (id, body) =>
  server.patch(`/basket/${id}`, body).then((data) => data.data);

export const getAllBasket = () =>
  server.get('/basket/all').then((data) => {
    return data.data;
  });

export const deleteFromBasket = async (id) => {
  await server.patch(`/basket/update/${id}`)
}