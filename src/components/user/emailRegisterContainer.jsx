//dependencias
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import {browserHistory} from 'react-router'

import './css/emailRegister.css'

class Register extends React.Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e){
    e.preventDefault();
    const user = {
      username: this.userInput.value,
      first_name: this.FnameInput.value,
      last_name: this.LnameInput.value,
      password: this.passwordInput.value,
      email: this.emailInput.value
    };

    await this.props.actions.addUser(user);
    browserHistory.push("/")
  }

  render() {
    return (
      <section className="REGISTER-EMAIL_container" style={{height: '100vh'}}>
      <p>Registrate</p>
        <form onSubmit={this.handleSubmit}>
          <div className="REGISTER-EMAIL_inputRow">
            <p>Usuario</p><input type="text"  ref={node => this.userInput = node}/>
          </div>

          <div className="REGISTER-EMAIL_inputRow">
            <p>Nombre</p><input type="text"  ref={node => this.LnameInput = node}/>
          </div>

          <div className="REGISTER-EMAIL_inputRow">
            <p>Apellido</p><input type="text"  ref={node => this.FnameInput = node}/>
          </div>

          <div className="REGISTER-EMAIL_inputRow">
            <p>Contraseña</p>  <input type="password"   ref={node => this.passwordInput = node}/>
          </div>

          <div className="REGISTER-EMAIL_inputRow">
            <p>E-mail</p><input type="text"  ref={node => this.emailInput = node}/>
          </div>
          <div className="REGISTER-EMAIL_inputRow">

            <button type="submit" className="REGISTER-EMAIL_btn">Registrar</button>
            </div>
        </form>
      </section>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Register);
