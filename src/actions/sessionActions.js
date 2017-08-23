import {
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_MY_USER_INIT,
  FETCH_MY_USER_SUCCESS,
  FETCH_MY_USER_FAILURE,
  ADD_USER_INIT,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  LOG_IN_INIT,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_SUCCES,
} from './types';

import API from '../api';

export function loginUserSuccess() {
  return {type: LOG_IN_SUCCESS}
}

export function loginUserFailure(error) {
  return {
    type: LOG_IN_FAILURE,
    payload: error
  }
}
export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: LOG_OUT_SUCCES}
}

function addUserSuccess () {
  return {
    type: ADD_USER_SUCCESS
  };
}

function addUserFailure (error) {
  return {
    type: ADD_USER_FAILURE,
    payload: error
  };
}


export function fetchUserSuccess(user){
  return{
    type:  FETCH_USER_SUCCESS,
    payload: user
  };
}

export function fetchUserFailure(error){
  return{
    type: FETCH_USER_FAILURE,
    payload: error
  };
}

export function fetchMyUserSuccess(name){
  return{
    type:  FETCH_MY_USER_SUCCESS,
    payload: name
  };
}

export function fetchMyUserFailure(error){
  return{
    type: FETCH_MY_USER_FAILURE,
    payload: error
  };
}


//LLAMADAS
export function logInUser(credentials) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: LOG_IN_INIT
      }
    })


    try {
      const response = await API.user.login(credentials);
      console.log(response);
      if(response.error){
        console.log("ERROR---->"+response.error.non_field_errors);
        dispatch(loginUserFailure(response.error.non_field_errors));
      }else{
        console.log("GOOD_TOKE---->"+response.date.token);
        sessionStorage.setItem('jwt', response.date.token);
        sessionStorage.setItem('name', response.date.user.username);
        dispatch(loginUserSuccess());
      }
    } catch (error) {
      return dispatch(loginUserFailure(error));
    }
  };
}


export function addUser (user) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: ADD_USER_INIT
      }
    })

    try {
      await API.user.addUser(user);
      return dispatch(addUserSuccess());
    } catch (error) {
      return dispatch(addUserFailure(error));
    }
  };
}


export function fetchUser (id) {
  return async (dispatch) => {
    dispatch(() => {

      return {
        //Avisamos que empieza la llamada
        type: FETCH_USER_INIT
      };
    })
      //llamada real
    try {

      const data = await API.user.getOneUser(id);
      dispatch(fetchUserSuccess(data));

    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  }
}


export function fetchMyUser () {
  return async (dispatch) => {
    dispatch(() => {

      return {
        //Avisamos que empieza la llamada
        type: FETCH_MY_USER_INIT
      };
    })
      //llamada real
    try {

      const data = await API.user.getMyUser();
      console.log(data.username+"supuesto name");
      dispatch(fetchMyUserSuccess(data.username));

    } catch (error) {
      dispatch(fetchMyUserFailure(error));
    }
  }
}
