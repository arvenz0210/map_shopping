import {
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions/types';

import initalState from './initialState';

export default function activeUser (state = initalState.activeUser, action) {
  switch (action.type) {

    case FETCH_USER_INIT:
      return{
        ...state,
        loadin: true,
        error: null
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
