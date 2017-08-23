import {
  FETCH_MY_SHOPS_INIT,
  FETCH_MY_SHOPS_SUCCESS,
  FETCH_MY_SHOPS_FAILURE
} from '../actions/types';

import initalState from './initialState';

export default function activeMyShops (state = initalState.activeMyShops, action) {
  switch (action.type) {

    case FETCH_MY_SHOPS_INIT:
      return{
        ...state,
        shops: [],
        loadin: true,
        error: null
      };

    case FETCH_MY_SHOPS_SUCCESS:
      return {
        ...state,
        shops: action.payload,
        error: null,
        loading: false
      };

    case FETCH_MY_SHOPS_FAILURE:
      return {
        ...state,
        shops: null,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
