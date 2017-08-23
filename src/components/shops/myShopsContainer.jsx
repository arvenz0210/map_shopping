//dependencias
import React, {Component, PropTypes} from 'react';
import * as shopsActions from '../../actions/shopsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory,Link} from 'react-router'
import ContainerHeader from '../assets/containerHeader/container-header'

//css
import defaultShop from './img/defaultShop.png'

import img from './img/shop_IMG.jpg'
import './css/myShopsContainer.css'
import 'bootstrap/dist/css/bootstrap.css'
//componentes

class myShopsContainer extends Component {

  async componentWillMount() {
    await this.props.actions.fetchMyShops();
  }

  render() {
    return (
      <div className="container">
      <ContainerHeader title="Mis tiendas">
        <section className="container MY_SHOP_CONTAINER-itemContainer">
          {
            this.props.shops.map(x=>(
              <Link to={`/myShop/${x.id}`} key={x.id} className="MY_SHOP_CONTAINER-item">
                <img src={x.cover_photo}/>
                <h2>{x.name}</h2>
              </Link>
            ))
          }

        </section>
      </ContainerHeader>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {shops: state.activeMyShops.shops};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shopsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(myShopsContainer);
