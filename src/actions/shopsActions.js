import {
  FETCH_SHOPS_INIT,
  FETCH_SHOPS_SUCCESS,
  FETCH_SHOPS_FAILURE,

  FETCH_SHOP_INIT,
  FETCH_SHOP_SUCCESS,
  FETCH_SHOP_FAILURE,

  FETCH_MY_SHOP_INIT,
  FETCH_MY_SHOP_SUCCESS,
  FETCH_MY_SHOP_FAILURE,


  FETCH_MY_SHOPS_INIT,
  FETCH_MY_SHOPS_SUCCESS,
  FETCH_MY_SHOPS_FAILURE,

  ADD_SHOP_INIT,
  ADD_SHOP_SUCCESS,
  ADD_SHOP_FAILURE,


  ADD_IMG_INIT,
  ADD_IMG_SUCCESS,
  ADD_IMG_FAILURE,


    DEL_IMG_INIT,
    DEL_IMG_SUCCESS,
    DEL_IMG_FAILURE,

  //EDIT
  EDIT_COVERPAGE_INIT,
  EDIT_COVERPAGE_SUCCESS,
  EDIT_COVERPAGE_FAILURE,

  EDIT_INFO_INIT,
  EDIT_INFO_SUCCESS,
  EDIT_INFO_FAILURE,

  EDIT_DESC_INIT,
  EDIT_DESC_SUCCESS,
  EDIT_DESC_FAILURE,

  ADD_REVIEW_INIT,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE
} from './types';

import API from '../api';

//ADD
function addShopSuccess () {
  return {
    type: ADD_SHOP_SUCCESS
  };
}
function addShopFailure (error) {
  return {
    type: ADD_SHOP_FAILURE,
    payload: error
  };
}

function addReviewSuccess (review) {
  return {
    type: ADD_REVIEW_SUCCESS,
    payload: review
  };
}
function addReviewFailure (error) {
  return {
    type: ADD_REVIEW_FAILURE,
    payload: error
  };
}

function addImgSuccess (img) {
  return {
    type: ADD_IMG_SUCCESS,
    payload: img
  };
}
function addImgFailure (error) {
  return {
    type: ADD_IMG_FAILURE,
    payload: error
  };
}

function delImgSuccess (img) {
  return {
    type: DEL_IMG_SUCCESS,
    payload: img
  };
}
function delImgFailure (error) {
  return {
    type: DEL_IMG_FAILURE,
    payload: error
  };
}

function fetchShopSuccess(shop){
  return{
    type:  FETCH_SHOP_SUCCESS,
    payload: shop
  };
}
function fetchShopFailure(error){
  return{
    type: FETCH_SHOP_FAILURE,
    payload: error
  };
}

function fetchShopsSuccess(shops){
  return{
    type:  FETCH_SHOPS_SUCCESS,
    payload: shops
  };
}
function fetchShopsFailure(error){
  return{
    type: FETCH_SHOPS_FAILURE,
    payload: error
  };
}

function fetchMyShopSuccess(shop){
  return{
    type:  FETCH_MY_SHOP_SUCCESS,
    payload: shop
  };
}
function fetchMyShopFailure(error){
  return{
    type: FETCH_MY_SHOP_FAILURE,
    payload: error
  };
}

function fetchMyShopsSuccess(shops){
  return{
    type:  FETCH_MY_SHOPS_SUCCESS,
    payload: shops
  };
}
function fetchMyShopsFailure(error){
  return{
    type: FETCH_MY_SHOPS_FAILURE,
    payload: error
  };
}

function editCoverpageFailure(error){
  return{
    type:  EDIT_COVERPAGE_FAILURE,
    payload: error
  };
}
function editCoverpageSuccess(urlImg){
  return{
    type: EDIT_COVERPAGE_SUCCESS,
    payload: urlImg
  };
}

function editInfoFailure(error){
  return{
    type:  EDIT_INFO_FAILURE,
    payload: error
  };
}
function editInfoSuccess(info){
  return{
    type: EDIT_INFO_SUCCESS,
    payload: info
  };
}

function editDescFailure(error){
  return{
    type:  EDIT_DESC_FAILURE,
    payload: error
  };
}
function editDescSuccess(desc){
  return{
    type: EDIT_DESC_SUCCESS,
    payload: desc
  };
}

//ASYNC
export function addShop (shop) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: ADD_SHOP_INIT
      }
    })

    try {

      await API.shops.addShop(shop);
      return dispatch(addShopSuccess());
    } catch (error) {
      return dispatch(addShopFailure(error));
    }
  };
}

export function addImg (img,id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: ADD_IMG_INIT
      }
    })

    try {

      const data = await API.shops.addImg_galery(img,id);
      return dispatch(addImgSuccess(data));
    } catch (error) {
      return dispatch(addImgFailure(error));
    }
  };
}

export function delImg (id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: DEL_IMG_INIT
      }
    })

    try {
      const data = await API.shops.delImg_galery(id);
      return dispatch(delImgSuccess(id));
    } catch (error) {
      return dispatch(delImgFailure(error));
    }
  };
}

export function fetchShop (id) {
  return async (dispatch) => {
    dispatch(() => {

      return {
        //Avisamos que empieza la llamada
        type: FETCH_SHOP_INIT
      };
    })
    //llamada real
    try {

      const data = await API.shops.getOne(id);
      dispatch(fetchShopSuccess(data));

    } catch (error) {
      dispatch(fetchShopFailure(error));
    }
  }
}

export function fetchShops (category) {
  return async (dispatch) => {
    dispatch(() => {

      return {
        //Avisamos que empieza la llamada
        type: FETCH_SHOPS_INIT
      };
    })
    //llamada real
    try {
      const data = await API.shops.getAll(category);
      dispatch(fetchShopsSuccess(data));

    } catch (error) {
      dispatch(fetchShopsFailure(error));
    }
  }
}

export function fetchMyShop (id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        //Avisamos que empieza la llamada
        type: FETCH_MY_SHOP_INIT
      };
    })
      //llamada real
    try {

      const data = await API.shops.getMyShop(id);
      dispatch(fetchMyShopSuccess(data));

    } catch (error) {
      dispatch(fetchMyShopFailure(error));
    }
  }
}

export function fetchMyShops () {
  return async (dispatch) => {
    dispatch(() => {

      return {
        //Avisamos que empieza la llamada
        type: FETCH_MY_SHOPS_INIT
      };
    })
      //llamada real
    try {

      const data = await API.shops.getMyShops();
      dispatch(fetchMyShopsSuccess(data));

    } catch (error) {
      dispatch(fetchMyShopsFailure(error));
    }
  }
}

export function editCoverpage (img,id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: EDIT_COVERPAGE_INIT
      }
    })

    try {

      const url = await API.shops.editCoverpage(img,id);
      return dispatch(editCoverpageSuccess(url));
    } catch (error) {
      return dispatch(editCoverpageFailure(error));
    }
  };
}

export function editInfo (info,id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: EDIT_INFO_INIT
      }
    })

    try {

      const date = await API.shops.editInfo(info,id);
      return dispatch(editInfoSuccess(date));
    } catch (error) {
      return dispatch(editInfoFailure(error));
    }
  };
}

export function editDesc (desc,id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: EDIT_DESC_INIT
      }
    })

    try {

      const date = await API.shops.editDesc(desc,id);
      return dispatch(editDescSuccess(date));
    } catch (error) {
      return dispatch(editDescFailure(error));
    }
  };
}

export function addReview (review,shopId) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: ADD_REVIEW_INIT
      }
    })

    try {

      const data = await API.shops.addReview(review,shopId);
      return dispatch(addReviewSuccess(data));
    } catch (error) {
      return dispatch(addReviewFailure(error));
    }
  };
}
