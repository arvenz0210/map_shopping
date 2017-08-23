import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import shopsList from './shopsListReducer';
import activeShop from './activeShopReducer';
import activeMyShop from './activeMyShopReducer';
import activeMyShops from './activeMyShopsReducer';
import activeUser from './activeUserReducer';
import sessionReducer from './sessionReducer';
import offersReducer from './offersReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  offersReducer,
  shopsList,
  activeShop,
  sessionReducer,
  activeMyShop,
  activeMyShops,
  activeUser
});
//offersReducer,

export default rootReducer;
