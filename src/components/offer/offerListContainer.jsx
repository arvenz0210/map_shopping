//dependencias
import React, {Component} from 'react'
import uuid from 'uuid'
import {browserHistory, Link} from 'react-router'

//Component
import OfferItem from './offerItem'

import ContainerHeader from '../assets/containerHeader/container-header'
//ccs

export default class OfferListContainer extends Component {
  constructor(props){
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }
  /*async handleClick(offerId){
    alert("ol pap")
    await this.props.actions.publishOffer(this.props.shopId, offerId)
    browserHistory.push("/myShop/"+this.props.shopId)
  }*/
  render() {
    const style = {
      backgroundImage: 'url(https://arvenzwebdesing.000webhostapp.com/offerImg.jpg)',
    };

    const styleContainer ={
      backgroundColor: 'rgb(249,249,249)',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }

    return (
        <div style={styleContainer}>
          {
            this.props.offers.map(x=>(
                <OfferItem
                key={uuid.v4()}
                title={x.title}
                  style={style}

                  img={x.image}
                  price={x.price}
                  finalprice={x.finalprice}
                  discount={x.discount}
                  />
            ))
          }

        </div>

    )
  }
}
