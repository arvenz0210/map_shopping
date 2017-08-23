//dependencias
import React, {Component} from 'react';
//css img
//import 'bootstrap/dist/css/bootstrap.css'
//componentes
import AddOfferContainer from '../components/offer/addOfferContainer'

export default class addOfferRoute extends Component {
  render(){
    return(
      <div className="container">
        <AddOfferContainer/>
      </div>
    )
  }
}
