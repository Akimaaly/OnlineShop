/** @format */

import axios, { AxiosResponse } from 'axios';
import { createBrowserHistory } from 'history';
import Cookie from 'js-cookie';

export const historyServer = createBrowserHistory();

const baseURL = process.env.REACT_APP_HOST || 'http://localhost:8080';

const server = axios.create({ baseURL });

server.defaults.withCredentials = true;

server.interceptors.request.use((request) => {
  const token = Cookie.get('key');
  if (token) {
    request.headers.Authorization = token;
  }
  return request;
});

server.interceptors.response.use(
  (response) => {
    return response;
  }
  // (error) => {
  //   if (error.response.status === 401) {
  //     historyServer.push("/login");
  //   }
  //   return error;
  // }
);

export default server;

export { baseURL };
