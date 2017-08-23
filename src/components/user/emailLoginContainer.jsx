//dependencias
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import {browserHistory} from 'react-router';
//css img
//css img
import 'bootstrap/dist/css/bootstrap.css'
import './css/emailLogin.css'
import logo from './img/logo.png'


class EmailLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e){
    e.preventDefault();
    const credentials = {
      username: this.usernameInput.value,
      password: this.passwordInput.value
    };
    await this.props.actions.logInUser(credentials);
    console.log(this.props.myUser.error);
    if (this.props.myUser.error) {
      console.log(this.props.myUser.error);
    }else{
      browserHistory.push("/")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="LOGIN-EMAIL_container">
        <p>Iniciar sesion</p>
        <div className="LOGIN-EMAIL_inputRow">
          <p>User</p>
          <input type="text"  ref={node => this.usernameInput = node}/>
        </div>

        <div className="LOGIN-EMAIL_inputRow">
          <p>Constraseña</p>
          <input type="password" ref={node => this.passwordInput = node}/>
        </div>

        <button type="submit">Ingresar</button>
        <a href="">¿Olvidaste tu contraseña?</a>
      </form>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {myUser: state.sessionReducer};
}


export default connect(mapStateToProps, mapDispatchToProps)(EmailLogin);
