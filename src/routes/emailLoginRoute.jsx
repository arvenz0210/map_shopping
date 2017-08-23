//dependencias
import React, {Component} from 'react'

//css
//components
import EmailLogin from '../components/user/emailLoginContainer'
import ImgContainer from '../components/user/imgContainer'

export default class EmailLoginRoute extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-6" style={{padding: 0}}>
            <ImgContainer img="http://arvenzwebdesing.000webhostapp.com/max.jpg" />
          </div>

          <div className="col-sm-6" style={{padding: 0}}>
            <EmailLogin/>
          </div>

        </div>
      </div>
    )
  }
}
