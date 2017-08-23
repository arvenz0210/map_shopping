//dependencias
import React, {Component} from 'react'

//css
const style = {
  height: '100vh',
  width: '96.7vw'
}
import 'bootstrap/dist/css/bootstrap.css'
//components
import LoginSelect from '../components/user/loginSelect'

import ImgContainer from '../components/user/imgContainer'

export default class LoginSelectRoute extends Component {
  render() {
    return (
      <div style={style}>
        <div className="row">

          <div className="col-sm-6" style={{padding: 0}}>
            <ImgContainer img="https://cdn.shutterstock.com/shutterstock/videos/12874025/thumb/1.jpg?i10c=img.resize(height:160)" />
          </div>

          <div className="col-sm-6" style={{padding: 0}}>
            <LoginSelect/>
          </div>

        </div>
      </div>
    )
  }
}
