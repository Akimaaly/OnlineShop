import {
  GET_INFO_OF_USER,
  DELETE_INFO_OF_USER,
  EDIT_INFO_OF_USER,
} from '../privattypes';

export const getUserInfo = (obj) => {
  return {
    type: GET_INFO_OF_USER,
    payload: obj,
  };
};

export const deleteUserInfo = () => {
  return {
    type: DELETE_INFO_OF_USER,
  };
};
export const editInfo = (obj) => ({
  type: EDIT_INFO_OF_USER,
  payload: obj,
});
