import { GET_INFO_OF_USER, DELETE_INFO_OF_USER } from '../privattypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_INFO_OF_USER:
      return action.payload;
    case DELETE_INFO_OF_USER:
      return {};
    default:
      return state;
  }
}
