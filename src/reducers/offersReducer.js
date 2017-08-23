import {
  FETCH_OFFERS_INIT,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILURE,

  ADD_OFFER_INIT,
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAILURE

} from '../actions/types';

import initalState from './initialState';

export default function offersList (state = initalState.offersList, action) {
  switch (action.type) {

    case FETCH_OFFERS_INIT:
      return{
        ...state,
        offers: [],
        newOffer: {},
        error: null,
        loading: true
      };

    case FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload,
        newOffer: {},
        error: null,
        loading: true
      };

    case FETCH_OFFERS_FAILURE:
      return {
        ...state,
        offers: [],
        newOffer: {},
        error: action.payload,
        loading: false
      };


      case ADD_OFFER_INIT:
        return{
          ...state,
          offers: [],
          newOffer: {},
          error: null,
          loading: true
        };

      case ADD_OFFER_SUCCESS:
        return {
          ...state,
          offers: [...state.offers, action.payload],
          newOffer: action.payload,
          error: null,
          loading: false
        };

      case ADD_OFFER_FAILURE:
        return {
          ...state,
          offers: [...state.items],
          newOffer: {},
          error: action.payload,
          loading: false
        };

    default:
      return state;
  }
}
