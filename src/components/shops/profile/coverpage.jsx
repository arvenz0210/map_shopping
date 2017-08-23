//dependencias
import React, {Component} from 'react'

//css
import './css/coverpage.css'
export default class CoverPage extends Component {
  render() {

    const coverPageStyle = {
      backgroundImage: 'url(' + this.props.imgUrl + ')',
    };

    return (
      <div>
        <div className="coverPage" style={coverPageStyle}>
          <div className="shopName">
            <h1>{this.props.title}</h1>
          </div>
        </div>
      </div>
    )
  }
}
