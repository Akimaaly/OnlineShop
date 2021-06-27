import { GET_ALL_GOODS } from "../types"
import axios from "axios"


export const getAllGoods = () => async (dispatch) => {
  const allGoods = (await axios.get('http://localhost:8080/good/all')).data
  dispatch({
    type: GET_ALL_GOODS,
    payload: allGoods
  })
}