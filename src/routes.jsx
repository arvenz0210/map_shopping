//dependencias
import React from 'react';
import { Route, IndexRoute} from 'react-router';
import {browserHistory} from 'react-router';
//componentes

import RegisterSelectRoute from './routes/RegisterSelectRoute';
import EmailLoginRoute from './routes/emailLoginRoute';
import EmailRegisterRoute from './routes/emailRegisterRoute';
import LoginSelectRoute from './routes/loginSelectRoute';

import App from './App';
import Home from './routes/home';
import AddShop from './routes/addShop';

import addOfferContainer from './components/offer/addOfferContainer';


import ShopActiveContainer from './components/shops/shopActiveContainer';
import MyShopsContainer from './components/shops/myShopsContainer';
import MyShopContainer from './components/shops/myShopContainer';
import  UserProfile from './components/user/profile';
//import MyOfferListContainer from './components/offer/myOfferListContainer';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/login/select" component={LoginSelectRoute}/>
    <Route path="/register/select" component={RegisterSelectRoute}/>

    <Route path="/login/email" component={EmailLoginRoute}/>
    <Route path="/register/email" component={EmailRegisterRoute}/>


    <Route path="/user/:userId" component={UserProfile}/>
    <Route path="/myShops" component={MyShopsContainer}/>

    <Route path="/myShop/:shopId" component={MyShopContainer}/>

    <Route path="/shop/add" onEnter={requireAuth} component={AddShop}/>
    <Route path="/shop/:shopId" component={ShopActiveContainer}/>



      <Route path="/shop/:shopId/offer/add" component={addOfferContainer}/>







    {/* SHOP EDITION ROUTES*/}




    </Route>
);
//
function requireAuth() {
  if (!sessionStorage.jwt) {
    browserHistory.push('/login');
  }
}
