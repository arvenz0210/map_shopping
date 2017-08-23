import {
  FETCH_MY_SHOP_INIT,
  FETCH_MY_SHOP_SUCCESS,
  FETCH_MY_SHOP_FAILURE,


  EDIT_COVERPAGE_INIT,
  EDIT_COVERPAGE_SUCCESS,
  EDIT_COVERPAGE_FAILURE,

  DEL_IMG_INIT,
  DEL_IMG_SUCCESS,
  DEL_IMG_FAILURE,

  EDIT_INFO_INIT,
  EDIT_INFO_SUCCESS,
  EDIT_INFO_FAILURE,

  EDIT_DESC_INIT,
  EDIT_DESC_SUCCESS,
  EDIT_DESC_FAILURE,

  ADD_IMG_INIT,
  ADD_IMG_SUCCESS,
  ADD_IMG_FAILURE
} from '../actions/types';

import initalState from './initialState';

export default function activeMyShop (state = initalState.activeMyShop, action) {
  switch (action.type) {

    case FETCH_MY_SHOP_INIT:
      return{
        ...state,
        shop: [],
        loadin: true,
        error: null
      };

    case FETCH_MY_SHOP_SUCCESS:
      return {
        ...state,
        shop: action.payload,
        error: null,
        loading: false
      };

    case FETCH_MY_SHOP_FAILURE:
      return {
        ...state,
        shop: null,
        error: action.payload,
        loading: false
      };


    case EDIT_INFO_SUCCESS:
      return {
          shop:{
            ...state.shop,
            name: action.payload.name,
            category: action.payload.category
          }
      };
      case EDIT_INFO_FAILURE:

      case EDIT_DESC_SUCCESS:
        return {
            shop:{
              ...state.shop,
              description: action.payload,
            }
        };
        case EDIT_DESC_FAILURE:

    case EDIT_COVERPAGE_SUCCESS:
      return {
          shop:{
            ...state.shop,
            cover_photo: action.payload
          }
      };
    case EDIT_COVERPAGE_FAILURE:


    case ADD_IMG_INIT:
      return{
        ...state,

        loadin: true,
        error: null
      };

    case ADD_IMG_SUCCESS:
      return {
        ...state,
        shop:{
          ...state.shop,
          gallery:[...state.shop.gallery, action.payload]
        },
        error: null,
        loading: false
      };

    case ADD_IMG_FAILURE:
      return {
        ...state,
        shop: null,
        error: action.payload,
        loading: false
      };


      case DEL_IMG_INIT:
        return{
          ...state,

          loadin: true,
          error: null
        };

      case DEL_IMG_SUCCESS:
        const searchItem = (gallery) => gallery.id === action.payload;
        const item = state.shop.gallery.find(searchItem);
        const index = state.shop.gallery.findIndex(searchItem);

        return {
          ...state,
          shop:{
            ...state.shop,
            gallery:[
              ...state.shop.gallery.slice(0, index),
              ...state.shop.gallery.slice(index + 1)
            ]
          }

        };

      case DEL_IMG_FAILURE:
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
