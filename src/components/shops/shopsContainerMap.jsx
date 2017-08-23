//dependencias
import React, { Component, PropTypes} from 'react';
import * as shopsActions from '../../actions/shopsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import $ from 'jquery';
//css img
import './css/shopMap.css'
//componentes
import OfferHomeContainer from '../offer/offerHomeContainer'
import ShopsMap from './shopsMap';

class ShopsContainerMap extends Component {

  constructor(props, context){
    super(props, context);
    this.handleFilter = this.handleFilter.bind(this)
  }

  async componentWillMount(){
    await this.props.shopsActions.fetchShops(0);
  }

  async handleFilter(categoryId,categoryName){

      $( document ).ready(function() {
        $("#iconCategorySelect").attr("src",`http://arvenzwebdesing.000webhostapp.com/categories/${categoryId}.png`);
      });

    await this.props.shopsActions.fetchShops(categoryId);
  }

  render(){
    const urlImg = 'http://arvenzwebdesing.000webhostapp.com/categories/'
    return(

      <div>
        <div className="headerHome headerHome-Menu">
          <h2>Locales</h2>
          
          <button className="categoryContainer" id="sidebarButton">
            <p>Categoria:</p>
            <span className="categoryName"><img id="iconCategorySelect" src={`${urlImg}0.png`}/></span>
          </button>
        </div>

        <div className="map-sidebarContainer">
        <div className="sidebar">
          <button className="catItem" onClick={(evt) => this.handleFilter(1,'Verduleria')}>
            <img src={`${urlImg}1.png`} alt="Categoria"/>
            <h4>Verduleria</h4>
          </button>
          <button className="catItem" onClick={(evt) => this.handleFilter(2,'Cafeteria')}>
            <img src={`${urlImg}2.png`} alt="Categoria"/>
            <h4>Cafeteria</h4>
          </button>
          <button className="catItem" onClick={(evt) => this.handleFilter(3,'Restaurante')}>
            <img src={`${urlImg}3.png`} alt="Categoria"/>
            <h4>Restaurante</h4>
          </button>
          <button className="catItem" onClick={(evt) => this.handleFilter(4,'Remiseria')}>
            <img src={`${urlImg}4.png`} alt="Categoria"/>
            <h4>Remiseria</h4>
          </button>
          <button className="catItem" onClick={(evt) => this.handleFilter(5,'Heladeria')}>
            <img src={`${urlImg}5.png`} alt="Categoria"/>
            <h4>Heladeria</h4>
          </button>
          <button className="catItem" onClick={(evt) => this.handleFilter(6,'Mercado')}>
            <img src={`${urlImg}6.png`} alt="Categoria"/>
            <h4>Mercado</h4>
          </button>
          <button className="catItem" onClick={(evt) => this.handleFilter(7,'Panaderia')}>
            <img src={`${urlImg}7.png`} alt="Categoria"/>
            <h4>Panaderia</h4>
          </button>
          <button className="catItem" onClick={(evt) => this.handleFilter(0,'Todas')}>
            <img src={`${urlImg}0.png`} alt="Categoria"/>
            <h4>Todas</h4>
          </button>
        </div>
          <ShopsMap
          className="map"
          loading={this.props.loading}
          dataShops={this.props.shops} />
        </div>

        <div className="headerHome">
          <h2>Ofertas</h2>
        </div>
        {
          <OfferHomeContainer/>
        }

      </div>
    )
  }
}


ShopsContainerMap.defaultProps={
  shops: []
}

ShopsContainerMap.PropTypes={
  shops: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired
}



function mapStateToProps(state){
  return{
    shops: state.shopsList.shops,
    loading: state.shopsList.loading
  }
}

function mapDispatchToProps(dispatch){
  return{
    shopsActions: bindActionCreators(shopsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopsContainerMap);
