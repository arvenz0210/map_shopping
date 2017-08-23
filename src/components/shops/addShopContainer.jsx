//dependecias
import React, {Component, PropTypes} from 'react';
import * as shopsActions from '../../actions/shopsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import GoogleMap from 'google-map-react';
import MyShopMarker from './myShopMarker'
import ContainerHeader from '../assets/containerHeader/container-header'
import './css/addShopContainer.css'
class AddShopContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      myShop: {
        lat: -34.471007,
        lng: -58.759639
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClickMap = this.handleClickMap.bind(this)
    /* Act on the event */
  };

  handleClickMap({x, y, lat, lng, event}) {
    this.setState({
      myShop: {
        lat: lat.toFixed(6),
        lng: lng.toFixed(6)
      }
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const shop = {
      name: this.nameInput.value,
      category: this.categoryInput.value,
      lat: this.state.myShop.lat,
      lon: this.state.myShop.lng
    };
    await this.props.actions.addShop(shop);
    browserHistory.push("/myShops")
  }

  render() {
    const defaultProp = {
      center: {
        lat: -34.471007,
        lng: -58.759639
      },
      zoom: 14
    };
    return (
      <ContainerHeader styleContent={{padding: '0'}} title="Crear tienda">
        <div className="ADD_SHOP-container container">
          <form onSubmit={this.handleSubmit} className="ADD_SHOP-form">
            <div className="ADD_SHOP-row">
              <p>Nombre</p>

              <input type="text"  spellCheck="false" ref={node => this.nameInput = node}/>
            </div>

            <div className="ADD_SHOP-row">
              <p>Categoria</p>
              <select spellCheck="false" ref={node => this.categoryInput = node}>
                <option value="1">Verduleria</option>
                <option value="2">Caferteria</option>
                <option value="3">Restaurante</option>
                <option value="4">Remiserias</option>
                <option value="5">Heladeria</option>
              </select>
            </div>

            <div className="ADD_SHOP-map">
              <GoogleMap className="algo" onClick={this.handleClickMap} bootstrapURLKeys={{
                key: 'AIzaSyCyIuBxQ9rvIuW94FwbfqIiAguqUduRmNY'
              }} defaultCenter={defaultProp.center} defaultZoom={defaultProp.zoom}>
                <MyShopMarker lat={this.state.myShop.lat}
                lng={this.state.myShop.lng}/>
              </GoogleMap>
            </div>
            <input className="ADD_SHOP-btn-create" type="submit" value="Crear Tienda"/>
          </form>
        </div>
      </ContainerHeader>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shopsActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddShopContainer);
