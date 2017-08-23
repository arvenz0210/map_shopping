//dependencias
import React, {Component} from 'react'
import {Link} from 'react-router'
//Component
import ImgContainer from './imgContainer'
//css img
import './css/loginSelect.css'
import logo from './img/logo.png'

export default class LoginSelect extends Component {
  render() {
    return (
      <div className="LOGIN_container">
        <p>Inicia sesion</p>
        <div className="LOGIN_input-container">
          <Link to="/login/email">
            <div className="LOGIN_btn-social">
              <p>Con gmail</p>
              <span className="fa fa-envelope"/>
            </div>
          </Link>
          <Link to="/">
            <div className="LOGIN_btn-social">
              <p>Con facebook</p>
              <span className="fa fa-facebook"/>
            </div>
          </Link>
          <Link to="/">
            <div className="LOGIN_btn-social">
              <p>Con twitter</p>
              <span className="fa fa-twitter"/>
            </div>
          </Link>
            <p className="legal">Copyright (c) 2017 Copyright Holder All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}
