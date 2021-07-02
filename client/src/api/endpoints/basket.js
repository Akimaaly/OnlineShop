import server from '../server';

// export const changeStatusOfItem = (id) =>
//   server.get(`/good/${id}`).then((data) => data.data);

export const deleteGood = (id) =>
  server.patch(`/basket/update/${id}`).then((data) => data.data);

export const addGoodToBasket = (id, body) =>
  server.patch(`/basket/${id}`, body).then((data) => data.data);

export const getAllBasket = () =>
  server.get('/basket/all').then((data) => {
    return data.data;
  });

export const clearBasket = () =>
  server.patch('/clearBasket').then((data) => console.log('-------', data));
