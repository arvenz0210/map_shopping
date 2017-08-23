import * as types from '../actions/types';
import initialState from './initialState';


export default function sessionReducer(state = initialState.myUser, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return{

            session:!!sessionStorage.jwt,
            error: null,
            loading: false

        }
    case types.LOG_IN_FAILURE:
      return{


            session:!!sessionStorage.jwt,
            error: action.payload,
            loading: false

        }
    case types.LOG_OUT_SUCCES:
      return !!sessionStorage.jwt
    case types.ADD_USER_SUCCESS:

    case types.ADD_USER_FAILURE:
      return{...state,error: action.payload}


    default:
      return state;
  }
}
