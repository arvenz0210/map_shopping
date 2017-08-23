//dependencias
import React, {Component} from 'react'

//css
//components
import EmailRegister from '../components/user/emailRegisterContainer'
import ImgContainer from '../components/user/imgContainer'

export default class EmailRegisterRoute extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-6" style={{padding: 0}}>
            <ImgContainer img="https://cdn.shutterstock.com/shutterstock/videos/12874025/thumb/1.jpg?i10c=img.resize(height:160)" />
          </div>

          <div className="col-sm-6" style={{padding: 0}}>
            <EmailRegister/>
          </div>

        </div>
      </div>
    )
  }
}
