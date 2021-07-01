//получаем все товары которые есть в базе(на главной странице выводим)
export const GET_ALL_GOODS = 'GET_ALL_GOODS';

//Добавление товара продавцом
export const GOOD_ADD_START = 'GOOD_ADD_START';
export const GOOD_ADD_SUCCESS = 'GOOD_ADD_SUCCESS';
export const GOOD_ADD_ERR = 'GOOD_ADD_ERR';

//типы относящиеся к действиям конкретного продавца
export const GET_GOODS_OF_CURRENT_SELLER_ERR =
  'GET_GOODS_OF_CURRENT_SELLER_ERR';
export const GET_GOODS_OF_CURRENT_SELLER_START =
  'GET_GOODS_OF_CURRENT_SELLER_START';
export const GET_GOODS_OF_CURRENT_SELLER_SUCCESS =
  'GET_GOODS_OF_CURRENT_SELLER_SUCCESS';

// удаление товара продавцом
export const GOOD_DELETE_SUCCESS = 'GOOD_DELETE_SUCCESS';

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET';
export const BASKET_RESET = 'BASKET_RESET';

export const GET_GOODS_REQUEST = 'GET_GOODS_REQUEST';
export const GET_GOODS_SUCCESS = 'GET_GOODS_SUCCESS';
export const GET_GOODS_FAIL = 'GET_GOODS_FAIL';

export const GET_GOODS_DETAILS_REQUEST = 'GET_GOODS_DETAILS_REQUEST';
export const GET_GOODS_DETAILS_SUCCESS = 'GET_GOODS_DETAILS_SUCCESS';
export const GET_GOODS_DETAILS_FAIL = 'GET_GOODS_DETAILS_FAIL';
export const GET_GOODS_DETAILS_RESET = 'GET_GOODS_DETAILS_RESET';

// export const ADD_TO_CART = 'ADD_TO_CART';
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
