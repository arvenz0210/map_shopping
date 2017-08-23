//dependencias
import React, {Component} from 'react'
import {Link} from 'react-router'
//css
import './css/offerItem.css'

export default class OfferItem extends Component {
  render() {
    const shopUrl= `/shop/${this.props.shopId}`
    return (
      <Link to={shopUrl} className="offerItem">
        <div className="img">
          <img src={this.props.img}/>
        </div>
        <div className="info">
          <h3>{this.props.title}</h3>
          <div className="desc">
            <p>{this.props.desc}</p>
          </div>
          <div className="cont">
            <span className="discount">{this.props.discount}% OFF</span><span className="finalPrice">${this.props.finalprice}</span>
          </div>
        </div>
      </Link>
    )
  }
}
{/*|<div className="hoverOfferItem">
  <span><a>Ver tienda</a></span>
</div>*/}
