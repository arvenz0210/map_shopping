//dependencias
import React, {Component} from 'react'
import {Link} from 'react-router'
//css
import './css/newOfferItem.css'

export default class NewOfferItem extends Component {
  render() {
    return (
      <Link to={this.props.link} className="newOfferItem">
        <h3>{this.props.title}</h3>
        <span className="fa fa-plus"></span>
      </Link>
    )
  }
}
{/*|<div className="hoverOfferItem">
  <span><a>Ver tienda</a></span>
</div>*/}
