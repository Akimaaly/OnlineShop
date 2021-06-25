import {
  GOOD_GET_START,
  GOOD_GET_SUCCESS,
  GOOD_GET_ERR,
  GOOD_ADD_START,
  GOOD_ADD_SUCCESS,
  GOOD_ADD_ERR,
  GOOD_DELETE_START,
  GOOD_DELETE_SUCCESS,
  GOOD_DELETE_ERR,
  GOOD_EDIT_START,
  GOOD_EDIT_SUCCESS,
  GOOD_EDIT_ERR,
} from '../types';

//actions for getting current items list

export const getGoodAsyncStart = () => ({ type: GOOD_GET_START });
export const getGoodAsyncSuccess = (payload) => ({
  type: GOOD_GET_SUCCESS,
  payload,
});
export const getGoodAsyncErr = (payload) => ({ type: GOOD_GET_ERR, payload });

export const getGoods = () => async (dispatch) => {
  dispatch(getGoodAsyncStart());
  const response = await fetch('http://localhost:8080/good/selleritems');

  if (response.ok) {
    const parsedGoods = await response.json();
    return dispatch(getGoodAsyncSuccess(parsedGoods));
  }
  const err = await response.json();
  dispatch(getGoodAsyncErr(err));
};

//actions for adding an Item

export const addGoodStart = () => ({ type: GOOD_ADD_START });
export const addGoodSuccess = (payload) => ({
  type: GOOD_ADD_SUCCESS,
  payload,
});
export const addGoodErr = (err) => ({
  type: GOOD_ADD_ERR,
  payload: err,
  error: true,
});

export const addGood = (params) => async (dispatch) => {
  dispatch(addGoodStart());
  const response = await fetch('http://localhost:8080/good/selleritems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  if (response.ok) {
    await response.json();
    return dispatch(addGoodSuccess(params));
  }
  const err = await response.json();
  dispatch(addGoodErr(err));
};

// Item Deletion

export const deleteGood = (id) => async (dispatch) => {
  console.log('deleteGood===>');
  const response = await fetch(`http://localhost:8080/good/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    dispatch({
      type: GOOD_DELETE_SUCCESS,
      payload: { id },
    });
  }
};
