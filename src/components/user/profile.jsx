//dependencias
import React, {Component} from 'react'
import * as sessionActions from '../../actions/sessionActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//Component
//import LoginSelect from './offerItem'
//css img

import 'bootstrap/dist/css/bootstrap.css'
import './css/userProfile.css'

class UserProfile extends Component {
  async componentWillMount() {

   await this.props.actions.fetchUser(this.props.userId);
 }
  render() {
    return (
      <div className="container">
        <div className="PROFILE_header">
          <h3>{this.props.activeUser.username}
          </h3>
        </div>
        <div className="PROFILE_content">
          <div className="d-flex flex-column align-content-center justify-content-center">
            <div className="PROFILE_userImg">
              <img src="https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/18199431_1565900666756045_2320966962372409448_n.jpg?oh=dd014e2e0cdbb70e6a5b64826d95337e&oe=59F525C8" alt=""/>
            </div>

            <div className="PROFILE_userInfo">

              <div className="d-flex flex-row PROFILE_row">
                <p>Nombre</p>
                <p>{this.props.activeUser.fist_name}</p>
              </div>
              <div className="d-flex flex-row PROFILE_row">
                <p>Apellido</p>
                <p>{this.props.activeUser.fist_last}</p>
              </div>
              <div className="d-flex flex-row PROFILE_row">
                <p>email</p>
                <p>{this.props.activeUser.email}</p>
              </div>
              <div className="d-flex flex-row PROFILE_row">
                <p>username</p>
                <p>{this.props.activeUser.username}</p>
              </div>
              <div className="d-flex flex-row PROFILE_row">
                <p>fecha de nacimiento</p>
                <p>28/01/1999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {userId: ownProps.params.userId, activeUser: state.activeUser.user, loading: state.activeUser.loading};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
