//dependencias
import React, {Component} from 'react'
import {browserHistory,Link} from 'react-router'
import uuid from 'uuid'
//Component
import OfferItem from '../offerItem'

import NewOfferItem from '../newOfferItem'

import './css/myOfferListContainer.css'
export default class MyOfferListContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick(offerId){
    alert("hh")
    await this.props.actions.publishOffer(this.props.shopId, offerId)
    browserHistory.push(`/myShop/${offerId}`)
  }
  render() {


    const style = {
      backgroundImage: 'url(https://arvenzwebdesing.000webhostapp.com/offerImg.jpg)',
    };
    console.log(this.props.offers);
    return (
      <div className="offerItemContainer">
        {
          this.props.offers.map(x=>(
            <OfferItem
              key={uuid.v4()}
              price={x.price}
              finalprice={x.price}
              discount={x.discount}
              title={x.title} />
            )
          )

        }
        <NewOfferItem title="PUBLICAR nueva offerta" link={`/offers/publish/${this.props.id}`}/>
      </div>
    )
  }
}
