/** @format */

import server from '../server';
import Cookie from 'js-cookie';

export const getHome = () => server.get('/').then((data) => data);

export const getLogout = () =>
  server.get('/logout').then((data) => Cookie.remove('key'));

export const postReg = (body) =>
  server.post('/reg', body).then((data) => data.data);

export const postAuth = (body) =>
  server.post('/login', body).then((data) => data.data);
