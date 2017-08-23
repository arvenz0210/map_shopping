//dependencias
import React, {Component} from 'react';
//css img
import 'bootstrap/dist/css/bootstrap.css'
//componentes
import AddShopContainer from '../components/shops/addShopContainer'

export default class AddShop extends Component {
  render(){
    return(
      <div className="container">
        <AddShopContainer/>
      </div>
    )
  }
}
