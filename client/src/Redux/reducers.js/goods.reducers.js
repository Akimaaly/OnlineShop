import { GET_ALL_GOODS } from "../types"


export default function goodsReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_ALL_GOODS:
      {
        return payload
      }
   
    default:
      return state
  }
}