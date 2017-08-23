import {
  FETCH_OFFERS_INIT,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILURE,

  ADD_OFFER_IMG_INIT,
  ADD_OFFER_IMG_SUCCESS,
  ADD_OFFER_IMG_FAILURE,

  ADD_OFFER_INIT,
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAILURE
}
  from './types'

  import API from '../api';


  function addOfferImgSuccess (img) {
    return {
      type: ADD_OFFER_IMG_SUCCESS,
      payload: img
    };
  }

  function addOfferImgFailure (error) {
    return {
      type: ADD_OFFER_IMG_FAILURE,
      payload: error
    };
  }

  export function fetchOffersSuccess(offers){
    return{
      type:  FETCH_OFFERS_SUCCESS,
      payload: offers
    };
  }


  export function fetchOffersFailure(error){
    return{
      type: FETCH_OFFERS_FAILURE,
      payload: error
    };
  }


  export function addOfferSuccess(offer){
    return{
      type:  ADD_OFFER_SUCCESS,
      payload: offer
    };
  }


  export function addOfferFailure(error){
    return{
      type: ADD_OFFER_FAILURE,
      payload: error
    };
  }

  export function fetchOffers () {
    return async (dispatch) => {
      dispatch(() => {

        return {
          //Avisamos que empieza la llamada
          type: FETCH_OFFERS_INIT
        };
      })
        //llamada real
      try {
        const data = await API.offers.getOffers();
        dispatch(fetchOffersSuccess(data));

      } catch (error) {
        dispatch(fetchOffersFailure(error));
      }
    }
  }

  export function addOffer (offer,shopId) {
    return async (dispatch) => {
      dispatch(() => {

        return {
          //Avisamos que empieza la llamada
          type: ADD_OFFER_INIT
        };
      })
        //llamada real
      try {
        const date = await API.offers.addOffer(offer,shopId);
        dispatch(addOfferSuccess(date));

      } catch (error) {
        dispatch(addOfferFailure(error));
      }
    }
  }

  export function addOfferImg (img,id) {
    return async (dispatch) => {
      dispatch(() => {
        return {
          type: ADD_OFFER_IMG_INIT
        }
      })

      try {

        const data = await API.offers.addImg_offer(img,id);
        return dispatch(addOfferImgSuccess(data));
      } catch (error) {
        return dispatch(addOfferImgFailure(error));
      }
    };
  }
