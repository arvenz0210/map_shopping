//dependencias
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link, IndexLink} from 'react-router';
import $ from 'jquery'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../../actions/sessionActions';
//css img
import LogoImg from './img/logo.png';
import './css/main.css'

class Header extends Component {

  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    $(document).ready(function() {
      $(".submenu").click(function() {
        $(this).children("ul").slideToggle();
      });
    });
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    if (this.props.logged_in) {

      return (
        <header>
          <div className="d-flex flex-column flex-md-row justify-content-md-between">
            <div className="logo">
              <Link to="/"><img src={LogoImg}/></Link>
              <input type="checkbox" id="btn-menu"/>
              <label htmlFor="btn-menu" className="icon-menu">
                <span className="fa fa-bars"/>
              </label>
            </div>
            <nav className="menu">
              <ul className="primary d-flex flex-column flex-md-row">

                <li>
                  <span>Hola {sessionStorage.name}</span>
                </li>
                <li className="submenu">
                  <a href="#">Mi Cuenta   <span className="fa fa-angle-down"></span></a>
                  <ul className="secondary">
                    <li>
                      <Link to="/shop/add">Crear tienda</Link>
                      </li>
                    <li>
                      <Link to="/myShops">Mis tiendas</Link>
                    </li>
                    <li>
                      <a href="#" onClick={this.logOut}>Salir</a>
                    </li>
                  </ul>
                </li>
                <li className="active">
                  <a href="#">Premium</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )
    } else {

      return (
        <header>
          <div className="d-flex flex-column flex-md-row justify-content-md-between">
            <div className="logo">
              <Link to="/"><img src={LogoImg}/></Link>
              <input type="checkbox" id="btn-menu"/>
              <label htmlFor="btn-menu" className="icon-menu">
                <span className="fa fa-bars"/>
              </label>
            </div>
            <nav className="menu">
              <ul className="primary d-flex flex-column flex-md-row">
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li className="submenu">
                  <Link to="/login/email">Iniciar Sesion</Link>
                </li>
                <li className="active">
                  <Link to="/register/email">Registrate</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    logged_in: state.sessionReducer.session
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
