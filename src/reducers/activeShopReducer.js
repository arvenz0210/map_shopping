import {
  FETCH_SHOP_INIT,
  FETCH_SHOP_SUCCESS,
  FETCH_SHOP_FAILURE,

  ADD_REVIEW_INIT,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE
} from '../actions/types';

import initalState from './initialState';

export default function activeShop (state = initalState.activeShop, action) {
  switch (action.type) {

    case FETCH_SHOP_INIT:
      return{
        ...state,
        loadin: true,
        error: null
      };

    case FETCH_SHOP_SUCCESS:
      return {
        ...state,
        shop: action.payload,
        error: null,
        loading: false
      };

    case FETCH_SHOP_FAILURE:
      return {
        ...state,
        shop: null,
        error: action.payload,
        loading: false
      };


      case ADD_REVIEW_INIT:
        return{
          ...state,
          shop:{
            ...state.shop,
              reviews:[...shop.reviews]
          },
          loadin: true,
          error: null
        };

      case ADD_REVIEW_SUCCESS:
        return {
          ...state,
          shop:{
            ...state.shop,
              reviews:[...state.shop.reviews,action.payload]
          },
          error: null,
          loading: false
        };

      case ADD_REVIEW_FAILURE:
        return {
          ...state,
          shop: {...state.shop},
          error: action.payload,
          loading: false
        };

    default:
      return state;
  }
}
