import {
  FETCH_SHOPS_INIT,
  FETCH_SHOPS_SUCCESS,
  FETCH_SHOPS_FAILURE,
  ADD_SHOP_INIT,
  ADD_SHOP_FAILURE,
  ADD_SHOP_SUCCESS
} from '../actions/types';

import initalState from './initialState';

export default function shopsList (state = initalState.shopsList, action) {
  switch (action.type) {

    case FETCH_SHOPS_INIT:
      return{
        ...state,
        loadin: true,
        error: null
      };

    case FETCH_SHOPS_SUCCESS:
      return {
        ...state,
        shops: action.payload,
        error: null,
        loading: false
      };

    case FETCH_SHOPS_FAILURE:
      return {
        ...state,
        shops: [],
        error: action.payload,
        loading: false
      };

    case ADD_SHOP_INIT:
      return{
        ...state,
        loading: true,
        error: null
      };

    default:
      return state;
  }
}
