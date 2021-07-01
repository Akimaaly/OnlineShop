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
export const CLEAR_BASKET = 'CLEAR_BASKET';
