import React, {Component} from 'react'

//css
import './css/othersComments.css'

export default class OthersComments extends Component {
  render() {
    return (
      <div className="otherComment">
        <div className="d-flex flex-row justify-content-center sub-otherComment">
          <a to="/user/5" className="PROFILE_img">
            <img src="https://arvenzwebdesing.000webhostapp.com/profile.jpg" alt/>
          </a>
          <div className="inputs">
            <div className="d-flex flex-row flex-wrap">
              <div className="np">
                <p>{this.props.name}</p>
                <div className="points">
                  <p>Puntaje:</p>
                  <span className="fa fa-star"/>
                  <span className="fa fa-star"/>
                  <span className="fa fa-star"/>
                  <span className="fa fa-star"/>
                  <span className="fa fa-star"/>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row flex-wrap">
              <div className="">
                <span id="text" type="textArea" defaultValue={""}>{this.props.opinion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
