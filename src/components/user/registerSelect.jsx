//dependencias
import React, {Component} from 'react'
import {Link} from 'react-router'

//css img
import './css/registerSelect.css'

export default class RegisterSelect extends Component {
  render() {
    return (
      <div className="REGISTER_container">
        <p>Registrate</p>
        <div className="REGISTER_input-container">
          <Link to="/register/email">
            <div className="REGISTER_btn-social">
              <p>Con gmail</p>
              <span className="fa fa-envelope"/>
            </div>
          </Link>
          <Link to="/">
            <div className="REGISTER_btn-social">
              <p>Con facebook</p>
              <span className="fa fa-facebook"/>
            </div>
          </Link>
          <Link to="/">
            <div className="REGISTER_btn-social">
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
